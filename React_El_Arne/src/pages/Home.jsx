import React from "react";
import ButtonLink from "../components/ButtonLink.jsx";
import ContactCta from "../components/ContactCta.jsx";
import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { featuredServices } from "../data/services.js";

function Home({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />

      <section className="section section--white">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">Vad vi gör</p>
            <h2>Elservice som är enkel att beställa och lätt att lita på.</h2>
            <p>
              Vi kombinerar erfarenhet från mindre servicejobb med struktur från större
              projekt.
            </p>
          </div>
          <div className="service-grid service-grid--featured">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container about-preview">
          <div>
            <p className="section-eyebrow">Om Andersson projekt</p>
            <h2>Ett litet elföretag med stor omsorg om detaljerna.</h2>
            <p>
              Auktoriserad elektriker och behörig ingenjör inom inbrottslarm som
              värdesätter punktlighet, säkerhet och god dialog. Vårt mål är att varje
              kund ska förstå vad som görs, varför det behövs och vad det kostar.
            </p>
            <ButtonLink className="button button--dark" href="/about" onNavigate={onNavigate}>
              Läs mer om företaget
            </ButtonLink>
          </div>
          <div className="stat-card">
            <p>45+</p>
            <span>års samlad erfarenhet</span>
          </div>
        </div>
      </section>

      <ContactCta onNavigate={onNavigate} />
    </>
  );
}

export default Home;
