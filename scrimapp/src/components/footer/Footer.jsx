import "./Footer.css";
import React from "react";
import { default as twitter } from "../../assets/TwitterIcon.png";
import { default as facebook } from "../../assets/FacebookIcon.png";
import { default as instagram } from "../../assets/InstagramIcon.png";
import { default as github } from "../../assets/GitHubIcon.png";
function Footer() {
  return (
    <div className="footer-container">
      <img src={twitter} alt="twitter icon" />
      <img src={facebook} alt="facebook icon" />
      <img src={instagram} alt="instagram icon" />
      <img src={github} alt="github icon" />
    </div>
  );
}

export default Footer;
