
import React from "react";
import Contact from "./components/contact";
import Timeline from "./components/experience";
import Navbar from "./components/navbar";
import ProfileImage from "./components/profile";
import Footer from "./components/footer";
import Image from "next/image";
import Projects from "./components/projetos";


export default function Home() {
  return (
    <div className="container">
      <Navbar />

      {/* Seção Home */}
      <section id="home" className="header-section">
        <div className="titles-photo">
          <div className="titles">
            <h1>Olá! Me chamo</h1>
            <h2>Henrique Santos</h2>
            <h3>UI & UX</h3>
            <h4>Designer</h4>
          </div>

          <div className="photo">
            <ProfileImage
              src="imagens/foto.svg"
              alt="foto"
              width={500}
              height={500} githubUrl={undefined} linkedinUrl={undefined}/>
          </div>
        </div>

        <div className="description">
          <p>
            Profissional com 2 anos de experiência em gestão de projetos ágeis,
            atuando <br /> como Scrum Master e Product Owner. Especialista em
            liderar times internacionais,
            <br />
            criar protótipos UI/UX no Figma e impulsionar resultados estratégicos
            com Scrum e Kanban.
          </p>
      </div>
    </section>

      {/* Seção Experiências */}
      <section id="experiencias" className="section-experience">
          <h1>Minhas Experiências</h1>
          <Timeline />
      </section>

        {/* Seção Projetos */}
        <section id="projetos" className="section-projects">
          <h1>Meus Projetos</h1>
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
                alt="figma"
                width={60}
                height={115}
              />
              <p>React</p>
              </div>
              
            <div className="trello">
              <Image
                src="/imagens/Trello.svg"
                alt="figma"
                width={60}
                height={115}
              />
              <p>Trello</p>
            </div>

            <div className="clickup">
            <Image
              src="imagens/Clickup.svg"
              alt="figma"
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
    </div>
  );
}
