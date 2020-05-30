import React, { useEffect } from 'react';

import aos from 'aos';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styles from './styles.module.css';
import photo from '../../assets/resizedPhoto.png';

import yamanLogo from '../../assets/yamanLogo.png';
import fatecOurinhosLogo from '../../assets/fatecOurinhosLogo.jpg';
import rocketseatLogo from '../../assets/rocketseatLogo.jpg';
import udemyLogo from '../../assets/udemyLogo.jpg';
import fundacaoBradescoLogo from '../../assets/fundacaoBradescoLogo.jpg';
import interasoftLogo from '../../assets/interasoftLogo.png';
import 'aos/dist/aos.css';

export default function Curriculo() {
  useEffect(() => {
    aos.init({ once: true });
  }, []);
  return (
    <>
      <Helmet>
        <title>Daniel Padilha - Curriculo</title>
      </Helmet>
      <div className={styles.header}>
        <Link to="/">INICIO</Link>
        <Link to="/curriculo" className={styles.active}>CURRICULO</Link>
        <Link to="/projetos">PROJETOS</Link>
      </div>

      <div className={styles.container}>
        <div className={styles.userInfo}>
          <h2>Informações pessoais</h2>
          <strong>Daniel José Padilha</strong>
          <span>E-mail: danielpadilhapessoal@outlook.com</span>
          <small>Telefone de contato: (14) 99723-6649</small>

          <div className={styles.mediaLinks}>
            <a href="https://www.linkedin.com/in/daniel-padilha-6926b8173/">
              linkedIn
            </a>
            <a href="https://github.com/danjosepad?tab=repositories">GitHub</a>
          </div>
        </div>
        <div className={styles.photo}>
          <img src={photo} alt="Daniel Padilha" />
        </div>
        <div className={styles.about}>
          <strong>Desenvolvedor Fullstack Javascript</strong>
        </div>
        <div className={styles.workExps}>
          <h2>Experiências</h2>
          <div className={styles.company}>
            <img src={yamanLogo} alt="Yaman" />
            <div className={styles.details}>
              <strong>Técnico de Desempenho 2</strong>
              <p>Yaman Tecnologia</p>
              <small>3 meses, São Paulo - SP</small>
            </div>
          </div>

          <div className={styles.company}>
            <img src={fatecOurinhosLogo} alt="Fatec Ourinhos" />
            <div className={styles.details}>
              <strong>Estagio Fullstack NodeJS, React e React Native</strong>
              <p>FATEC Faculdade de Tecnologia de Ourinhos</p>
              <small>5 meses, Ourinhos - SP</small>
            </div>
          </div>
        </div>
        <div className={styles.education}>
          <h2>Formação Academica</h2>
          <div className={styles.institution}>
            <img src={fatecOurinhosLogo} alt="Fatec Ourinhos" />
            <div className={styles.details}>
              <strong>FATEC Ourinhos Faculdade de Tecnologia</strong>
              <p>Tecnólogo, Análise e Desenvolvimento de Sistemas</p>
              <small>2017 - 2019</small>
            </div>
          </div>
          <div className={styles.institution}>
            <img src={rocketseatLogo} alt="Rocketseat" />
            <div className={styles.details}>
              <strong>Rocketseat - GoStack</strong>
              <p>Fullstack (ReactJS, React Native e NodeJS)</p>
              <small>2020 - Atual </small>
            </div>
          </div>
        </div>
        <div className={styles.knowlodges}>
          <h2>Conhecimentos</h2>
          <p>JavaScript</p>
          <p>NodeJS</p>
          <p>React</p>
          <p>React Native</p>
          <p>Regex</p>
          <p>Testes Automatizados</p>
          <p>Docker</p>
          <p>MySQL</p>
          <p>Postgres</p>
          <p>Git</p>
        </div>
      </div>
      <div className={styles.courses}>
        <h2>Cursos</h2>
        <div className={styles.coursesGrid}>
          <div
            className={styles.courseItem}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <img src={rocketseatLogo} alt="Rocketseat" />
            <strong>Rocketseat</strong>
            <span>GoStack</span>
            <small>2020</small>
          </div>
          <div
            className={styles.courseItem}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <img src={udemyLogo} alt="Udemy" />
            <strong>Udemy</strong>
            <span>Fundamentos de Expressões Regulares(Regex)</span>
            <small>2020</small>
          </div>
          <div
            className={styles.courseItem}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <img src={udemyLogo} alt="Udemy" />
            <strong>Udemy</strong>
            <span>Entendendo TypeScript</span>
            <small>2020</small>
          </div>
          <div
            className={styles.courseItem}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <img src={udemyLogo} alt="Udemy" />
            <strong>Udemy</strong>
            <span>Desenvolvedor Web Completo 2019</span>
            <small>2019</small>
          </div>
          <div
            className={styles.courseItem}
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <img src={udemyLogo} alt="Udemy" />
            <strong>Udemy</strong>
            <span>Introdução a Linguagem Javascript</span>
            <small>2019</small>
          </div>
          <div
            className={styles.courseItem}
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <img src={fatecOurinhosLogo} alt="FATEC Ourinhos" />
            <strong>FATEC Ourinhos</strong>
            <span>CANVAS - Desenhando seu projeto como negócio</span>
            <small>2017</small>
          </div>
          <div
            className={styles.courseItem}
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <img src={fundacaoBradescoLogo} alt="Fundação Bradesco" />
            <strong>Fundação Bradesco</strong>
            <span>Excel Intermediário</span>
            <small>2017</small>
          </div>
          <div
            className={styles.courseItem}
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <img src={fundacaoBradescoLogo} alt="Fundação Bradesco" />
            <strong>Fundação Bradesco</strong>
            <span>Excel Básico</span>
            <small>2017</small>
          </div>
          <div
            className={styles.courseItem}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={fundacaoBradescoLogo} alt="Fundação Bradesco" />
            <strong>Fundação Bradesco</strong>
            <span>Word Intermediário</span>
            <small>2017</small>
          </div>
          <div
            className={styles.courseItem}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={fundacaoBradescoLogo} alt="Fundação Bradesco" />
            <strong>Fundação Bradesco</strong>
            <span>Word Básico</span>
            <small>2017</small>
          </div>
          <div
            className={styles.courseItem}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={interasoftLogo} alt="Training Informática" />
            <strong>Interasoft</strong>
            <span>Montagem e Criação de Sites</span>
            <small>2012</small>
          </div>
          <div
            className={styles.courseItem}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={interasoftLogo} alt="Training Informática" />
            <strong>Interasoft</strong>
            <span>Informática</span>
            <small>2011</small>
          </div>
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
    </>
  );
}
