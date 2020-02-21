import React, { useState } from 'react';

// import "./styles.css";
import calculadoraGif from '../../assets/giphy.gif';
import anotacoesImg from '../../assets/anotacoes.jpg';
import todolistImg from '../../assets/todolist.jpg';
import styles from './styles.module.css';

export default function Projetos() {
  const [backend, setBackend] = useState(true);
  const [web, setWeb] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [fullstack, setFullstack] = useState(false);

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
        <h1>Veja alguns dos projetos que já desenvolvi</h1>
        <div className={styles.headerProjects}>
          <button type="button" onClick={() => showBackend()}>Backend</button>
          <button type="button" onClick={() => showWeb()}>Web</button>
          <button type="button" onClick={() => showMobile()}>Mobile</button>
          <button type="button" onClick={() => showFullstack()}>Fullstack</button>
        </div>
        <div className={styles.projects}>
          {backend && (
            <>
              <div className={styles.projectsContent}>
                <h2>API de Conceitos do NodeJS</h2>
                <p>Explorando os conceitos do NodeJS utilizando Express</p>
                <small>Para saber mais sobre, clique aqui</small>
              </div>

              <div className={styles.projectsContent}>
                <h2>GoBarber NodeJS</h2>
                <p>Criando uma API para sistema de barbearia em NodeJS</p>
                <small>Para saber mais sobre, clique aqui</small>
              </div>
            </>
          )}

          {web && (
            <>
              <div className={styles.projectsContent}>
                <img src={calculadoraGif} alt="gif calculadora" />
                <h2>CalculadoraJS</h2>
                <p>Criação de uma calculadora visual com o uso do ReactJS!</p>
                <small>
                  Para a versão usando somente Javascript, clique aqui
                </small>
              </div>
              <div lassName={styles.projectsContent}>
                <img src={todolistImg} alt="Foto Todo-List" />
                <h2>Todo-List</h2>
                <p>Crie e gerencie suas tarefas usando esse Todo-List em ReactJS</p>
                <small>
                  Para a versão usando somente Javascript, clique aqui
                </small>
              </div>
              <div lassName={styles.projectsContent}>
                <img src={anotacoesImg} alt="Foto AnotacoesJS" />
                <h2>AnotacoesJS</h2>
                <p>Sistema de gerenciamento de anotações baseado no iCloud Mail</p>
                <small>
                  Para a versão usando somente Javascript, clique aqui
                </small>
              </div>
            </>
          )}

          {mobile && (
            <>

            </>
          )}

          {fullstack && (
            <>
              <div className={styles.projectsContent}>
                <h2>PeerClass</h2>
                <p>Sistema de avaliação por pares e rubricas</p>
                <small>Para saber mais, clique aqui</small>
              </div>

              <div className={styles.projectsContent}>
                <h2>Instarocket</h2>
                <p>Clone do Instagram</p>
                <small>Para saber mais, clique aqui</small>
              </div>

              <div className={styles.projectsContent}>
                <h2>TinDev</h2>
                <p>Clone do Tinder</p>
                <small>Para saber mais, clique aqui</small>
              </div>

              <div className={styles.projectsContent}>
                <h2>Aircnc</h2>
                <p>Clone do Airbnb</p>
                <small>Para saber mais, clique aqui</small>
              </div>

              <div className={styles.projectsContent}>
                <h2>DevRadar</h2>
                <p>Busque desenvolvedores em sua região</p>
                <small>Para saber mais, clique aqui</small>
              </div>
            </>
          )}
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
