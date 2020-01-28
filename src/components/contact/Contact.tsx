import React from "react";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <div className="contact">
      <p>Contact Me</p>
      <div className="contact-input">
        <label htmlFor="email">E-mail</label>
        <input placeholder="E-mail" id="email"></input>
      </div>
      <div className="contact-input">
        <label htmlFor="name">Name</label>
        <input placeholder="Name" id="name"></input>
      </div>
      <div className="contact-input">
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Enter your message.."
          rows={5}
          id="message"
        ></textarea>
      </div>
      <div className="contact-input">
        <button type="button" className="button button-outline">
          Send
        </button>
      </div>
    </div>
  );
};
