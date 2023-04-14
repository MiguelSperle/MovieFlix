import  styled from 'styled-components';

export const SeriesContainer = styled.div `
  
  background-color: #121214;
  min-height: 100vh;
  padding-top: 4.5rem;



  .container-grid-OnlySeries {
    display: grid;
    grid-template-columns: repeat(3 , 300px);
    justify-content: center;
    align-items: center;
    width: 100%;
    height:  100%;
    gap: 1.5rem;
    height: 50vh;
    

    @media screen and (min-width: 768px) and (max-width: 993px) {
      grid-template-columns: repeat(2, 300px);
      min-height: 100vh;
      height: 100%;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
      grid-template-columns: repeat(1, 300px);
      min-height: 100vh;
      height: 100%;
      padding: 1rem 0;
    }
  }

  .container-all-series {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .name-series {
    font-size: 1.3rem;
    padding: 0.5rem;
    color: red;
  }


  .img-series {
    width: 297px;
    height: 400px;
    transition: all 0.2s ease;

    
  }

  .img-series:hover {
    transform: scale(1.05);
    transition: all 0.4s ease;
    cursor: pointer;

    @media screen and (min-width: 320px) and (max-width: 481px) {
      transform: none;
    }
   
  }

`