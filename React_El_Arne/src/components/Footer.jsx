import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <p className="site-footer__brand">Andersson Projekt</p>
          <p className="site-footer__text">
            En trygg partner i mindre såväl som större projekt.
          </p>
        </div>
        <div>
          <p className="site-footer__heading">Kontakt</p>
          <ul className="site-footer__list">
            <li>Arne Andersson</li>
            <li>
              <a href="tel:+46704105154">+46 70 410 51 54</a>
            </li>
            <li>
              <a href="mailto:arne.058191055@telia.com">arne.058191055@telia.com</a>
            </li>
            <li>
              <address>Spannarboda 186, 71194 Lindesberg</address>
            </li>
          </ul>
        </div>
        <div>
          <p className="site-footer__heading">Öppettider</p>
          <p className="site-footer__text">
            Måndag-fredag 07.00-16.00
            <br />
            Akuta ärenden hanteras enligt överenskommelse.
          </p>
        </div>
      </div>
      <div className="site-footer__bottom">
        &copy; 2026 Andersson Projekt. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}

export default Footer;
