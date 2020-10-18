import React, { useState, useEffect, useMemo } from 'react';

// import "./styles.css";
import aos from 'aos';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import calculadoraGif from '../../assets/giphy.gif';

import appScreensPeerClass from '../../assets/appScreensPeerClass.png';
import appScreensTindev from '../../assets/appScreensTindev.png';
import appScreensAircnc from '../../assets/appScreensAircnc.png';
import appScreensDevRadar from '../../assets/appScreensDevRadar.png';
import appScreenAppleClone from '../../assets/appScreenAppleClone.png';
import appScreenAnotacoes from '../../assets/appScreenAnotacoes.png';
import appScreenTodoList from '../../assets/appScreenTodoList.png';
import appScreensInstaRocket from '../../assets/appScreensInstaRocket.png';

import logoConceitosNodeJS from '../../assets/logoConceitosNodeJS.png';
import logoGoBarber from '../../assets/logoGoBarber.png';

import styles from './styles.module.css';

import 'aos/dist/aos.css';

export default function Projetos() {
  const [stackType, setStackType] = useState('');

  useEffect(() => {
    aos.init();
  }, []);

  const showBackend = () => {
    setStackType('backend');
  };

  const showWeb = () => {
    setStackType('web');
  };

  const showMobile = () => {
    setStackType('mobile');
  };

  const showFullstack = () => {
    setStackType('fullstack');
  };

  const renderBasedOnStackType = useMemo(() => {
    switch(stackType) {
      case 'backend':
        return (
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
                {' '}
                <a href="https://github.com/danjosepad/GoBarber-Node">
                  GoBarber NodeJS
                </a>
              </h2>
              <p>Criando uma API para sistema de barbearia em NodeJS</p>
            </div>
          </>
        )
        case 'web':
          return (
            <>
              <div
                className={styles.projectsContent}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img src={appScreenAppleClone} alt="Clone Apple" />
                <h2>
                  <Link to="/projetos/apple">Apple</Link>
                </h2>
                <p>Clone da página Inicial da Apple</p>
              </div>
              <div
                className={styles.projectsContent}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img src={appScreenAnotacoes} alt="Foto AnotacoesJS" />
                <h2>
                  <Link to="/projetos/anotacoesJS">AnotacoesJS</Link>
                </h2>
                <p>
                  Sistema de gerenciamento de anotações baseado no iCloud Mail
                </p>
              </div>
              <div
                className={styles.projectsContent}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img src={calculadoraGif} alt="gif calculadora" />
                <h2>
                  <Link to="/projetos/calculadoraJS">CalculadoraJS</Link>
                </h2>
                <p>Criação de uma calculadora visual com o uso do ReactJS!</p>
                <small>
                  Para a versão usando somente Javascript,
                  {' '}
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
                <img src={appScreenTodoList} alt="Foto Todo-List" />
                <h2>
                  <Link to="/projetos/todo-list">Todo List</Link>
                </h2>
                <p>
                  Crie e gerencie suas tarefas usando esse Todo-List em ReactJS
                </p>
                <small>
                  Para a versão usando somente Javascript,
                  {' '}
                  <a href="https://github.com/danjosepad/Todo-List">
                    clique aqui
                  </a>
                </small>
              </div>
            </>
          )
        case 'mobile':
          return (
            <>
              <div
                className={styles.projectsContent}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <p>Projetos mobile serão publicados em breve!</p>
              </div>
            </>
          )
        case 'fullstack':
            return (
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
                <div
                  className={styles.projectsContent}
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <img src={appScreensInstaRocket} alt="InstaRocket" />
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
                    {' '}
                    <a href="https://github.com/danjosepad/semana-omnistack-8">
                      TinDev
                    </a>
                  </h2>
                  <p>Clone do Tinder</p>
                </div>
              </>
            )
        default:
          break;
      }

    }, [stackType])


  return (
    <div className={styles.container}>
      <Helmet>
        <title>Daniel Padilha - Projetos</title>
      </Helmet>
      <div className={styles.header}>
        <Link to="/">INICIO</Link>
        <Link to="/curriculo">CURRICULO</Link>
        <Link to="/projetos" className={styles.active}>PROJETOS</Link>
      </div>

      <div className={styles.projectsContainer}>
        <h1>Projetos</h1>
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
          {renderBasedOnStackType}
        </div>
      </div>
      <footer>
        Site desenvolvido usando ReactJS, por
        {' '}
        <a href="https://www.linkedin.com/in/daniel-padilha-6926b8173/">
          Daniel José Padilha
        </a>
        {' '}
        - ©
        {' '}
        {new Date().getFullYear()}
        {' '}
      </footer>
    </div>
  );
}
