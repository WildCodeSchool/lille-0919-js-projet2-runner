import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <footer>
      <div className="LinearGradient"></div>
      <div className="footer">
        <div>
          <ul className="nav">
            <li>Copyright © 2019</li>
            <li>
              Made with <span className="heart">♥</span>
            </li>
            <li>Mentions légales</li>
            <li>Confidentialité</li>
            <li>Cookies</li>
          </ul>
        </div>

        <div>
          <img
            src="facebook_icon.png"
            className="facebook-logo"
            alt="Facebook logo"
          />
          <img src="insta_icon.png" className="insta-logo" alt="Insta logo" />
          <img
            src="twitter_icon.png"
            className="twitter-logo"
            alt="Twitter logo"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
