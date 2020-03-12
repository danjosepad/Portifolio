import React, { useEffect } from 'react';

import aos from 'aos';
import 'aos/dist/aos.css';

import reactLogo from '../../assets/reactLogo.jpg';
import nodeLogo from '../../assets/nodeLogo.jpg';
import photo from '../../assets/resizedPhoto.png';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export default function Home() {
  useEffect(() => {
    aos.init({ once: true });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/" className={styles.active}>INICIO</Link>
        <Link to="/curriculo">CURRICULO</Link>
        <Link to="/projetos">PROJETOS</Link>
      </div>

      <div className={styles.about}>
        <img src={photo} alt="Daniel Padilha" className={styles.photo} />
        <strong>Daniel José Padilha</strong>
        <small>Análise e Desenvolvimento de Sistemas</small>
        <small>Javascript Developer</small>
        <div className={styles.mediaLinks}>
          <a href="https://www.linkedin.com/in/daniel-padilha-6926b8173/">
            linkedIn
          </a>
          <a href="https://github.com/danjosepad?tab=repositories">GitHub</a>
        </div>

        <h2>Olá!</h2>
        <p>
          Meu nome é Daniel José Padilha, técnlogo em análise e desenvolvimento
          de sistemas, e sou apaixonado por JavaScript!
        </p>
        <p>
          {' '}
          Desenvolvi meus primeiros projetos com Javascript no inicio do ano de
          2019 e fiquei fascinado pela praticidade e o quão poderosa ela é.
          Desde então, procurei aprender as melhores formas de utilizá-la, e
          pude encontrar a Stack React, React Native e NodeJS, da qual sempre
          utilizo em meus projetos.
        </p>

        <div className={styles.projects}>
          <h2>Projetos</h2>
          <p>
            Pude participar de projetos muito interessantes, e apresentarei
            alguns que fiz enquanto me divertia aprendendo com a linguagem!
          </p>
          <p>
            Para ver mais sobre,
            {' '}
            <Link to="/projetos">Clique aqui</Link>
          </p>
        </div>
        <h2>Conhecimentos</h2>

        <div className={styles.knowlodges}>
          <div
            className={styles.knowlodgesContainer}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={nodeLogo} alt="NodeJS" />
            <h3>NodeJS</h3>
            <small>ExpressJS</small>
            <small>AdonisJS</small>
            <small>Conhecimentos em BD (MySQL, Postgres, mongoDB)</small>
            <small>Testes</small>
          </div>
          <div
            className={styles.knowlodgesContainer}
            data-aos="fade-up"
            data-aos-duration="1250"
          >
            <img src={reactLogo} alt="ReactJS" />
            <h3>React</h3>
            <small>React Hooks</small>
            <small>Redux</small>
            <small>Testes</small>
          </div>
          <div
            className={styles.knowlodgesContainer}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={reactLogo} alt="React Native" />
            <h3>React Native</h3>
            <small>React Hooks</small>
            <small>Redux</small>
            <small>Testes</small>
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
    </div>
  );
}
