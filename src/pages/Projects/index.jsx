import React, { useState, useEffect } from "react";

// import "./styles.css";
import aos from "aos";
import calculadoraGif from "../../assets/giphy.gif";
import anotacoesImg from "../../assets/anotacoes.jpg";
import todolistImg from "../../assets/todolist.jpg";

import appScreensPeerClass from "../../assets/appScreensPeerClass.png";
import appScreensTindev from "../../assets/appScreensTindev.png";
import appScreensAircnc from "../../assets/appScreensAircnc.png";
import appScreensDevRadar from "../../assets/appScreensDevRadar.png";

import logoConceitosNodeJS from "../../assets/logoConceitosNodeJS.png";
import logoGoBarber from "../../assets/logoGoBarber.png";

import styles from "./styles.module.css";

import "aos/dist/aos.css";

export default function Projetos() {
  const [backend, setBackend] = useState(true);
  const [web, setWeb] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [fullstack, setFullstack] = useState(false);

  useEffect(() => {
    aos.init({ once: true });
  }, []);

  const showBackend = () => {
    setBackend(true);
    setWeb(false);
    setMobile(false);
    setFullstack(false);
  };

  const showWeb = () => {
    setBackend(false);
    setWeb(true);
    setMobile(false);
    setFullstack(false);
  };

  const showMobile = () => {
    setBackend(false);
    setWeb(false);
    setMobile(true);
    setFullstack(false);
  };

  const showFullstack = () => {
    setBackend(false);
    setWeb(false);
    setMobile(false);
    setFullstack(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <a href="/">INICIO</a>
        <a href="/curriculo">CURRICULO</a>
        <a href="/projetos" className={styles.active}>
          PROJETOS
        </a>
      </div>

      <div className={styles.projectsContainer}>
        <h1>Meus projetos</h1>
        <div className={styles.headerProjects}>
          <button type="button" onClick={() => showBackend()}>
            Backend
          </button>
          <button type="button" onClick={() => showWeb()}>
            Web
          </button>
          <button type="button" onClick={() => showMobile()}>
            Mobile
          </button>
          <button type="button" onClick={() => showFullstack()}>
            Fullstack
          </button>
        </div>
        <div className={styles.projects}>
          {backend && (
            <>
              <div
                className={styles.projectsContent}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img
                  src={logoConceitosNodeJS}
                  alt="API Conceitos NodeJS"
                  className={styles.logoApi}
                />
                <h2>
                  <a href="https://github.com/danjosepad/API-Conceitos-NodeJS">
                    API de Conceitos do NodeJS
                  </a>
                </h2>
                <p>Explorando os conceitos do NodeJS utilizando Express</p>
              </div>

              <div
                className={styles.projectsContent}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img
                  src={logoGoBarber}
                  alt="GoBarber"
                  className={styles.logoApi}
                />
                <h2>
                  {" "}
                  <a href="https://github.com/danjosepad/GoBarber-Node">
                    GoBarber NodeJS
                  </a>
                </h2>
                <p>Criando uma API para sistema de barbearia em NodeJS</p>
              </div>
            </>
          )}

          {web && (
            <>
              <div
                className={styles.projectsContent}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img src={calculadoraGif} alt="gif calculadora" />
                <h2>
                  <a href="projetos/calculadoraJS">CalculadoraJS</a>
                </h2>
                <p>Criação de uma calculadora visual com o uso do ReactJS!</p>
                <small>
                  Para a versão usando somente Javascript,{" "}
                  <a href="https://github.com/danjosepad/Calculadora-JS">
                    clique aqui
                  </a>
                </small>
              </div>
              <div
                className={styles.projectsContent}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img src={todolistImg} alt="Foto Todo-List" />
                <h2>
                  <a href="projetos/todo-list">Todo List</a>
                </h2>
                <p>
                  Crie e gerencie suas tarefas usando esse Todo-List em ReactJS
                </p>
                <small>
                  Para a versão usando somente Javascript,{" "}
                  <a href="https://github.com/danjosepad/Todo-List">
                    clique aqui
                  </a>
                </small>
              </div>
              <div
                className={styles.projectsContent}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img src={anotacoesImg} alt="Foto AnotacoesJS" />
                <h2>
                  <a href="projetos/anotacoesJS">AnotacoesJS</a>
                </h2>
                <p>
                  Sistema de gerenciamento de anotações baseado no iCloud Mail
                </p>
              </div>
            </>
          )}

          {mobile && (
            <>
              <div
                className={styles.projectsContent}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <p>Projetos mobile serão publicados em breve!</p>
              </div>
            </>
          )}

          {fullstack && (
            <>
              <div
                className={styles.projectsContent}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img src={appScreensPeerClass} alt="PeerClass" />
                <h2>
                  <a href="https://github.com/danjosepad/PeerClass">
                    PeerClass
                  </a>
                </h2>
                <p>Sistema de avaliação por pares e rubricas</p>
              </div>

              <div
                className={styles.projectsContent}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <h2>
                  <a href="https://github.com/danjosepad/semana-omnistack-7">
                    Instarocket
                  </a>
                </h2>
                <p>Clone do Instagram</p>
              </div>

              <div
                className={styles.projectsContent}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img src={appScreensTindev} alt="Tindev" />
                <h2>
                  {" "}
                  <a href="https://github.com/danjosepad/semana-omnistack-8">
                    TinDev
                  </a>
                </h2>
                <p>Clone do Tinder</p>
              </div>

              <div
                className={styles.projectsContent}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img src={appScreensAircnc} alt="AirCnc" />
                <h2>
                  <a href="https://github.com/danjosepad/semana-omnistack-9">
                    AirCnC
                  </a>
                </h2>
                <p>Clone do Airbnb</p>
              </div>

              <div
                className={styles.projectsContent}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img src={appScreensDevRadar} alt="DevRadar" />
                <h2>
                  <a href="https://github.com/danjosepad/semana-omnistack-10">
                    DevRadar
                  </a>
                </h2>
                <p>Busque desenvolvedores em sua região</p>
              </div>
            </>
          )}
        </div>
      </div>
      <footer>
        Site desenvolvido usando ReactJS, por{" "}
        <a href="https://www.linkedin.com/in/daniel-padilha-6926b8173/">
          Daniel José Padilha
        </a>{" "}
        - © {new Date().getFullYear()}{" "}
      </footer>
    </div>
  );
}
