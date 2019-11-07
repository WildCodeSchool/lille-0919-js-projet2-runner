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
                <div id="modal">
                  <a id="closeModal" onClick={close}>
                    x
                  </a>
                  <div id="content">
                    <h2>Editeur du Site :</h2>
                    <ul>
                      <li>La Bobby Team </li>
                      <li>Chez nous, la Bobby Factory</li>
                      <li>Téléphone :06 35 41 88 02</li>
                      <li>Email : s.dailliez@gmail.com /duhamelni@gmail.com</li>
                      <li>Site Web : localhost</li>
                    </ul>
                    <div className="LinearGradientModal"></div>
                    <h2>Hébergement :</h2>
                    <ul>
                      <li>Repository privé Github</li>
                      <li>Site Web : localhost</li>
                    </ul>
                    <div className="LinearGradientModal"></div>
                    <h2>Développement :</h2>
                    <ul>
                      <li>Wild Code School</li>
                      <li>4 Avenue des Saules, Le Dôge, 59160 Lille</li>
                      <li>Site Web : www.wildcodeschool.com</li>
                    </ul>
                    <div className="LinearGradientModal"></div>
                    <h2>Conditions d’utilisation :</h2>
                    <p>
                      Ce site est proposé en différents langages web (HTML,
                      HTML5, Javascript, CSS, etc…) pour un meilleur confort
                      d’utilisation et un graphisme plus agréable, nous vous
                      recommandons de recourir à des navigateurs modernes comme
                      Internet explorer (dernières versions), Firefox, Google
                      Chrome, etc… <br />
                      <h3>Cookies :</h3> L'accès au site ainsi qu'aux services
                      associés ne nécessitent aucun recours aux cookies.
                      <br />
                      <h3>Liens hypertextes :</h3> Notre plateforme contient des
                      liens vers d’autres sites internet ou d’autres ressources
                      disponibles sur Internet. Bobby Factory ne dispose d’aucun
                      moyen pour contrôler les sites en connexion avec ses sites
                      internet. Elle ne peut être tenue pour responsable de tout
                      dommage, de quelque nature que ce soit, résultant du
                      contenu de ces sites ou sources externes, et notamment des
                      informations, produits ou services qu’ils proposent, ou de
                      tout usage qui peut être fait de ces éléments. Les risques
                      liés à cette utilisation incombent pleinement à
                      l’internaute, qui doit se conformer à leurs conditions
                      d’utilisation. <br />
                      Les utilisateurs, les abonnés et les visiteurs des sites
                      internet ne peuvent pas mettre en place un hyperlien en
                      direction de ce site sans l’autorisation expresse et
                      préalable de la Bobby Factory
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

        <div className="logo">
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
