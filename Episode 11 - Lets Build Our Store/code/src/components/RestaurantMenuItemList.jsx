import { CDN_URL } from "../utils/constants";
import { MdStarRate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import "../styles/RestaurantMenuItemList.css";
import { addItemsToCart, removeItemsFromCart } from "../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const RestaurantMenuItemList = ({ items }) => {
  // Dispatch - It is a function that sends actions to the Redux store. - Hooks
  const dispatch = useDispatch();

  // Subscribing to the cart
  const cart = useSelector((store) => store.cart.cartItems);
  const cartItems = Object.values(cart);

  const handleAddToCart = (item) => {
    // Alert if yes then add to
    Swal.fire({
      title: "Do you want to Add Item to the Cart?",
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // Swal.fire("Saved!", "", "success");

        // Add item to cart - Dispatching an action
        dispatch(addItemsToCart(item));
        // {payload: "Pizzaa", type: "cart/addItem"}
      }
    });
  };

  const handleRemoveFromCart = (item) => {
    Swal.fire({
      title: "Do you want to Remove Item from the Cart?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeItemsFromCart(item));
      }
    });
  };
  return (
    <div>
      {items.map((item) => {
        const { id, name, price, defaultPrice, ratings, imageId, description } =
          item.card.info;
        const avgRatingString = ratings?.aggregatedRating?.rating || 3.8;
        const cartItem = cartItems.find((cartItem) => cartItem.item.id === id);

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
              <img src={CDN_URL + imageId} alt={name} />
              {cartItem ? (
                <div className="add_rem_button">
                  <button
                    className="remove_qty_btn"
                    onClick={() => handleRemoveFromCart(cartItem.item)}
                  >
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    className="add_qty_btn"
                    onClick={() => handleAddToCart(cartItem.item)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="add-btn"
                  onClick={() => handleAddToCart(item.card.info)}
                >
                  ADD
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuItemList;
