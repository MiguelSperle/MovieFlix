import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";
import { useState } from "react";
import Modal from "../modalProfile/index";
import { IconOpen } from "../../svg/iconOpen/index";
import { IconClose } from "../../svg/iconClose/index";
import HeaderMobile from "../headerMobile/index";

export default function Header(){

  const [open, setOpen ] = useState(false) // estado pra ativar menuMobile

  const [ showModal, setShowModal ] = useState(false) // mostrar modal de quit

   return (
       <>
       <HeaderContainer>
         <div className="container-links-initial">
           <h1 className="title-initial">MovieFlix</h1>
           <nav>
            <ul>
                <li><Link to='/inicio'>ínicio</Link></li>
                <li><Link to='/Series'>séries</Link></li>
                <li><Link to='/Filmes'>filmes</Link></li>
            </ul>
           </nav>
         </div>

         <div className="container-profile">
            <button onClick={() => setShowModal(!showModal)} className="ButtonProfile">Sua conta</button>
           {showModal && <Modal/>}
         </div>
         <button onClick={() => setOpen(!open)} className="button-mobile">
          {open === false ? <IconOpen/> : <IconClose/>}
         </button>
       </HeaderContainer>
       {<HeaderMobile setOpen={setOpen} open={open}/> } {/* procedimento pra mostrar menuMobile */}
       </>
   )
} 