import styled, { keyframes } from 'styled-components';

function fadeIn() {
  return keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
  `;
}

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const About = styled.div`
  margin-top: 40px;
  animation: ${fadeIn} 1.25s;

  strong {
    color: #59504d;
    font-size: 20px;
    display: block;
    text-align: center;
  }

  small {
    font-size: 14px;
    display: block;
    text-align: center;
  }

  img {
    display: block;
    margin: auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  h2 {
    margin-top: 40px;
    font-size: 36px;
    color: #59504d;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    text-align: left;
  }
`;

export const MediaLinks = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px auto;
  width: 40%;

  a {
    font-size: 18px;
  }
`;

export const Knowlodges = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  img {
    display: block;
    margin: auto;
    width: 150px;
    height: 150px;

    margin: 40px auto 20px auto;
  }

  h3 {
    color: #ae9878;
    font-size: 22px;
    font-weight: 600;
  }

  small {
    display: block;
    font-weight: 300;
    color: #59504d;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const KnowlodgesContainer = styled.div`
  text-align: center;
`;
