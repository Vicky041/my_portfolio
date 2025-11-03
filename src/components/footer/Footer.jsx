import React from "react";
import "./footer.css";
// import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        {" "}
        Osemeke Victor{" "}
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/victor-osemeke-36a3a4277/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/av_victor041/profilecard/?igsh=MTJuaTVkdnVvZnpwZw=="
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a href="https://x.com/AV_TECHI" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Osemeke C. Victor Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
