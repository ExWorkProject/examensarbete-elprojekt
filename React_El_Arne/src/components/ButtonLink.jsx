import React from "react";

function ButtonLink({ children, className = "", href, onNavigate }) {
  function handleClick(event) {
    if (!onNavigate || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return;
    }

    event.preventDefault();
    onNavigate(href);
  }

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}

export default ButtonLink;
