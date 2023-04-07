import { Link } from "react-router-dom";
import './style.css';

const Header = ()=>{
    return (
        <div>
            <main className="container-main">
            <h1>InTermedio Kit Cervejas S.A.</h1>
            <ul>
                <li><Link to="/"><a>Principal</a></Link></li>
                <li><Link to="/Services/?orig=2"><a>Pedido</a></Link></li>
                <li><Link to="/Contato"><a>Contato</a></Link></li>
            </ul>
            </main>
        </div>
    )
}

export default Header;