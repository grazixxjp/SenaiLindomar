import React, { Component, useState } from 'react';

const TituloF = () => {
    const [contador, setContador] = useState(0)
    const [nome, setNome] = useState('')

    const frase = () =>{
        if (contador > 10){
            return "Bateu a mtea"
        }
        else if (contador < 0){
            return  "Abaixo da meta"
        }
        frase()
    }

    const cor = () =>{
        if (contador > 10){
            return "Bateu a mtea"
        }
        else if (contador < 0){
            return  "Abaixo da meta"
        }
        else return 'azul'
    }

    return ( 
        <>
        <h1 className='verde'>euuuuuuu{cor()}</h1>
        <h1>O Resultado é: {frase()}</h1>
        <button onClick={()=>(contador+1)}>Aumentar</button>
        <button onClick={()=>(contador-1)}>Diminuir</button>
        </>
     );
}
 
export default TituloF;