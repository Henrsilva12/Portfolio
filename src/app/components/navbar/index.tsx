"use client";
import { useEffect, useState } from "react";
import React from "react";
import "./styles.css";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Início" },
    { id: "projetos", label: "Projetos" },
    { id: "skills", label: "Skills" },
    { id: "contato", label: "Contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {sections.map((section) => (
          <li key={section.id} className="nav-item">
            <button type="button" className={`nav-button ${activeSection === section.id ? "active" : ""}`} 
            onClick={() => scrollToSection(section.id)}
            aria-label={`Ir para a seção ${section.label}`}>
              {section.label}
              <span className="underline"></span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;