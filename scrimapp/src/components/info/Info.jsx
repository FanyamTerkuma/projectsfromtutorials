import React from "react";
import "./Info.css";
import { default as mail } from "../../assets/mail.png";
import { default as linkedin } from "../../assets/linkedin.png";

const Info = () => {
  return (
    <div className="info-container">
      <div className="display-photo"></div>
      <div className="details">
        <span className="details--name">Fanyam Terkuma</span>
        <span className="details--position">Frontend Developer</span>
        <span className="details--site">FanyamTerkuma.website</span>
      </div>
      <div className="contact">
        <span className="custom-button" id="white-button">
          <img src={mail} alt="mail icon" />
          <button className="mail-button">Email</button>
        </span>
        <div className="contact">
          <span className="custom-button" id="blue-button">
            <img src={linkedin} alt="Linkedin icon" />
            <button className="linkedin-button">Linkedin</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
