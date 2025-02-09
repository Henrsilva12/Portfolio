"use client";

import React from "react";
import "./styles.css";

const experiences = [
  {
    title: "LabsIF",
    subtitle: "Organização de desenvolvimento de Software",
    period: "Março 2022 – Outubro 2024",
    description:
      "Facilitador de projetos, especializado em gestão de histórias de usuários no ClickUp, Jira e Trello. Demonstrou adaptabilidade e comprometimento ao assumir o desenvolvimento de telas UI/UX no Figma para garantir a continuidade do projeto após a saída de membros chave da equipe.",
    color: "#003ebb",
  },
  {
    title: "Vulcabras S. A",
    subtitle: "Empresa de calçados esportivos",
    period: "Julho 2022 – Dezembro 2023",
    description: "Passador de adesivos em cabedais e solas.",
    color: "#63b3ed",
  },
  {
    title: "Colégio Dinâmico",
    subtitle: "Colégio e Curso Dinâmico",
    period: "Janeiro 2024",
    description:
      "Secretário na direção de um colégio, com atuação em serviços gerais e resolução de problemas técnicos, incluindo manutenção de computadores e projetores, garantindo o funcionamento eficiente dos equipamentos.",
    color: "#87cefa",
  },
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      {experiences.map((exp, index) => (
        <div key={index} className="timeline-item">
          <div className="left">
            <h3>{exp.title}</h3>
            <h4>{exp.subtitle}</h4>
            <p className="period">{exp.period}</p>
          </div>
          <div className="center">
            <div
              className="circle"
              style={{ backgroundColor: exp.color }}
            ></div>
            {index < experiences.length - 1 && <div className="line"></div>}
          </div>
          <div className="right">
            <h3>{exp.title}</h3>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
