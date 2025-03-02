import "../styles/EmptyCart.css";

export default function EmptyCart() {
  return (
    <div className="empty_cart_container">
      <div className="empty_body">
        <p className="empty_body_para">Cart Empty</p>
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt="Empty Cart"
          className="empty_body_pic"
        />
        <div className="empty_cart_message_section">
          <p className="empty_cart_message">
            Your cart is empty.
          </p>
          <p className="add_to_cart">
            Add something from the menu.
          </p>
        </div>
      </div>
    </div>
  );
}
