import React from 'react';

import './styles.css';
import coderLogo from '../../assets/coderlogo.png';
import goStackLogo from '../../assets/logoGoStack.png';

export default function Home() {
  return (
    <div className="container">
      <div className="header">
          <a href="/" className="active">INICIO</a>
          <a href="/">CURRICULO</a>
          <a href="/projetos">PROJETOS</a>
      </div>
     
     <div className="about">

      <div className="media-links">
       <a href="https://www.linkedin.com/in/daniel-padilha-6926b8173/">linkedIn</a>
       <a href="https://github.com/danjosepad?tab=repositories">GitHub</a>
      </div>

       <h2>Olá!</h2>
       <p>Meu nome é Daniel José Padilha, e sou apaixonado por JavaScript.</p>
       <p> Desenvolvi meus primeiros projetos com a tecnologia no ano de 2019 e fiquei fascinado pela praticidade e o quão poderosa tal linguagem era.
       Desde então, procurei aprender as melhores formas de utilizá-la, e pude encontrar a Stack React, React Native e NodeJS,
       da qual agradeço até hoje pela escolha. </p>
       <p>Com esse conjunto de tecnologias, é possível entregar um projeto de ponta a ponta com uma qualidade e velocidade incrível.</p>
      
        <div className="projetos">
        <h2>Projetos</h2>
        <p>Pude particiar de alguns projetos muito interessantes, e apresentarei alguns que fiz enquanto me divertia aprendendo com a linguagem!</p>
        <p>Para ver mais sobre <a href="/projetos">Clique aqui</a></p>
        </div>
        
        <div className="cursos">
        <h2>Cursos</h2>
        <p>Durante essa caminhada, alguns cursos puderam me passar os conhecimentos necessários para criar as aplicações que eu gostaria de criar, dentre eles são:</p>

        <img src={coderLogo} alt="coder logo" />
        <a href="https://www.udemy.com/course/curso-reactjs-ninja/">Curso React.JS Ninja, na Udemy</a>
        <p>Este curso me ensinou a base e os conceitos necessários para desenvolver meus primeiros projetos com React</p>
        
        <img src={goStackLogo} alt="coder logo" />
        <a href="https://rocketseat.com.br/gostack">Bootcamp GoStack da Rocketseat</a>
        <p>Depois de práticar por um tempo, percebi que queria levar as minhas aplicações para um nível mais profissional, para entregar o projeto com a melhor qualidade possível
        , e o GoStack da Rocketseat consegue ensinar isso com maestria!</p>
        <p> Estou aprendendo muito com a forma de desenvolver ensinado no Bootcamp, e isso com certeza melhorou muito
        a minha visão como programador, bem como a qualidade dos sistemas que desenvolvo</p>
        

        <p>Caso esteja interessado em mais detalhes, como minha formação acadêmica, outros cursos realizados e experiências profissionais</p>

        
        </div>

        <footer>Site desenvolvido usando ReactJS, por <a href="https://www.linkedin.com/in/daniel-padilha-6926b8173/">Daniel José Padilha</a> - © {new Date().getFullYear()} </footer>
     </div>
    </div>
  )
}

