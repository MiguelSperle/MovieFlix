import { ContainerProfile } from "./style";
import { Link, useNavigate } from "react-router-dom";

export default function Modal(){

    const navigate = useNavigate();

    const userLocalStorageName = JSON.parse(localStorage.getItem('dataUser') || '')

    function EmptyLocalStorage(){
        localStorage.setItem('dataUser', JSON.stringify('')) 
    }
    
    return (
        <ContainerProfile>
            <p className="name-profile">{userLocalStorageName}</p>
            <Link className="link-button-go-out" to='/'><button onClick={EmptyLocalStorage} className="button-profile-go-out">SAIR</button></Link>
        </ContainerProfile >
    )
}