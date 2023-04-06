import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Services from './pages/Services';
import Header from './CompHeaderFooter/Header';
import Footer from './CompHeaderFooter/Footer';
import './styles-publico.css'

const Rotas = ()=>{

    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" exact={true}  Component={Home}/>
                <Route path="/Services"  Component={Services}/>
                <Route path="/Contato"  Component={Contato}/>
            </Routes>
        <Footer/>
        </BrowserRouter>

    )

}
export default Rotas;
