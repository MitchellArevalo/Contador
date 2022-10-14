import React from 'react'
import "../Botones/botones.css"


export const Botones = () => {
  let value = 0;
  let counter = document.getElementById('counter'); 
  function Aumentar() {
    
      value += 1
      counter.innerHTML = value
    
  }
  
  function Disminuir() {
    
    if(value > 0){
      value += -1
      counter.innerHTML = value
    }
      
  }

  function Reset() {

    value = 0
    counter.innerHTML = 0

  }

  return (
    <div>
        <button onClick={Disminuir}>Disminuir</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Aumentar}>Aumentar</button>
    </div>
  )
}
