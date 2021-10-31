import { css } from '@emotion/css';

const styles = css`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .__form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    input { 
      height: 40px;
      border: 1px solid gray;
      border-radius: 8px;
      padding-left: 0.5rem;

      ::placeholder {
        color: gray;
        padding-left: 0.5rem;
      }
    }

    button {
      margin-top: 1rem;
      height: 40px;
      border-radius: 8px;
      padding: 0 1rem;
      color: #FFF;
      
      border: none;
     
      background: blue;
      transition: all ease 0.25s;

      ::after {
        content: "Converter!";
      }

      :focus:not(:focus-visible) {
        outline: 0;
      }
    }
    
    .--copied {
      background: #1e9642;
          
        ::after {
          content: "Copiado!";
        }
      }
  }
  
  .__inputs > input + input {
    margin-left: 1rem;
  }

  .__footer {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem;

    button {
      border: none;
      color: gray;
      background: transparent;
    }
  }
`;

export default styles;
