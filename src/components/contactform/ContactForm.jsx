import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contactform.css";
import { IoIosSend } from "react-icons/io";
const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("");

    emailjs
      .sendForm(
        "service_vjilsrd",
        "template_htny849",
        form.current,
        "Bna02zDv_MxDKJtjs"
      )
      .then(
        () => {
          setStatus("SUCCESS! Your message has been sent.");
          form.current.reset();
        },
        (error) => {
          setStatus("FAILED... Please try again later.");
          console.log("Email send failed:", error.text);
        }
      );
  };

  return (
    <div className="contact_send">
      <form ref={form} onSubmit={sendEmail}>
        <p>
          Thank you for <span>scrolling</span>
        </p>
        <h5>
          Let’s <span>create something</span> amazing together
        </h5>
        <div>
          <input
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
            required
            aria-label="Your Name"
          />
        </div>
        <div>
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            aria-label="Email Address"
          />
        </div>
        <div>
          <input
            type="tel"
            name="user_phone"
            placeholder="Mobile Number"
            aria-label="Phone Number"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="let's writting something..."
            required
            aria-label="Message"
          ></textarea>
        </div>
        <div className="contact_btn">
          <button type="submit">
            Send <IoIosSend />
          </button>
        </div>
      </form>
      {status && <p className="status_message">{status}</p>}
    </div>
  );
};

export default ContactForm;
