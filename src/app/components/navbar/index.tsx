"use client";

import React from "react";
import Image from "next/image";
import "./styles.css";

const Navbar: React.FC = () => {
  // Lista de seções da navbar com seus respectivos IDs e rótulos
  const sections = [
    { id: "home", label: "Home" },
    { id: "experiencias", label: "Experiências" },
    { id: "projetos", label: "Projetos" },
    { id: "skills", label: "Skills" },
    { id: "contato", label: "Contato" },
  ];

  // Função para rolar suavemente até uma seção específica
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Image src="imagens/logo1.svg" alt="logo" width={34} height={43} />
      </div>

      {/* Email */}
      <div className="email">
        <a href="mailto:henrsilvasantos@gmail.com" className="email-link">
          henrsilvasantos@gmail.com
        </a>
      </div>

      {/* Links de navegação */}
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <button onClick={() => scrollToSection(section.id)}>
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;