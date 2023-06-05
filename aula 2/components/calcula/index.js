import { View, Text, Button } from "react-native";
import styles from './styles'
import Home from '../home';
import { TextInput } from "react-native-web";
import React, {useState, useEffect} from "react";
import Somar from "../somar/somar";

export default function Calcula({navigation}, props){
    const [valor1, setValor1] = useState()
    const [valor2, setValor2] = useState()
    const [cont, setCont] = useState(0)
    const [cont2, setCont2] = useState(0)
    
    useEffect(()=>{setCont2(cont2+1)},[cont])


    return(
        <View style={styles.container}>
            <Text style={styles.txt1}>Calcula</Text>
                
            <View>
                <Button 
                    title='Home'
                    onPress={()=>navigation.navigate(Home)}
                />
            </View>
            <View  style={styles.caixa2}>
                <TextInput
                placeholder="Digite um valor"
                onChangeText={setValor1}
                value = {valor1}
                />
            </View>
            <View  style={styles.caixa1}>
                <TextInput
                placeholder="Digite outro Valor"
                onChangeText={setValor2}
                value = {valor2}
                />
            </View>
            <View  style={styles.caixa3}>
                <Text style={styles.caixa1}>
                    Resultado:
                    </Text>
                    <Somar
                        valorA = {valor1}
                        valorB = {valor2}
                    />           
            </View>
            <View  style={styles.caixa2}>
                <Button
                    title='Contador 1'
                    onPress = {()=>{setCont(cont+1)}}
                />
                <View  style={styles.caixa2}>
                <Button
                    title='Contador 2'
                    onPress = {()=>{setCont2(cont2+1)}}
                  
                />
                </View>
    
                <View style={styles.caixa2}>
                    <Text style={styles.txt1}>Contador 1 = {cont}</Text>
                </View>
                <View style={styles.caixa2}>
                    <Text style={styles.txt1}>Contador 2 = {cont2}</Text>
                </View>
                </View>
        </View>
    )
}