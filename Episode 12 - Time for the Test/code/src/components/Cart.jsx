import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../slices/cartSlice";
import EmptyCart from "./EmptyCart";
import Bill from "./Bill";
import Swal from "sweetalert2";
import "../styles/Cart.css";

export default function Cart() {
  // Subscribing to the cart
  const cart = useSelector((store) => store.cart.cartItems);
  const cartItems = Object.values(cart);

  // console.log(cartItems);

  // dispatching an action which will call the reducer
  const dispatch = useDispatch();

  const handleClearCart = () => {
    Swal.fire({
      title: "Do you want to Clear the Cart?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
      }
    });
  };

  return (
    <>
      {cartItems.length ? (
        <div className="cart_container">
          <div className="cart_sec">
            <h1 className="cart_sec_heading">Cart</h1>
            <button onClick={handleClearCart} className="cart_sec_btn">
              Clear Cart
            </button>
          </div>
          <div className="total_item_sec">
            {/* Items Card */}
            <div className="items_card_sec">
              <div className="itemsCard">
                {cartItems.map((item) => (
                  <CartItem key={item?.item?.id} details={item} />
                ))}
              </div>
            </div>
            {/* Bill Card */}
            <div className="bill_card">
              <Bill cartItems={cartItems} />
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
