import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components

const Container = styled.div`
  min-height: 50px;
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  a {
  color: #c4b094;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  }

  a:hover {
  color: #ae9878;
  border-bottom: 2px solid #c4b094;
  padding-bottom: 4px;
  transition: all 0.1s;
  transition: all 0.1s;
  }

  ${({ isActive }) => isActive && css`
    color: #ae9878;
    border-bottom: 2px solid #c4b094;
    padding-bottom: 4px;
    transition: all 0.1s;
  `}
`;

function Header({ type }) {
  return (
    <Container>
      <Link to="/" isActive={type === 'home'}>INICIO</Link>
      <Link to="/curriculo" isActive={type === 'curriculum'}>CURRICULO</Link>
      <Link to="/projetos" isActive={type === 'projects'}>PROJETOS</Link>
    </Container>
  )
}

Header.defaultProps = {
  type: 'home',
}

Header.propTypes = {
  type: PropTypes.string,
}

export default Header;
