import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { API } from "../utils/constants";
import { Link } from "react-router";

const Body = () => {
  // State Variables
  // definition of state react variable
  // ! Whenever state variable updates, react triggers a reconciliation cycle (re-renders the component)

  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [searchText, setSearchText] = useState("");

  // Fetch restaurant data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API);
      const json = await data.json();
      // optional chaining:-
      const restaurants =
        json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setRestaurantList(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle filtering by top-rated restaurants
  const filterRestaurantList = () => {
    const filteredRestaurant = restaurantList.filter(
      (res) => res.info.avgRating > 4.3
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
  };

  // conditional rendering - Rendering on the basis of Condition

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
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
        {showButton && (
          <button className="filter-btn" onClick={filterRestaurantList}>
            Top Rated Restaurants
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
              <RestaurantCard restaurantData={restaurant} />
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
