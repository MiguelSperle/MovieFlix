import  styled from 'styled-components';

export const SlugContainerSeries = styled.div `
  background-color: #121214;
  min-height: 92vh;
  

  @media screen and  (min-width: 1201px) {
    margin-top: 3.9rem;
    padding-top: 4rem;
   }

   @media screen and (min-width: 320px) and (max-width: 1201px) {
    margin-top: 4.3rem;
    padding-top: 1rem;
   }
  

  .container-all-slug-movies {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 2rem 0;

    @media screen and (min-width: 548px) and (max-width: 1010px) {
      flex-direction: column;
    }

    @media screen and (min-width: 320px) and (max-width: 547px) {
      flex-direction: column;
    }

  }

  .container-image {
     width: 400px;
     height: 470px;

    @media screen and (min-width: 320px) and (max-width: 547px) {
      width: 300px;
      height: 370px;
    }
     
  }

  .img {
    width: 100%;
    height: 100%;
  }

  .container-info-slug-movies {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 548px) and (max-width: 1010px) {
      align-items: center;
    }

    @media screen and (min-width: 320px) and (max-width: 547px) {
      align-items: center;
    }

  }

  .name-info-slug-movies {
    font-size: 2.5rem;

    @media screen and (min-width: 320px) and (max-width: 547px) {
      font-size: 1.8rem;
    }

  }

  .minutes-info-slug-movies {
    color: yellow;
  }

  .description-info-slug-movies {
    width: 500px;
    text-align: justify;

    @media screen and (min-width: 320px) and (max-width: 547px) {
      width: 280px;
      text-align: justify;
    }

  }

  .button-slug-movies {
    height: 60px;
    width: 310px;
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    @media screen and (min-width: 320px) and (max-width: 547px) {
      width: 290px;
    }


  }


`