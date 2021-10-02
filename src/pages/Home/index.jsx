import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import aos from 'aos';
import 'aos/dist/aos.css';

import photo from '../../assets/resizedPhoto.png';
import styles from './styles.module.css';
import Footer from '../../components/Footer';
import {
  Container,
  About,
  MediaLinks,
} from './styles';
import Header from '../../components/Header';

export default function Home() {
  useEffect(() => {
    aos.init({ once: true });
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Daniel Padilha - Inicio</title>
      </Helmet>
      <Header type="home" />
      <About>
        <img src={photo} alt="Daniel Padilha" className={styles.photo} />
        <strong>Daniel José Padilha</strong>
        <small>Análise e Desenvolvimento de Sistemas</small>
        <small>Javascript Developer</small>
        <MediaLinks>
          <a href="https://www.linkedin.com/in/daniel-padilha-6926b8173/" target="_blank" rel="noopener noreferrer">
            linkedIn
          </a>
          <a href="https://github.com/danjosepad?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
        </MediaLinks>

        <h2>Olá!</h2>
        <p>
          Meu nome é Daniel José Padilha, técnlogo em análise e desenvolvimento
          de sistemas, e sou apaixonado por JavaScript!
        </p>
        <p>
          {' '}
          Desenvolvo templates desde meus 12 anos, e sempre fiquei abismado com 
          o poder das tecnologias e suas utilidades. Entregar soluções de qualidade é o que me motiva!
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
      
        <Footer />
      </About>
    </Container>
  );
}
