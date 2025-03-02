import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItemsToCart, removeItemsFromCart } from "../slices/cartSlice";
import Swal from "sweetalert2";
import "../styles/CartItem.css"

export default function CartItem(props) {
  const { name, price, defaultPrice, imageId } = props?.details?.item;
  const { quantity } = props?.details;

  // dispatching an action which will call the reducer
  const dispatch = useDispatch();

  const handleAddItemToCart = (item) => {
    Swal.fire({
      title: "Do you want to Add Item to the Cart?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(addItemsToCart(item));
      }
    });
  };

  const handleRemoveItemFromCart = (item) => {
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
    <div className="cart_item_container">
      <div className="cart_item_img_sec">
        <img
          src={`${CDN_URL}${imageId}`}
          alt={name}
          className="cart_item_img"
        />
      </div>
      <div className="cart_item_sec">
        <div>
          <h2 className="cart_item_sec_heading">{name}</h2>
          <p className="cart_item_sec_para">
            ₹ {(price / 100) * quantity || (defaultPrice / 100) * quantity}
          </p>
        </div>
        <div className="cart_item_sec_btn">
          <button
            onClick={() => handleRemoveItemFromCart(props?.details?.item)}
            className="remove_item_btn"
          >
            -
          </button>
          <span className="cart_item_sec_message">{quantity}</span>
          <button
            onClick={() => handleAddItemToCart(props?.details?.item)}
            className="add_item_btn"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
