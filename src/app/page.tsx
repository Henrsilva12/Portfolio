"use client"
import React from "react";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import ProfileImage from "./components/profile";
import Footer from "./components/footer";
import Projects from "./components/projetos";
import ScrollButton from "./components/button";
import { useTypewriter, Cursor } from "react-simple-typewriter";


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
            <h1>Henrique</h1>
            <h2>Santos</h2>
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
        <p>
          Sou um profissional apaixonado por design e desenvolvimento, com experiência em
          criar soluções inovadoras e centradas no usuário. Minha abordagem combina
          estética e funcionalidade, garantindo que cada projeto atenda às necessidades
          do cliente e proporcione uma experiência excepcional ao usuário.
        </p>
      </section>

        <section id="projetos" className="section-projects">
          <h1>Projetos</h1>
          <p>
            Exploro criatividade e funcionalidade em cada projeto que desenvolvo.
            Aqui estão algumas <br /> iniciativas que destacam minha experiência em UI/UX
            design, gestão de projetos ágeis e <br /> desenvolvimento de soluções
            inovadoras.
          </p>
          <Projects />
      </section>

      <section id="contato" className="section-contact">
          <h1>Contate me</h1>
          <p>
          Ficarei feliz em conversar sobre projetos e oportunidades. <br /> Entre em
          contato!
        </p>
            <Contact />
      </section>

      <div className="footer">
        <Footer />
      </div>

      <ScrollButton />
    </div>
  );
}
