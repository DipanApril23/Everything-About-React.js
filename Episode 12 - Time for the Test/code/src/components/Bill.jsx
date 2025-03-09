import { useState } from "react";
import "../styles/Bill.css";

export default function Bill(props) {
  const { cartItems } = props;
  const [deliveryTip, setDeliveryTip] = useState(0);

  const itemTotal = cartItems.reduce((total, item) => {
    return (
      total +
      item.quantity * (item.item.price / 100 || item.item.defaultPrice / 100)
    );
  }, 0);

  const deliveryFee = 40,
    platformFee = 5,
    GST = (itemTotal * 5) / 100,
    otherCharges = itemTotal / 100;

  const subTotal =
    itemTotal + deliveryFee + platformFee + GST + otherCharges + deliveryTip;

  const handleTipChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setDeliveryTip(isNaN(value) ? 0 : value);
  };

  return (
    <div className="bill_container">
      <h2 className="bill_container_heading">Bill Details</h2>
      <div className="item_total">
        <span>Item Total</span>
        <span>₹ {itemTotal.toFixed(2)}</span>
      </div>
      <div className="delivery_fee">
        <span>Delivery Fee(fixed)</span>
        <span>₹ {deliveryFee.toFixed(2)}</span>
      </div>
      <div className="delivery_tip_sec">
        <span>Delivery Tip</span>
        <input
          type="number"
          placeholder="0"
          onChange={handleTipChange}
          className="delivery_tip"
          style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
        />
      </div>
      <div className="platform_fee">
        <span>Platform fee</span>
        <span>₹ {platformFee.toFixed(2)}</span>
      </div>
      <div className="gst_other_charge">
        <span>GST and Restaurant Charges</span>
        <span>₹ {(GST + otherCharges).toFixed(2)}</span>
      </div>
      <div className="ammount_to_pay">
        <span className="to_pay">TO PAY</span>
        <span className="subtotal">₹ {subTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}
