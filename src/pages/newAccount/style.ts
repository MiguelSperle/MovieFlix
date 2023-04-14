import  styled from 'styled-components';

export const ContainerAccount = styled.div `
  
   background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/backgroundMovie.webp);
   background-repeat: no-repeat;
   background-size: cover;
   height: 100vh;

   header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 5rem;

   @media screen and (min-width: 320px) and (max-width: 480px) {
      padding-top: 3.5rem;
      flex-direction: column;
      gap: 0.5rem;
        
   }

   }

   .title-newAccount {
    color: red;
    font-size: 2.5rem;
    font-weight: 800;
   }

   .button-into-link {
    width: 130px;
    height: 50px;
    background-color: red;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
   }

   .link-go-to-initial {
    text-decoration: none;
   }

   

   .container-info-stream {
      height: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;

      @media screen and (min-width: 320px) and (max-width: 480px) {
         padding-top: 3.5rem;
      }

   }

   .first-text-info-stream {
      font-size: 2.5rem;
      font-weight: 800;
      color: #fff;

      @media screen and (min-width: 1025px) and (max-width: 1200px) {
         font-size: 2.2rem;
      }

      @media screen and (min-width: 769px) and (max-width: 1024px) {
         padding: 0 70px;
         font-size: 1.8rem;
         text-align: justify;
      }

      @media screen and (min-width: 481px) and (max-width: 768px) {
         font-size: 1.5rem;
         text-align: justify;
         padding: 0 20px;
      }

      @media screen and (min-width: 320px) and (max-width: 480px) {
         font-size: 1rem;
         text-align: justify;
         padding: 0 20px;
      }
   }

   .second-text-info-stream, .third-text-info-stream {
      font-size: 1.3rem;
      font-weight: 400;

      @media screen and (min-width: 481px) and (max-width: 768px) {
         text-align: justify;
         padding: 0 20px;
         font-size: 1.1rem;
      }

      @media screen and (min-width: 320px) and (max-width: 480px) {
         font-size: 1rem;
         text-align: justify;
         padding: 0 20px;
      }
   }

   .container-inputs-button {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      
   }
   
   .container-input-account {
      display: flex;
      flex-direction: row;
      gap: 0.8rem;

      @media screen and (min-width: 769px) and (max-width: 1024px) {
         display: grid;
         grid-template-columns: repeat(2,1fr);
      }

      @media screen and (min-width: 481px) and (max-width: 768px) {
         display: flex;
         flex-direction: column;
      }

      @media screen and (min-width: 320px) and (max-width: 480px) {
         display: flex;
         flex-direction: column;
      }

   }

   .container-input-account input {
      background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), transparent;
      border: 1px solid gray;
      border-radius: 4px;
      height: 60px;
      width: 280px;
      padding: 20px;
      color: #fff;
      
   }

   .container-input-account input::placeholder {
      font-size: 0.9rem;
      font-weight: 400;
   }

   .container-email-account, .container-password-account, .container-name-account {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
   }

   .container-email-account, .container-password-account span, .container-name-account span {
      font-size: 0.8rem;
      color: orange;
   }

   .container-button-finish-account {
      display: flex;
      justify-content: center;

   }

   .button-finish-account {
      width: 180px;
      height: 60px;
      background-color: red;
      border: none;
      border-radius: 5px;
      color: #fff;
      font-size: 1.3rem;
      font-weight: 600;
      cursor: pointer;

      
   }

`