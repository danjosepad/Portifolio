import React from 'react';
import styled from 'styled-components';

// Styled components

const Content = styled.footer`
  footer {
    margin-top: 100px;
    text-align: center;
  }
`;

function Footer() {
  return (
    <Content>
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
    </Content>

  )
}


export default Footer;