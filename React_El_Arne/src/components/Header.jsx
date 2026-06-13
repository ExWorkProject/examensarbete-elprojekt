import React, { useState } from "react";

function Header({ currentPath, navigation, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleNavigate(event, path) {
    event.preventDefault();
    setIsMenuOpen(false);
    onNavigate(path);
  }

  function getLinkClass(path) {
    return path === currentPath ? "nav-link nav-link--active" : "nav-link";
  }

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Huvudmeny">
        <a
          className="site-brand"
          href="/"
          aria-label="Andersson Projekt startsida"
          onClick={(event) => handleNavigate(event, "/")}
        >
          <span>Andersson Projekt</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span className="sr-only">Öppna meny</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>

        <div className="desktop-nav">
          {navigation.map((item) => (
            <a
              className={getLinkClass(item.path)}
              href={item.path}
              key={item.path}
              onClick={(event) => handleNavigate(event, item.path)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className={isMenuOpen ? "mobile-nav mobile-nav--open" : "mobile-nav"} id="mobile-menu">
        <div className="mobile-nav__inner">
          {navigation.map((item) => (
            <a
              className={getLinkClass(item.path)}
              href={item.path}
              key={item.path}
              onClick={(event) => handleNavigate(event, item.path)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
