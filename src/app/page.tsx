"use client"
import React from "react";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import ProfileImage from "./components/profile";
import Footer from "./components/footer";
import Image from "next/image";
import Projects from "./components/projetos";
import ScrollButton from "./components/button";
import { useTypewriter, Cursor } from "react-simple-typewriter";


export default function Home() {

  const [text] = useTypewriter({
    words: ["UI/UX Designer", "Developer Front-end", "Gestão de Projetos Ágeis"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
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

      {/* Seção Skills */}
      <section id="skills" className="section-skills">
          <h1>Minhas Skills</h1>
          <p>
          Transformo ideias em interfaces incríveis com Figma, organizo projetos
          com <br /> ClickUp e Trello, e adiciono valor ao front-end com habilidades em
          React.
          </p>
            <div className="skills-container">
              <div className="figma">
              <Image
              src="/imagens/figma.svg"
              alt="figma"
              width={60}
              height={115}
            />
            <p>Figma</p>
              </div>

              <div className="react">
                <Image
                src="/imagens/react.svg"
                alt="react"
                width={60}
                height={115}
              />
              <p>React</p>
              </div>
              
            <div className="trello">
              <Image
                src="/imagens/Trello.svg"
                alt="trello"
                width={60}
                height={115}
              />
              <p>Trello</p>
            </div>

            <div className="clickup">
            <Image
              src="/imagens/clickup.svg"
              alt="clickup"
              width={60}
              height={115}
            />
            <p>ClickUp</p>
            </div>
        
          </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="section-contact">
          <h1>Contate me</h1>
          <p>
          Ficarei feliz em conversar sobre projetos e oportunidades. <br /> Entre em
          contato!
        </p>
            <Contact />
      </section>

      {/* Footer */}
      <div className="footer">
        <Footer />
      </div>

      {/* Scroll Button */}
      <ScrollButton />
    </div>
  );
}
