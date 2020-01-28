import React from "react";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <div className="contact">
      <p>Contact Me</p>
      <div className="contact-input">
        <label htmlFor="email">E-mail</label>
        <input id="email"></input>
      </div>
      <div className="contact-input">
        <label htmlFor="name">Name</label>
        <input id="name"></input>
      </div>
      <div className="contact-input">
        <label htmlFor="message">Message</label>
        <textarea rows={5} id="message"></textarea>
      </div>
      <button>Send</button>
    </div>
  );
};
