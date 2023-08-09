import  styled from 'styled-components';

export const LoginContainer = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/backgroundMovie.webp);
  background-repeat: no-repeat;
  background-size: cover;




  .title-modal-login {
    position: absolute;
    left: 0px;
    padding: 1.6rem;
    color: red;
    font-size: 2.5rem;
    font-weight: 800;

    @media screen and (min-width: 481px) and (max-width: 1026px) {
      text-align: center;
      width: 100%;
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
      text-align: center;
      width: 100%;
    }
  }

  .container-modal-login {
    background-color: rgba(0,0,0,.70);
    width: 100%;
    height: 100%;
    max-width: 450px;
    max-height: 650px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 50px;
    margin-top: 100px;

    @media screen and (min-width: 320px) and (max-width: 469px) {
      max-width: 100%;
    }

  }

  .container-modal-inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .box-input {
    display: flex;
    align-items: center;
    position: relative;
    
  }

  .icon-show {
    position: absolute;
    right: 15px;
    cursor: pointer;
    font-size: 0.7rem;
    color: #8c8c8c;
  }
  
  .container-modal-inputs input {
    width: 320px;
    height: 56px;
    font-size: 0.8rem;
    background-color: #333;
    color: rgb(255, 255, 255);
    padding: 0 1rem 0 1.5rem;
    border-radius: 5px;
    border: none;
    outline: none;

    @media screen and (min-width: 320px) and (max-width: 356px) {
      width: 280px;
    }


  }

  .container-modal-inputs input::placeholder {
    font-size: 0.87rem;
    color: #8c8c8c;
  }

  .email-error, .password-error {
    font-size: 0.7rem;
    color: orange;
    line-height: 0px;
    margin-top: -8px;
  }

  .button-modal-login {
    width: 320px;
    height: 55px;
    background-color: red;
    border-radius: 4px;
    border: none;
    color: white;
    font-weight: 600;
    cursor: pointer;
    font-size: 0.77rem;

    @media screen and (min-width: 320px) and (max-width: 356px) {
      width: 280px;
    }
   
  }

  .container-remember {
    width: 100%;
    margin-top: -25px;
    margin-left: 25px;
    
    @media screen and (min-width: 320px) and (max-width: 469px) {
      width: 100%;
      min-width: 250px;
      
    }
  }

  .container-checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.2rem;
    
    @media screen and (min-width: 320px) and (max-width: 469px) {
      justify-content: center; 

    }
   
  }

  .container-checkbox input[type="checkbox" i] {
    cursor: pointer;

  }

  .container-checkbox label {
    font-size: 0.8rem;

  }

  .container-help a {
    text-decoration: none;
    color: #fff;
    font-size: 0.8rem;
  }

  .container-help a:hover {
    text-decoration: underline;
    
  }

  .container-information {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-left: 32px;

    @media screen and (min-width: 320px) and (max-width: 469px) {
      width: 100%;
      min-width: 250px;
      align-items: center;
      margin-left: 0px;
    }
  }



  .container-newAccount {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;

    
  }

  .text-account {
    font-size: 0.9rem;
    color: gray;
  }

  .container-newAccount a {
    text-decoration: none;
    color: #fff;
    font-size: 0.8rem;
 
  }

  .container-newAccount a:hover {
    text-decoration: underline;
  }

  .text-information {
    font-size: 0.7rem;
    color: gray;
  }
  
 
`