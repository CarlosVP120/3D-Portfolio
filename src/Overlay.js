import { motion } from "framer-motion";
import React from "react";
import Card from "./Card.js";
import ProjectsJSON from "./projects.json";

export default function Overlay() {
  const scrollRef = React.useRef(null);
  const Projects = ProjectsJSON.projects;

  function sendMail() {
    window.open("mailto:carlosveryan4@gmail.com");
  }

  return (
    <div className="container">
      <motion.header
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 60, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 6,
          delay: 6
        }}
      >
        <h3>CARLOS VERYAN</h3>
        <motion.button
          animate={{ translateX: "0%", opacity: 1 }}
          initial={{ translateX: "-120%", opacity: 0 }}
          transition={{
            delay: 2.6
          }}
          className="ctaButton contact"
          onClick={() => {
            sendMail();
          }}
        >
          GET IN TOUCH
        </motion.button>
      </motion.header>
      <section className="overlay">
        <motion.h1
          animate={{ translateX: "0%", opacity: 1 }}
          initial={{ translateX: "-100%", opacity: 0 }}
          transition={{
            duration: 1.8,
            delay: 2.5
          }}
        >
          Unlocking your hidden <span> super powers</span>
        </motion.h1>
        <motion.button
          animate={{ translateX: "0%", opacity: 1 }}
          initial={{ translateX: "-120%", opacity: 0 }}
          transition={{
            delay: 2.6
          }}
          className="ctaButton"
          onClick={() => {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          BROWSE MY RECENT WORK
        </motion.button>
        <motion.button
          style={{ marginTop: "1rem" }}
          animate={{ translateX: "0%", opacity: 1 }}
          initial={{ translateX: "-120%", opacity: 0 }}
          transition={{
            delay: 2.6
          }}
          className="ctaButton"
          onClick={() => {
            sendMail();
          }}
        >
          CONTACT ME
        </motion.button>
        <footer className="footer">
          <h3>Carlos Veryan</h3>
          <p>Front-end Developer</p>
          <p>carlosveryan4@gmail.com</p>
        </footer>
      </section>

      {/* My works */}
      <section className="works" ref={scrollRef}>
        <motion.h3
          animate={{ translateX: "0%", opacity: 1 }}
          initial={{ translateX: "-100%", opacity: 0 }}
          transition={{
            duration: 1.8,
            delay: 2.5
          }}
        >
          My Works
        </motion.h3>
        {/* Grid for 6 cards, 2 cards per row */}
        <div className="card-grid">
          {Projects.map((project) => {
            return (
              <Card
                key={project.id}
                title={project.name}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            );
          })}
        </div>
      </section>

      {/* Contact */}
      {/* The word "Contact me" scrolls infinitely in the x axis */}
      <div className="contact-me">
        <motion.h1
          style={{
            width: "100%",
            textAlign: "center"
          }}
          animate={{ translateX: "0%", opacity: 1 }}
          initial={{ translateX: "-100%", opacity: 0 }}
          transition={{
            duration: 1.8,
            delay: 2.5
          }}
        >
          Contact me
        </motion.h1>
        <motion.button
          animate={{ translateX: "0%", opacity: 1 }}
          initial={{ translateX: "-120%", opacity: 0 }}
          transition={{
            delay: 2.6
          }}
          className="ctaButton"
          onClick={() => {
            // Send mail
            sendMail();
          }}
        >
          GET IN TOUCH
        </motion.button>
      </div>
    </div>
  );
}
