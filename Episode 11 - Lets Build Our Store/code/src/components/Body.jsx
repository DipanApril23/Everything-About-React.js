import { useContext, useState } from "react";
import { Shimmer } from "./Shimmer";
import RestaurantCard, { withDiscountOffer } from "./RestaurantCard";
import { Link } from "react-router";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserOffline from "./userOffline";
import UserContext from "../utils/UserContext";

const Body = () => {
  // State Variables
  // definition of state react variable
  // ! Whenever state variable updates, react triggers a reconciliation cycle (re-renders the component)
  const [showButton, setShowButton] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [tempUserName, setTempUserName] = useState("");

  const isOnline = useOnlineStatus();
  const [restaurantList, filteredRestaurants, setFilteredRestaurants] =
    useRestaurantData();

  // HOC for RestaurantCard with discount offer
  const RestaurantCardWithDiscount = withDiscountOffer(RestaurantCard);

  // context variables
  const { loggedInUser, setUserName } = useContext(UserContext);

  // Handle filtering by top-rated restaurants
  const filterRestaurantList = () => {
    const filteredRestaurant = restaurantList.filter(
      (res) => res.info.avgRating > 4.4
    );
    setFilteredRestaurants(filteredRestaurant);
    setShowButton(false);
  };

  // Handle search functionality
  // filter the restaurant cards & update the UI
  const handleSearch = () => {
    const filtered = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
    setSearchText("");

    if (filtered.length === 0) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  const showAllRestaurant = () => {
    setFilteredRestaurants(restaurantList);
    setShowButton(true);
  };

  const handleUserNameSubmit = () => {
    if (tempUserName.trim().length) {
      setUserName(tempUserName);
    }
    setTempUserName(""); // Clear the input box after submission
  };

  // conditional rendering - Rendering on the basis of Condition
  if (!isOnline) {
    return <UserOffline />;
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="update_user">
        <label htmlFor="username" className="update_user_label">
          UserName:
        </label>
        <input
          type="text"
          id="username"
          placeholder="Update UserName..."
          className="update_user_input"
          value={tempUserName}
          onChange={(e) => setTempUserName(e.target.value)}
        />
        <button className="update_user_btn" onClick={handleUserNameSubmit}>
          Submit
        </button>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a restaurant..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="filter">
        {showButton ? (
          <button className="filter-btn" onClick={filterRestaurantList}>
            Top Rated Restaurants
          </button>
        ) : (
          <button className="filter-btn" onClick={showAllRestaurant}>
            Show All Restaurants
          </button>
        )}
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.length !== 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <RestaurantCardWithDiscount restaurantData={restaurant} />
              ) : (
                <RestaurantCard restaurantData={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <h1>No restaurant found with the given search criteria.</h1>
        )}
      </div>
    </div>
  );
};

export default Body;
