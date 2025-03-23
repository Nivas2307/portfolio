import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/navbar/Nav";
import About from "./components/aboutme/About";
import Skill from "./components/myskills/Skill";
import Experienace from "./components/Experience/Experienace";
import Contact from "./components/contactme/Contact";
import Footer from "./components/footer/Footer";
import Service from "./components/service/Service";
import Projectcontainer from "./components/projectcontainer/Projectcontainer";
import Loader from "./components/loader/Loader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!loading) {
      // Global fade-in animation for sections
      gsap.utils.toArray("section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Start animation when 80% of section is visible
            end: "bottom 20%", // End animation when bottom 20% is visible
            toggleActions: "play none none reverse",
          },
        });
      });

      // Navbar animation
      gsap.from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [loading]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div>
          <Nav />
          <main>
            <section id="about">
              <About />
            </section>
            <section id="skills">
              <Skill />
            </section>
            <section id="services">
              <Service />
            </section>
            <section id="projects">
              <Projectcontainer />
            </section>
            {/* <section id="experience">
              <Experienace />
            </section> */}
            <section id="contact">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
