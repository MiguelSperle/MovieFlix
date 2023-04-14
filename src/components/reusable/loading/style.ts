import  styled from 'styled-components';

export const LoadContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px; 
    z-index: 9999; 

    .loading {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #fff; /* Cor do loader */
    box-sizing: border-box;
    background: transparent;
    animation: loading 1s linear infinite;
  }
  
  /* Adicionar no index.css */
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`