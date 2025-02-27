import { CDN_URL } from "../utils/constants";
import { MdStarRate } from "react-icons/md";
import "../styles/RestaurantMenuItemList.css";

const RestaurantMenuItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, name, price, defaultPrice, ratings, imageId, description } =
          item.card.info;
        const avgRatingString = ratings?.aggregatedRating?.rating || 3.8;

        return (
          <div key={id} className="menu-items">
            <div className="left">
              <h2>{name}</h2>
              <h4>₹{price / 100 || defaultPrice / 100}</h4>
              <p>
                {(description && description.slice(0, 140)) || "Dummy Data"}
              </p>
              <h4 className="rating">
                <MdStarRate
                  className="rating-logo"
                  style={
                    avgRatingString > 4.0
                      ? { backgroundColor: "green" }
                      : { backgroundColor: "red" }
                  }
                />
                <span className="rating-text">
                  {avgRatingString} (
                  {ratings?.aggregatedRating?.ratingCountV2 || 6})
                </span>
              </h4>
            </div>

            <div className="right">
              <img
                src={CDN_URL + imageId}
                alt={name}
              />
              <button className="add-btn">ADD+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuItemList;
