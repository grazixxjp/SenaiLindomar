import React, { Component } from 'react';

const Botao = ({cor, titulo, color, onClick}) => {
   const ola = () =>{
    alert("OLÁ")    
    }

    return (
      <>
        <button onClick={onClick}
        style={{background: cor, color:color}}>
          {titulo}
        </button>
      </>
    );
  }
  
export default Botao;