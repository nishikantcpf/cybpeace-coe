import React from "react";
import { CCOEWhite } from "../assets/photos";
import {
  facebook,
  twitter,
  instagram,
  linkedin,
  youtube,
  phone,
  mail,
} from "../assets/icons";

const Footer = () => {
  return (
    // This is the second part of the Footer for the website the First Part is PartnerFooter.jsx 
    <div className="footer">
      <div className="footer-content">
        <img className="white-logo" src={CCOEWhite} alt="logo" />

        <div className="social-links">
          <a href="https://www.facebook.com/cyberpeacefoundation">
            <img src={facebook} alt="social-link" />
          </a>
          <a href="https://twitter.com/cyberpeacengo">
            <img src={twitter} alt="social-link" />
          </a>
          <a href="https://in.linkedin.com/company/cyberpeacefoundation">
            <img src={linkedin} alt="social-link" />
          </a>
          <a href="https://www.instagram.com/cyberpeacefoundation">
            <img src={instagram} alt="social-link" />
          </a>
          <a href="https://www.youtube.com/cyberpeacefoundation">
            <img src={youtube} alt="social-link" />
          </a>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <img src={phone} alt="phone" style={{ width: '20px', height: '20px' }} />
            <p style={{ color: "white" }}>+91 0123456789</p>
          </div>
          <div className="contact-item">
            <img src={mail} alt="email" style={{ width: '24px', height: '24px' }} />
            <p style={{ color: "white" }}>secretariat@cyberpeace.net</p>
          </div>
        </div>
      </div>
      <div className="footer-rights">
        <p style={{ color: "white" }}>Copyright ©️ 2024 CyberPeace</p>
      </div>
    </div>
  );
};

export default Footer;
