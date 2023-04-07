import './styles.css';
import 'react-input-checkbox/lib/react-input-checkbox.min.css';
import React, { useState } from "react";
import { useEffect } from 'react';
import Check from '../../CompHtml/Check';
import {Axios} from 'axios';

const teste = async ()=>{
    const teste1 = await Axios.post('http://localhost:3000/Services', 

{ id: '154987', nome: 'Wesley Bruno', nascimento: 1992, })

   .then(() => alert('Usuário criado com sucesso!'))

   .catch(() => alert('Erro ao criar usuário!')) ;
   //alert('ok');
};

const exibeMsg = ()=>{

    //alert({Check});
    console.log(Check)


}

const CompServices = ({name = 'Sem nome'})=>{
   
    let nome='';
    let pedido='at'

    if (name==''||name==null)
    {
        nome='Heineken';
        pedido='';
    }else{
        nome=name
    };
    let arr = ['Camisa','Bone','Copo'];
   // let [nome,setNome] = useState('');
  //  setNome('Amstel');
    
    return (
        <main className="container-compServices">

        <div >
        Selecione os itens que deseja:
            <Check valor={arr} nome={nome} pedido={pedido}/>
        </div>
        </main>
    )
}

export default CompServices;