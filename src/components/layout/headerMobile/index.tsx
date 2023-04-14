import { MobileMenu } from "../headerMobile/style";
import { TypeOpenMenu } from "../../../interface/GlobalTypes";
import { Link } from "react-router-dom";

export default function HeaderMobile(props: TypeOpenMenu){ // essa tipagem do estado que do Header pra passar pro HeaderMobile (MobileMenu)
    return (
        <MobileMenu>
            <nav className={props.open ? 'container-links off' : 'container-links '}>
                <ul>
                    <Link onClick={() => props.setOpen(false)} to='/inicio' className='Link-nav'>ínicio</Link>
                    <Link onClick={() => props.setOpen(false)} to='/Series' className='Link-nav'>séries</Link>
                    <Link onClick={() => props.setOpen(false)} to='/Filmes' className='Link-nav'>filmes</Link>
                </ul>
            </nav>
        </MobileMenu>
    )
}