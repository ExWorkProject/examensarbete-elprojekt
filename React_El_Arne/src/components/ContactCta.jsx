import React from "react";
import ButtonLink from "./ButtonLink.jsx";

function ContactCta({ onNavigate }) {
  return (
    <section className="contact-cta">
      <div className="contact-cta__inner">
        <div>
          <p className="section-eyebrow section-eyebrow--dark">Redo att prata el?</p>
          <h2>Få snabb återkoppling och tydlig offert.</h2>
        </div>
        <ButtonLink className="button button--dark" href="/contact" onNavigate={onNavigate}>
          Kontakta oss
        </ButtonLink>
      </div>
    </section>
  );
}

export default ContactCta;
