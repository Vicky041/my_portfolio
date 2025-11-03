import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/victor-osemeke-36a3a4277/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Vicky041" target="_blank">
        {" "}
        <FaGithub />
      </a>
      <a href="https://x.com/AV_TECHI" target="_blank">
        {" "}
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
