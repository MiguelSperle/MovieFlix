import  styled from 'styled-components';


export const InicioContainer = styled.div `
  background-color: #121214;
  min-height: 100vh;
  height: 100%;


  
  .container-slider-movies {
    height: 80vh;
  }

  .swiper {
   width: 100%;
   height: 100%;

   @media screen and  (min-width: 1201px) {
    margin-top: 4.3rem;
   }

   @media screen and (min-width: 320px) and (max-width: 1201px) {
    margin-top: 4.3rem;
   }
  
  }

  .swiper-slide {
   text-align: center;
   font-size: 18px;
   background: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
  }

  .swiper-slide img {
   display: block;
   width: 100%;
   height: 100%;
   object-fit: cover;
  }


  .container-grid-all {
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(3 , 300px);
    justify-content: center;
    align-items: center;
    width: 100%;
    height:  100%;
    gap: 1.5rem;

    
    @media screen and (min-width: 769px) and (max-width: 1024px) {
      grid-template-columns: repeat(2, 300px);
    }
    
    @media screen and (min-width: 481px) and (max-width: 768px) {
      grid-template-columns: repeat(1, 300px);
   }

   @media screen and (min-width: 320px) and (max-width: 480px) {
     grid-template-columns: repeat(1, 300px);
   }

}
  
  .container-all-movies {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .names-movies {
    font-size: 1.3rem;
    padding: 0.5rem;
    color: red;
  }

  .img-movies {
    width: 297px;
    height: 400px;
    transition: all 0.2s ease;
  }

  .img-movies:hover {
    transform: scale(1.05);
    transition: all 0.4s ease;
    cursor: pointer;
  }

`