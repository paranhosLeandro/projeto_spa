import CompServ from "../../CompHeaderFooter/CompServices";
import './style.css';

const Services = ()=>{
    return (
        <div className="container-services">
            <CompServ name='Serviço'/>
            <CompServ name='Limp'/>
            <CompServ name='RH'/>
            <CompServ name='Dep'/>
            <CompServ name='Arq'/>
            <CompServ/>
        </div>
    )
}

export default Services;