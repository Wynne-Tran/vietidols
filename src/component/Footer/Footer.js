import React from "react";

import "./Footer.css";

// icons
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Youtube from "../../assets/youtube.png";

const Footer = ({ fixed }) => {
  return (
    <div className={fixed ? "footer footer-fixed" : "footer"}>
      <div className="footer-content">
        <div className="social">
          <a href="/">
            <img src={Facebook} alt="facebook"></img>
          </a>
          <a href="/">
            <img src={Instagram} alt="facebook"></img>
          </a>
          <a href="/">
            <img src={Youtube} alt="facebook"></img>
          </a>
        </div>

        <div className="pages">
          <ul className="pages-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Term</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="copyright">
          <p>Huong duong © 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
