import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <footer>
      <div className="LinearGradient"></div>
      <div className="footer">
        <div className="nav">
          <p>Copyright © 2019</p>
          <p>
            Made with <span className="heart">♥</span>
          </p>
          <p>Mentions légales</p>
          <p>Confidentialité</p>
          <p>Cookies</p>
        </div>

        <div className="Nav-icon">
          <img
            src={"facebook_icon.png"}
            className="Facebook-logo"
            alt="Facebook logo"
          />
          <img src={"insta_icon.png"} className="Insta-logo" alt="Insta logo" />
          <img
            src={"twitter_icon.png"}
            className="Twitter-logo"
            alt="Twitter logo"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
