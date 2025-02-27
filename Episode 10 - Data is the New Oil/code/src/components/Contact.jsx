import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact-container" style={{ marginTop: "100px" }}>
      <div className="contact-left">
        <img
          src="https://cdn.uengage.io/uploads/5/image-222624-1715686809.png"
          alt=""
        />
      </div>

      <div className="contact-right">
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Type your Message here..." required></textarea>
          <button type="submit">Submit</button>
          {message && (
            <span style={{ marginTop: "20px" }}>
              Thanks for contacting with BellyBox, We will reply ASAP.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
