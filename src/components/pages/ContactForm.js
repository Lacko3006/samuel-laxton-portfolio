import React, { useRef } from "react";
import "../../css/ContactForm.css";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const serviceId = process.env.REACT_APP_Service_ID;
  const templateId = process.env.REACT_APP_Template_ID;
  const publicKey = process.env.REACT_APP_Public_Key;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        console.log("Sent Successfully");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact-name">
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div className="contact-email">
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div className="contact-message">
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
