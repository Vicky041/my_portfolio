import React from "react";
import "./about.scss";
import ME from "../../assets/my-profile-img.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Portrait of Osemeke C. Victor" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            Hi, I'm a Frontend Developer with a passion for building exceptional
            user interfaces. My strong foundation in front-end technologies
            includes HTML, CSS, JavaScript, TypeScript, and Sass. I specialize
            in modern frameworks and libraries like React, Next.js, Vue.js, and
            Tailwind to bring ideas to life. What sets my work apart is my
            ability to leverage AI-augmented development to improve my process.
            By using tools like Gemini Client, Trae, and CodeRabbit, I can
            streamline my coding, conduct efficient code reviews, and deliver
            high-quality, dynamic user experiences. I am dedicated to creating
            clean, responsive designs and am always looking for ways to combine
            my skills to build high-quality, functional websites.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
