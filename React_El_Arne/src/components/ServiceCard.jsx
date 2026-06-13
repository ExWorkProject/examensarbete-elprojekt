import React from "react";

function ServiceCard({ description, icon, title }) {
  return (
    <article className="service-card">
      <div className="service-card__icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default ServiceCard;
