import React from "react";

function Contact() {
  return (
    <section className="section section--white section--tall">
      <div className="container contact-grid">
        <div>
          <p className="section-eyebrow">Kontakt</p>
          <h1>Berätta vad du behöver hjälp med.</h1>
          <p className="lead">
            Ring oss för snabb dialog eller skicka ett mejl med bilder och kort
            beskrivning.
          </p>

          <div className="contact-links">
            <a className="contact-link" href="tel:+46704105154">
              <span className="contact-link__icon" aria-hidden="true">
                ☎
              </span>
              <span>
                <span className="contact-link__label">Telefon</span>
                <span className="contact-link__value">+46 70 410 51 54</span>
              </span>
            </a>
            <a className="contact-link" href="mailto:arne.058191055@telia.com">
              <span className="contact-link__icon" aria-hidden="true">
                ✉
              </span>
              <span>
                <span className="contact-link__label">E-post</span>
                <span className="contact-link__value">arne.058191055@telia.com</span>
              </span>
            </a>
          </div>
        </div>

        <div className="address-block">
          <span>Adress</span>
          <strong>
            Andersson Projekt
            <br />
            Spannarboda 186
            <br />
            71194 Lindesberg
          </strong>
        </div>
      </div>
    </section>
  );
}

export default Contact;
