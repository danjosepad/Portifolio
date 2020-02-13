import React from 'react';

import './styles.css';
import calculadoraGif from '../../assets/giphy.gif';

export default function Projetos(){
return (
  <div className="container">
      <div className="header">
          <a href="/">INICIO</a>
          <a href="/">CURRICULO</a>
          <a href="/" className="active">PROJETOS</a>
      </div>

      Escolha um dos tipos

      <div className="header">
          <a href="/" className="active">NodeJS</a>
          <a href="/">ReactJS</a>
          <a href="/">React Native</a>
          <a href="/">Fullstack</a>
      </div>

      <div className="projects">
        Veja alguns dos projetos que já desenvolvi
      <div>
        <img src={calculadoraGif} alt="gif calculadora" />
        <h2>CalculadoraJS</h2>

        <small>Para a versão usando somente Javascript, clique aqui</small>
      </div>

      <div>
        <img src={calculadoraGif} alt="gif calculadora" />
        <h2>Todo List JS</h2>

        <small>Para a versão usando somente Javascript, clique aqui</small>
      </div>

      <div>
        <img src={calculadoraGif} alt="gif calculadora" />
        <h2>CalculadoraJS</h2>

        <small>Para a versão usando somente Javascript, clique aqui</small>
      </div>

      </div>
      </div>
)
}