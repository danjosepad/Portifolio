import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.div`
  max-width: 800px;
  margin: 60px auto 0px;
  padding: 0px 30px;
`;

const fadeIn = keyframes`
  from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

export const UserInfo = styled.div`
  grid-area: userInfo;
  margin-top: 10px;

  strong {
    font-size: 18px;
  }

  span {
    display: block;
    font-size: 16px;
  }

  small {
    font-size: 14px;
  }

  a {
    margin-left: 5px;
  }

  @media (max-width: 800px) {
    h2 {
      display: none;
    }
  }
`;

export const Photo = styled.div`
  grid-area: photo;

  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
  }
`;

export const About = styled.div`
  grid-area: about;

  strong {
    display: none;
  }

  @media (max-width: 800px) {
    font-size: 22px;
    color: #ae9878;
    font-weight: bold;
    display: block;
    text-align: center;
  }
`;

export const WorkExps = styled.div`
  grid-area: workExps;
  margin-top: 10px;
`;

export const Education = styled.div`
  grid-area: education;
`;

export const Knowlodges = styled.div`
  grid-area: knowlodges;
  margin-top: 10px;

  p {
    border-bottom: 1px solid #e9eae6;
    padding: 8px 0 8px 0;
  }
`;

export const Courses = styled.div`
  grid-area: courses;

  h2 {
    color: #59504d;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const MediaLinks = styled.div`
  margin-top: 10px;

  a {
    margin-left: 5px;
  }

  @media (max-width: 800px) {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Company = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  gap: 15px;
  margin-bottom: 20px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    box-shadow: 0px 5px 5px 0p rgba(0, 0, 0, 0.15);
  }

  strong {
    font-size: 18px;
    display: block;
  }

  p {
    font-size: 14px;
    margin-bottom: 5px;
  }

  small {
    font-weight: 600;
    display: block;
    margin-bottom: 20px;
  }
`;

export const Institution = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  gap: 15px;
  margin-bottom: 20px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
  }

  strong {
    font-size: 18px;
    display: block;
  }

  p {
    font-size: 14px;
    margin-bottom: 5px;
  }

  small {
    font-weight: 600;
  }
`;

export const CoursesGrid = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const CourseItem = styled.div`
  text-align: center;
  margin-top: 40px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  }

  strong {
    font-size: 18px;
    display: block;
  }

  span {
    font-size: 14px;
    display: block;
  }

  small {
    font-weight: 600;
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 30px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr 1fr;
  animation: ${fadeIn} 1.25s;

  grid-template-areas:
    "userInfo photo"
    "workExps knowlodges"
    "education knowlodges"
    "courses courses";

  h2 {
    color: #59504d;
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    grid-gap: 0px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "photo"
      "about"
      "userInfo"
      "workExps"
      "education"
      "knowlodges"
      "courses";

    ${UserInfo}, ${Photo}, ${About} {
      align-self: center;
      justify-self: center;
    }

    ${WorkExps}, ${Education}, ${Knowlodges} {
      margin-top: 40px;
    }

    ${CoursesGrid} {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
