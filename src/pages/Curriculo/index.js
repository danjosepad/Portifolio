import React from "react";

import "./styles.css";
import photo from "../../assets/resizedPhoto.png";

import yamanLogo from "../../assets/yamanLogo.png";
import fatecOurinhosLogo from "../../assets/fatecOurinhosLogo.jpg";
import rocketseatLogo from "../../assets/rocketseatLogo.jpg";

export default function Curriculo() {
  return (
    <>
      <div className="header">
        <a href="/">INICIO</a>
        <a href="/curriculo" className="active">
          CURRICULO
        </a>
        <a href="/projetos">PROJETOS</a>
      </div>

      <div className="container">
        <div className="user-info">
          <h2>Informações pessoais</h2>
          <strong>Daniel José Padilha</strong>
          <span>E-mail: danielpadilhapessoal@outlook.com</span>
          <small>Telefone de contato: (14) 99723-6649</small>

          <div className="media-links">
            <a href="https://www.linkedin.com/in/daniel-padilha-6926b8173/">
              linkedIn
            </a>
            <a href="https://github.com/danjosepad?tab=repositories">GitHub</a>
          </div>
        </div>
        <div className="photo">
          <img src={photo} alt="Daniel Padilha" />
        </div>
        <div className="about">
          <h2>Atuação</h2>
          <strong>Desenvolvedor Fullstack Javascript</strong>
        </div>
        <div className="work-exps">
          <h2>Experiências</h2>
          <div className="company">
            <img src={yamanLogo} alt="Yaman" />

            <strong>Técnico de Desempenho 2</strong>
            <p>Yaman Tecnologia</p>
            <small>3 meses, São Paulo - SP</small>
          </div>

          <div className="company">
            <img src={fatecOurinhosLogo} alt="Fatec Ourinhos" />

            <strong>Estagio Fullstack NodeJS, React e React Native</strong>
            <p>FATEC Faculdade de Tecnologia de Ourinhos</p>
            <small>5 meses, Ourinhos - SP</small>
          </div>
        </div>
        <div className="education">
          <h2>Formação Academica</h2>
          <div className="institution">
            <img src={fatecOurinhosLogo} alt="Fatec Ourinhos" />
            <strong>FATEC Ourinhos Faculdade de Tecnologia</strong>
            <p>Tecnólogo, Análise e Desenvolvimento de Sistemas</p>
            <small>2017 - 2019</small>
          </div>
          <div className="institution">
            <img src={rocketseatLogo} alt="Rocketseat" />
            <strong>Rocketseat</strong>
            <p>Fullstack (ReactJS, React Native e NodeJS)</p>
            <small>2020 - Atual </small>
          </div>
        </div>
        <div className="knowlodges">
          <h2>Conhecimentos</h2>
          <p>JavaScript</p>
          <p>Regex</p>
          <p>Design Patterns</p>
          <p>React</p>
          <p>React Native</p>
          <p>NodeJS</p>
        </div>
      </div>

      <footer>
        Site desenvolvido usando ReactJS, por{" "}
        <a href="https://www.linkedin.com/in/daniel-padilha-6926b8173/">
          Daniel José Padilha
        </a>{" "}
        - © {new Date().getFullYear()}{" "}
      </footer>
    </>
  );
}
