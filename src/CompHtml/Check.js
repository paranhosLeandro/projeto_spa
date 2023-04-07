import React, { useState } from "react";
import BtSalvar from "../CompHeaderFooter/CompServices/BtSalvar";


import "./StyleCheck.css";

function Check(lista) {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const [pedidox, setPedidox] = useState('');
  let pedido = lista.pedido;
 // alert(lista.valor)
  const checkList = lista.valor;//["Apple", "Banana", "Tea", "Coffee"];

   // Generate string of checked items
   let checkedItems = checked.length
   ? checked.reduce((total, item) => {
     
       return total + ", " + item;
     })
   : "0";

  if (pedido=='p'&&pedidox==''){
   checkedItems = '0';
  }
  // Add/Remove checked item from list
  const handleCheck = (event) => {

    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setPedidox('b')
    setChecked(updatedList);
  };

 
   

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
      
  return (
    <div className="app">
      <div className="checkList">
        <div className="title">{lista.nome}</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="item-sel">
        {`Items Selecionados: ${checkedItems}`}
      </div>
      <BtSalvar valor={checked}/>
    </div>
  );
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);

export default Check;