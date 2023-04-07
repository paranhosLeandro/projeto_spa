import './styles.css';
import {Link } from 'react-router-dom';
import { useState } from 'react'; 
import { ToastContainer, toast } from 'react-toastify';
import ContatoBtSalvar from './ContatoBtSalvar';

const Contato = ()=>{

    const [titulo,setTitulo] = useState();
    const [desc,setDesc] = useState();
    const [email,setEmail] = useState();
 
    const arr = [titulo,desc,email]
 
    return (
           <div className='container-contato'>
            
            <div className='container-detalhe'>
                
                Informe se nome e e-mail que entraremos em contao.
                Digite a sugestão no campo dscrição.

                <div className='container-form'>
                    <input placeholder='Nome' onChange={(txt)=>setTitulo(txt.target.value)}/>
                    <input placeholder='E-mail' onChange={(txt)=>setEmail(txt.target.value)}/>
                    <textarea placeholder='Descricao' onChange={(txt)=>setDesc(txt.target.value)}/>
                    <ContatoBtSalvar tit={titulo} mail={email} desc={desc}/>
                    <ToastContainer/>
                </div>
            </div>
           </div>
    )
}

export default Contato;