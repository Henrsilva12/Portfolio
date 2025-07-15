"use client";

import React from "react";
import "./styles.css";

const Navbar: React.FC = () => {

  const sections = [
    { id: "home", label: "Início" },
    { id: "projetos", label: "Projetos" },
    { id: "skills", label: "Skills" },
    { id: "contato", label: "Contato" },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {sections.map((section) => (
          <li key={section.id}>
            <button type="button" className="nav-buton" onClick={() => scrollToSection(section.id)}
              aria-label={`Ir para a seção ${section.label}`}>
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;