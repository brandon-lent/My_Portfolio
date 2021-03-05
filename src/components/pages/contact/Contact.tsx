import React from "react";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  return (
    <form name="conract" method="POST" data-netlify="true">
      <h2>Contact Me</h2>
      <div className="contact-input">
        <label htmlFor="email">E-mail</label>
        <input placeholder="E-mail" name="email" type="text" id="email"></input>
      </div>
      {/* <div className="contact-input">
        <label htmlFor="name">Name</label>
        <input placeholder="Name" name="name" type="text" id="name"></input>
      </div> */}
      <div className="contact-input">
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Enter your message.."
          rows={5}
          id="message"
          name="message" 
        ></textarea>
      </div>
      <div className="contact-input">
        <button type="submit" className="button button-outline">
          Send
        </button>
      </div>
    </form>
    
  );
};
