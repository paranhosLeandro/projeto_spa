import './styles.css';
import {Link } from 'react-router-dom';
import { useState } from 'react'; 
import { ToastContainer, toast } from 'react-toastify';

const ContatoBtSalvar =(conteudo)=>{


 /*   function empty() {
   var args = [].slice.call(arguments);

    args.forEach(function(argument) {
        if(!argument || 0 === argument.length || !argument || /^\s*$/.test(argument) || argument.length === 0 || !argument.trim()) {
            return false;
        } 
    });
}*/
    //alert(conteudo)
    let arr = [];
    let tit =  conteudo.tit;
    let mail =  conteudo.mail;
    let desc =  conteudo.desc;
    /*function empty(argument) {
        var args = [].slice.call(argument);
     
         args.forEach(function(argument) {
             if(!argument || 0 === argument.length || !argument || /^\s*$/.test(argument) || argument.length === 0 || !argument.trim()) {
                 return false;
             } 
         });
     }*/
    let vazio = '';
    let tot = arr.length;
    let tt = conteudo.tit;
    let msg;
    if (tit==''||mail==''||desc==''){
        msg =() =>  toast('Todos os campos devem ser preenchido!')
    }else{
        msg =() =>  toast('Sua solicitação voi enviada com sucesso, em breve entraremos em contato!')
    }

//    msg =() =>  toast('Sua solicitação voi enviada com sucesso, em breve entraremos em contato!'+desc)
    
    const exibeMsg = ()=>{
        return(<div><ToastContainer/>{msg}</div>);
    }


    return(

        <div className='container-butao'>
        <button onClick={msg}>Salvar</button>
   
        </div>



    )

}

export default ContatoBtSalvar;
