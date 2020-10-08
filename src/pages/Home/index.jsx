import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import aos from 'aos';
import 'aos/dist/aos.css';

import reactLogo from '../../assets/reactLogo.jpg';
import nodeLogo from '../../assets/nodeLogo.jpg';
import photo from '../../assets/resizedPhoto.png';
import styles from './styles.module.css';
import Footer from '../../components/Footer';
import {
  Container,
  Header,
  About,
  LinkRef,
  MediaLinks,
  Knowlodges,
  KnowlodgesContainer
} from './styles';

export default function Home() {
  useEffect(() => {
    aos.init({ once: true });
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Daniel Padilha - Inicio</title>
      </Helmet>
      <Header>
        <LinkRef to="/" isActive>INICIO</LinkRef>
        <LinkRef to="/curriculo">CURRICULO</LinkRef>
        <LinkRef to="/projetos">PROJETOS</LinkRef>
      </Header>

      <About>
        <img src={photo} alt="Daniel Padilha" className={styles.photo} />
        <strong>Daniel José Padilha</strong>
        <small>Análise e Desenvolvimento de Sistemas</small>
        <small>Javascript Developer</small>
        <MediaLinks>
          <a href="https://www.linkedin.com/in/daniel-padilha-6926b8173/">
            linkedIn
          </a>
          <a href="https://github.com/danjosepad?tab=repositories">GitHub</a>
        </MediaLinks>

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

        <div>
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

        <Knowlodges>
          <KnowlodgesContainer
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={nodeLogo} alt="NodeJS" />
            <h3>NodeJS</h3>
            <small>ExpressJS</small>
            <small>AdonisJS</small>
            <small>Conhecimentos em BD (MySQL, Postgres, mongoDB)</small>
          </KnowlodgesContainer>
          <KnowlodgesContainer
            data-aos="fade-up"
            data-aos-duration="1250"
          >
            <img src={reactLogo} alt="ReactJS" />
            <h3>React</h3>
            <small>React Hooks</small>
            <small>Redux</small>
            <small>Testes com Cypress e Jest</small>
          </KnowlodgesContainer>
          <KnowlodgesContainer
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={reactLogo} alt="React Native" />
            <h3>React Native</h3>
            <small>React Hooks</small>
            <small>Redux</small>
          </KnowlodgesContainer>
        </Knowlodges>
        <Footer />
      </About>
    </Container>
  );
}
