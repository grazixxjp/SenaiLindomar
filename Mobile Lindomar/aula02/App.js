import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-web';
import React, { useState } from 'react';

function dobro(n){
  return n
}

export default function Banana() {

  console.log(dobro())

  return (
    <View style={estilo.container}>
      <View style={estilo.caixa1}>
        <Text>Insira um Numero:</Text>
        <input type="text1" />
        <Button title="ENVIAR" onPress={() => {dobro()}} />
      </View>
      <View style={estilo.caixa2}>
      <Text>Insira outro Numero:</Text>
        <input type="text" />
        <Button title="ENVIAR" onPress={() => {dobro()}} />
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#DDD",
  },
  caixa1:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF0",
  },
  caixa2:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F",
  }, 
  txt1:{
    color:'#00F',
    fontSize: 30,
    fontWeight:'bold',
  },
  txt2:{
    color:'#0FF',
    fontSize: 30,
    fontWeight:'bold',
  }

})





// function mostrar(){
//   const nome = 'grazielly'
//   const sobreNome = 'santos'
// }

// const mensagem = ()=>{
//   Alert.alert('VOCÊ É BAITOLA')
// } 

// export default function Banana() {

//   const [red, setRed] = useState(0)
//   const [green, setGreen] = useState(0)
//   const [blue, setBlue] = useState(0)

//   return (
//     <View style={{ backgroundColor: 'rgb('+red+','+green+','+blue+')', flex: 1 }}>
//       <View style={{padding:20}}>
//         <Button title="RED" onPress={() => {setRed(red+10)}} />
//       </View>
//       <View style={{padding:20}}>
//         <Button title="GREEN" onPress={() => {setGreen(green+10)}} />
//       </View>
//       <View style={{padding:20}}>
//         <Button title="BLUE" onPress={() => {setBlue(blue+10)}} />
//       </View>
//     </View>
//   );
// }

// export default function App() {

//   var v1 = 10;
//   var v2 = 20;    
//   var total = v1 + v2;
//   console.log(total)

//   const [cor, setCor] = useState('white')
//   console.log(cor)

//   return (
//       <View style={{
//       backgroundColor: cor, 
//       flex:1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       }}>
//         <Text style={{
//           color: '#fff', 
//           fontSize: 30,}}>Site in {cor}</Text>
//           <Button 
//             title='red'
//             onPress={()=>setCor('red')}
//           />
//           <Button 
//             title='blue'
//             onPress={()=>setCor('blue')}
//           />
//            <Button 
//             title='green' 
//             onPress={()=>setCor('green',mostrar())}
//           />
              
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
