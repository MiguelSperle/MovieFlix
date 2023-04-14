import  styled from 'styled-components';

export const ContainerProfile = styled.div `
   
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);;
    height: 140px;
    width: 150px;
    max-width: 100%;
    position: absolute;
    right: 15px;
    top: 105px;
    z-index: 9999;
      
    .name-profile {
      padding: 0.5rem;
      white-space: nowrap;
    }

   .button-profile-go-out {
      width: 100px;
      height: 40px;
      background-color: red;
      color: #fff;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;  
      cursor: pointer;
    }

    .link-button-go-out {
      text-decoration: none;
      color: #fff;
      
    }




`