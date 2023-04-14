import  styled from 'styled-components';

export const MobileMenu  =  styled.div `

.container-links {
 position: fixed;
 top: 4.3rem;
 left: -100vw;
 z-index: 999;
 transition: 0.7s all cubic-bezier(0.67, 0.01, 0.1, 0.97) ;
 min-height: 18vh;
 width: 100vw;
 background-color:  rgb(18, 18, 20);
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-top: 2rem;
 text-align: left;
 opacity: 0;
 border-bottom: 1px solid white;




}


.container-links.off {
    left: 0;
    opacity: 1;
}


nav ul {
    position: relative;
    bottom: 30px;
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 17px;
    padding: 0px 2rem;

}

.Link-nav {
    text-decoration: none;
    color: #fff;
    transition: all 0.5s ease;
    font-size: 1.25rem;
}



`