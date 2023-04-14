import  styled from 'styled-components';

export const HeaderContainer = styled.div `
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 10vh;
      padding: 2rem;
      background-color: #121214;
      position: fixed;
      top: 0px;
      z-index: 9999;
      width: 100%;


   .container-links-initial {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
   }

   .title-initial {
      color: red;
      font-weight: 800;
      font-size: 2rem;
   }


   .container-links-initial nav ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      gap: 1.2rem;

   @media screen and (min-width: 320px) and (max-width: 1024px){
      display: none;
   }

   @media screen and (min-width: 481px) and (max-width: 768px) {
      display: none;
   }

   @media screen and (min-width: 320px) and (max-width: 480px) {
     display: none;
   }

   }

   .container-links-initial nav ul li a {
      text-decoration: none;
      color: #fff;
      font-size: 0.85rem;
   }

   .container-profile {
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .ButtonProfile {
      cursor: pointer;
      width: 100px;
      height: 40px;
      background-color: red;
      border: none;
      border-radius: 6px;
      color: #fff;
      font-size: 0.9rem;

   @media screen and (min-width: 320px) and (max-width: 1024px){
      display: none;
   }

   @media screen and (min-width: 481px) and (max-width: 768px) {
      display: none;
   }

   @media screen and (min-width: 320px) and (max-width: 480px) {
     display: none;
   }
   
}

  .button-mobile {
   background-color: rgb(14, 17, 22);
   color: #fff;
   border: none;
   font-size: 1.2rem;
   cursor: pointer;
   display: none;
   

   @media screen and (min-width: 320px) and (max-width: 1024px){
      display: block;
      margin-top: 0.5rem;
   }
 }

`