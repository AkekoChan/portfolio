import React from "react";
import { Link as RouterLink } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import logo from "/logo.svg";

const Navigation = () => {
  return (
    <nav className="header__navigation">
      <ul>
        <li>
          <MagneticButton label="A propos" to="apropos" isInternal={true} />
        </li>
        <li>
          <MagneticButton
            label="Compétences"
            to="competences"
            isInternal={true}
          />
        </li>
        <li>
          <MagneticButton
            label="Productions"
            to="productions"
            isInternal={true}
          />
        </li>
        <li>
          <MagneticButton label="Contact" to="contact" isInternal={true} />
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header id="header">
      <RouterLink to="/" className="header__logo">
        <img src={logo} alt="Logo du portfolio" />
        <p>
          <span className="firstLetter">A</span>keko.
        </p>
      </RouterLink>

      <Navigation />
    </header>
  );
};

export default Header;
