import React from "react";
import "./footer.css";

// Navbar
const Footer = (props) => {
  return (
    <div className="footer-container">
      <span className="brand-logo white-text">Developer: Wasif Arslan</span>
      <div className="icons-container">
        <a
          title="github"
          rel="noreferrer"
          href="https://github.com/muhammadwasifarslan"
        >
          <i className="fab fa-github icon"></i>
        </a>
        <a
          title="linkedIn"
          rel="noreferrer"
          href="https://www.linkedin.com/in/muhammad-wasif-arslan-51833020a/"
        >
          <i className="fab fa-linkedin-in icon"></i>
        </a>
        <a
          title="instagram"
          rel="noreferrer"
          href="https://www.instagram.com/techsavvy81/p/CXqkBuLP0ZW/?utm_medium=copy_link"
        >
          <i className="fab fa-instagram icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
