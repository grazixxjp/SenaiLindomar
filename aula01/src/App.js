import { useState } from 'react';
import './App.css';
import Login from './pages/login';
  
function App() {
  const [ocultar, setOcultar] = useState(false)
  const [usuarioLogado, setUsuarioLogado] = useState('')
  
  const logar = (usuario, senha) =>{
    alert("Login criado no app.js")
      if(usuario == 'admin' && senha == 'admin'){
        setUsuarioLogado(usuario)
        setOcultar(true)
      }
      else{
        setOcultar(false)
      }
    }
    const cadastrar = (usuario, senha) =>{
      alert(`${usuario} cadastrado com sucesso`)
    }
  return (
    <>
   {!ocultar? <Login logar={logar} cadastrar={cadastrar} /> : 
    <h1>Bem vindo {usuarioLogado}</h1>}
    </>
  );
}

export default App;
