import { MdStarRate } from "react-icons/md";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRatingString,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = restaurantData?.info;
  return (
    <div className="restaurant-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="restaurant-image"
      />
      <div className="restaurant-details">
        <h3 className="restaurant-name">
          {name.length > 24 ? name.slice(0, 21) + "..." : name.slice(0, 24)}
        </h3>
        <div className="esa-rating">
          <h4 className="rating">
            <MdStarRate
              className="rating-logo"
              style={
                avgRatingString > 4.0
                  ? { backgroundColor: "var(--green)" }
                  : { backgroundColor: "var(--red)" }
              }
            />
            <span>{avgRating}</span>
          </h4>
          <h4>{costForTwo}</h4>
          <h4>{sla?.deliveryTime} mins</h4>
        </div>
        <p className="cousine">
          {cuisines.join(", ").length > 32
            ? cuisines.join(", ").slice(0, 28) + "..."
            : cuisines.join(", ").slice(0, 32)}
        </p>
        <p className="location">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
