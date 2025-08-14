import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <h2>Get into the Conversation</h2>
      <form>
        <div className="row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="row">
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
        </div>
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
