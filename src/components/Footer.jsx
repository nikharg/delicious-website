import React from "react";
import "./footer.css";
import { GiKnifeFork } from "react-icons/gi";
import { SiGmail } from "react-icons/si";
import {
  AiOutlineCopyrightCircle,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="title">
        <GiKnifeFork className="icon" />
        <h1>Delicious</h1>
      </div>
      <div className="copy">
        <AiOutlineCopyrightCircle />
        <p>2022</p>
      </div>
      <div className="social">
        <AiFillLinkedin />
        <AiFillGithub />
        <SiGmail />
        <AiOutlineWhatsApp />
      </div>
    </div>
  );
};

export default Footer;
