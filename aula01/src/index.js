import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Botao from './components/botao';
import botaoExtra from './components/botaoExtra';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Titulo />
    <Titulof/> */}
    {/* <Botao></Botao>
    <botaoExtra titulo="Extra"/>
    <Botao name="Clicar" cor='red'/>
    <Botao name="Sair" cor='blue'/>
    <Botao name="Logar" cor='green'/> */}
    <App /> 
  </React.StrictMode>
);


// for (let index = 0; index < 5; index){
//   console.log(index)
// }

// //Dicionario

const aluno = {
    nome: 'Livia',
    idade: 41,
    estudar(){
      console.log(this)
    }
}
aluno.estudar();

// console.log(aluno['nome'])

//console.log das cidades numa lista html(li)

//COPMO CLONAR OBJETO 
aluno.nome = 'Tejero'
console.log(aluno)


// const sala = [
//   {
//     nome:"Michel"
//   },
//   {
//     nome:"Gustavo"
//   },
//   aluno
// ];

// console.log(aluno.nome)
// aluno.nome = "Tejero"
// aluno.idade = 17
// console.log(aluno.nome)
// console.log(aluno.idade)

//Pegar dado especifico
// console.log(aluno.nome)

// const cidades = ['Campinas', 'Sumaré', 'Hortolandia']
// //for em java
// //x é o index 
// // ` é para print
// // let é um atributo
// for (let x in cidades){
//     console.log(`<li>${cidades[x]}</li>`)
// }

// const endereço = {
//   logradouro: 'Av. Amoreiras',
//   numero: 123,
//   cidade: 'Campinas'
// }

// const {cidade: rua, logradouro, numero, cidade} = endereço
// console.log(rua)
// console.log(numero)
// console.log(logradouro)


// const a = [2,4,6]
// const b = [1,3,5]

// // const unificar = a.concat(b)

// const unificar = [...a, ...b]
// console.log(unificar)