import React from "react";
import Check from "../../CompHtml/Check";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CompModal from "./CompModal";
import Modal from 'react-modal';
import './styleBt.css'
Modal.setAppElement('#root');

const BtSalvar = (checkit) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const conteudo = checkit.valor;
  const notify = () => toast('<h1>'+{listaItens}+'</h1>');  
  const salvar = () => {
    abrirModal();
    
    //alert(`Hello, ${listaItens}!`);
   // return({notify});
   
   return(<div>
    <CompModal/>
      
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={fecharModal}
      contentLabel="Modal de exemplo"
    >
      <h2>Olá</h2>
      <button onClick={fecharModal}>Fechar</button>
      <div>Eu sou uma modal</div>
    </Modal>
  </div>)
    
    
  };

  function abrirModal() {
    setIsOpen(true);
  }

  

  // Função que fecha a modal
  function fecharModal() {
    setIsOpen(false);
  }

  const listaItens= ()=>{

    return(
      <div>
        <ul>
         <li>xxx</li>
        </ul>
      </div>
    );
    
  };
  
  return (
    <div className="container-div">
      <button onClick={abrirModal}>Salvar</button>
      <Modal
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0 ,0, 0.8)'
        },
        content: {
          border: '1px solid green',
          background: '#839cff',
          borderRadius: '20px',
          padding: '20px',
          width:'20%',
          color: 'white'
        }
      }}
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Modal de exemplo"
      >
       
        
      
        <div>Iten(s) salvo(s) com sucesso!</div>
        <div className="container-st">
          <ul>
        <ol>
         
         { conteudo.map( (conteudo) => <li>{ conteudo }</li>) }
        </ol>
        </ul>
        <br/>
        
      </div>
      <p>
        <button onClick={fecharModal}>Fechar</button>
        </p>
      </Modal>
    </div>
    
  );
};

export default BtSalvar;