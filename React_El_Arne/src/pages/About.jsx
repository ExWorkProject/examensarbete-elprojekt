import React from "react";
import ContactCta from "../components/ContactCta.jsx";

const expectations = [
  "Rak kommunikation om pris, tid och möjliga lösningar.",
  "Auktoriserad elektriker med fokus på säkerhet och funktion.",
  "Respekt för ditt hem, din lokal och din arbetsdag.",
  "Dokumentation som gör framtida service enklare.",
];

const values = [
  {
    number: "01",
    title: "Säkerhet först",
    text: "Vi gör arbetet rätt från början och kompromissar inte med regler, material eller egenkontroll.",
  },
  {
    number: "02",
    title: "Tydlighet hela vägen",
    text: "Du ska veta vad som händer, vad det kostar och när arbetet beräknas vara klart.",
  },
  {
    number: "03",
    title: "Hållbara val",
    text: "Lösningar som fungerar bra idag och är enkla att förvalta imorgon.",
  },
];

function About({ onNavigate }) {
  return (
    <>
      <section className="page-hero page-hero--dark">
        <div className="container">
          <p className="section-eyebrow section-eyebrow--light">Om oss</p>
          <h1>Ett företag som tror på ordning, omtanke och tydliga besked.</h1>
          <p>
            Andersson Projekt startades med en enkel idé: elarbeten ska kännas trygga
            från första samtal till färdig installation.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container two-column">
          <div>
            <h2>Vår vardag</h2>
            <p>
              Vi arbetar med service, installation och felsökning där kvaliteten sitter
              i detaljerna. Det kan vara en ny elcentral i en villa, smartare belysning
              i en butik eller trygg laddning på en innergård.
            </p>
            <p>
              Som litet företag kan vi vara personliga och snabba, samtidigt som vi
              följer tydliga rutiner för säkerhet, egenkontroll och dokumentation.
            </p>
          </div>
          <div className="expectation-box">
            <h3>Det här kan du förvänta dig</h3>
            <ul>
              {expectations.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container value-grid">
          {values.map((item) => (
            <article className="small-card" key={item.number}>
              <p className="small-card__number">{item.number}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactCta onNavigate={onNavigate} />
    </>
  );
}

export default About;
