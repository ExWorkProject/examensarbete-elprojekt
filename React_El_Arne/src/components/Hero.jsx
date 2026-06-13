import React from "react";
import ButtonLink from "./ButtonLink.jsx";

function Hero({ onNavigate }) {
  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__service-area">
          Verksam inom Lindesberg, Spannarboda, Grönbo, Fellingsbro, Örebro
        </div>
      </div>
      <div className="hero__inner">
        <div>
          <p className="hero__eyebrow">
            Installationer, service, projektledning och konsultationer inom el, tele och larm
          </p>
          <h1 className="hero__title">Andersson Projekt</h1>
          <p className="hero__description">
            En trygg partner i mindre såväl som större projekt.
          </p>
          <div className="hero__actions">
            <ButtonLink className="button button--primary" href="/contact" onNavigate={onNavigate}>
              Offerter kostnadsfritt
            </ButtonLink>
            <ButtonLink className="button button--ghost" href="/services" onNavigate={onNavigate}>
              Se våra tjänster
            </ButtonLink>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card__content">
            <p className="hero-card__eyebrow">Kontakt</p>
            <ul>
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
        </div>
      </div>
    </section>
  );
}

export default Hero;
