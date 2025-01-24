import React, { useEffect } from "react";
import "./contact.css";
import { Element } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import ContactForm from "../contactform/ContactForm";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    // Animate contact_content
    gsap.fromTo(
      ".contact_content",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact_content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate contact_content text and span
    gsap.fromTo(
      [".contact_content p", ".contact_content h1 span"],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2, // Staggered animation for text
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact_content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate contact_me boxes
    gsap.fromTo(
      ".contact_me .box",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3, // Stagger each box animation
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact_me",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate contact_sendme (form)
    gsap.fromTo(
      ".contact_sendme",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact_sendme",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Element className="contact_container" id="contact">
      <div className="contact_tiitle">
        <h3>contact me</h3>
      </div>
      <div className="contact_arrange">
        <div className="contact_details">
          <div className="contact_content">
            <h1>
              Let’s<span> Write something</span> amazing together!...
            </h1>
            <p>
              Feel free to reach out for projects, collaborations, or web
              development inquiries via the form or email!
            </p>
          </div>
          <div className="contact_me">
            <div className="box">
              <p>
                ✉️ Mail me:
                <span>
                  <a
                    href="mailto:nivasinfy07@gmail.com"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: " #3498DB",
                      paddingLeft: "10px",
                    }}
                  >
                    nivasinfy07@gmail.com
                  </a>
                </span>
              </p>
            </div>
            <div className="box">
              <p>
                <FaGithub /> GitHub:
                <span>
                  <a
                    href="https://github.com/Nivas2307"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: " #3498DB",
                      paddingLeft: "10px",
                    }}
                  >
                    Git account
                  </a>
                </span>
              </p>
            </div>
            <div className="box">
              <p>
                📞 Call me:
                <span>
                  <a
                    href="tel:+91 6374137678"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: " #3498DB",
                      paddingLeft: "10px",
                    }}
                  >
                    6374137678
                  </a>
                </span>
              </p>
            </div>
            <div className="box">
              <p>
                🌍 My Location:<span>Bangalore</span>
              </p>
            </div>
          </div>
        </div>
        <div className="contact_sendme">
          <ContactForm />
        </div>
      </div>
    </Element>
  );
};

export default Contact;
