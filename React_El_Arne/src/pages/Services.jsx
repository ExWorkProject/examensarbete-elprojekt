import React from "react";
import ContactCta from "../components/ContactCta.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { servicePageItems } from "../data/services.js";

const processSteps = [
  {
    number: "01",
    title: "Behovsbild",
    text: "Vi går igenom på plats, omfattning och önskad tidplan.",
  },
  {
    number: "02",
    title: "Tydlig offert",
    text: "Du får förslag, prisbild och eventuella reservationer innan start.",
  },
  {
    number: "03",
    title: "Snyggt avslut",
    text: "Vi testar, städar och lämnar dokumentation när arbetet är klart.",
  },
];

function Services({ onNavigate }) {
  return (
    <>
      <section className="section section--white section--tall">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">Tjänster</p>
            <h1>Elhjälp för vardagens behov och nästa steg.</h1>
            <p className="lead">
              Vi tar hand om både planerade installationer och akuta problem. Alla
              arbeten utförs enligt gällande regler och dokumenteras så att du kan känna
              dig trygg över tid.
            </p>
          </div>

          <div className="service-grid">
            {servicePageItems.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container process-grid">
          <div>
            <h2>Så jobbar vi</h2>
          </div>
          <div className="process-card-grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.number}>
                <p>{step.number}</p>
                <h3>{step.title}</h3>
                <span>{step.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta onNavigate={onNavigate} />
    </>
  );
}

export default Services;
