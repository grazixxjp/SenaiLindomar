import React, { Component, useState, useRef } from 'react';
import Botao from '../components/botao';

const testando = useRef();
useEffect(() => {
    prevCountRef.current = count;
  });

const Login = ({logar, cadastrar}) => {
    //ARTERNATIVA PARA FORMULÁRIO - FORMIR
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
  
    return (
        <>
        <input type='text' placeholder='Usuario' onChange={e => setUsuario(e.target.value)} />
        <input type='password' placeholder='Senha' onChange={e => setSenha(e.target.value)} />
        <Botao titulo='Logar' cor='#f00' onClick={() => logar(usuario, senha)} />
        <Botao titulo='Cadastrar' onClick={() => cadastrar(usuario, senha)} />
        </>
    );
}
 
export default Login;
