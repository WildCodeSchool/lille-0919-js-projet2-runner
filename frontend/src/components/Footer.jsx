import React from "react";
import "./style/Footer.scss";
import Popup from "reactjs-popup";
function Footer() {
  return (
    <footer>
      <div className="LinearGradient"></div>
      <div className="footer">
        <div>
          <ul className="nav">
            <li>Copyright © 2019</li>
            <Popup trigger={<li id="mentions">Mentions légales</li>} modal>
              {close => (
                <div className="modal">
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corporis modi sunt vel explicabo cumque voluptatem sint
                      magnam dolores incidunt, facilis totam pariatur quibusdam
                      doloremque ut recusandae vitae maiores reprehenderit esse.
                    </p>
                  </div>
                </div>
              )}
            </Popup>
            <a href="https://www.wildcodeschool.com/fr-FR">
              <li>By Wild Code School</li>
            </a>
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
