"use client"
import React from "react";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import ProfileImage from "./components/profile";
import Footer from "./components/footer";
import Projects from "./components/projetos";
import ScrollButton from "./components/button";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";


export default function Home() {

  const [text] = useTypewriter({
    words: ["UI/UX Designer", "Developer Front-end", "Gestão de Projetos Ágeis"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 100,
  });

  return (
    <div className="container">
      <Navbar />

      <section id="home" className="header-section">
        <div className="titles-photo">
          <div className="titles">
            <h1>Óla, eu sou o</h1>
            <h2>Henrique Santos</h2>
            <div className="skills-typewriter">
              <h3 className="typewriter-text">
                <span className="typewriter-span">
                  {text}
                </span>
                <span className="cursor">
                  <Cursor />
                </span>
              </h3>
            </div>

            <div className="social-icons">
                <a href="https://www.linkedin.com/in/henrique-santos-4b7901287" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                </a>
                <a href="https://github.com/Henrsilva12" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="social-icon" />
                </a>
                 <a href="mailto:henrsilvasantos@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="contact-icon" />
                </a>
                <a href="https://wa.me/5577998986939" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="contact-iconWhatsapp" />
                </a>
            </div>
          </div>

          <div className="photo">
            <ProfileImage
              src="imagens/foto.svg"
              alt="foto"
              width={500}
              height={500} githubUrl="https://github.com/Henrsilva12" linkedinUrl="https://www.linkedin.com/in/henrique-santos-4b7901287"/>
          </div>
        </div>
    </section>

      {/* Seção Sobre */}
      <section id="sobre" className="section-about">
        <h1>Sobre Mim</h1>
          <p className="background-about">
            Atuo com UI/UX Design, desenvolvimento front-end e gestão de projetos, 
            transformando ideias em soluções digitais intuitivas e eficientes. 
            Tenho experiência em criar interfaces que aliam estética e funcionalidade, 
            sempre com foco na experiência do usuário e nos objetivos do projeto. Cada entrega 
            é pensada para comunicar com clareza, encantar visualmente e resolver problemas reais de forma estratégica.
          </p>
      </section>

        <section id="projetos" className="section-projects">
          <h1>Projetos</h1>
          <Projects />
      </section>

      <section id="contato" className="section-contact">
          <h1>Contate me</h1>
          <Contact />
      </section>

      <div className="footer">
        <Footer />
      </div>

      <ScrollButton />
    </div>
  );
}
