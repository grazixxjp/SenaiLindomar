import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import styles from './styles'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import cartao from '../../assets/cartao.png'
import mastercard from '../../assets/mastercard.png'

export default function more({route,navigation }) {

    const [id, setId] = useState()
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [foto, setFoto] = useState()
    const [estrutura, setEstrutura] = useState()
    const [textoNome, setTextoNome] = useState()
    const [textoEmail, setTextoEmail] = useState()
    const [acesso, setAcesso] = useState()


    useEffect(() => {
        if (route.params != null) {
            setNome(route.params.name)
            setEmail(route.params.email)
            setFoto(route.params.image)
            //setAcesso(doc(db, "alunos", route.params.id))
            setEstrutura(!estrutura)
       }

    }, [])

    const repositorio = 'https://firebasestorage.googleapis.com/v0/b/crud-completo-8e995.appspot.com/o/images%2F'
    const media = '?alt=media'

    return (
       
        <View style={styles.container}>
            <View style={styles.seta}>
             </View>
            <Text style={styles.titulo}>Hi, User</Text>
      
        <View style={styles.imagem}>
            <Image style={styles.imagem} source={(cartao)}/>
        </View>
       

        <View style={styles.opcoes}>
                <View style={styles.financeiro}>
                    <View style={styles.campo1}>
                    <AntDesign name="scan1" size={24} color="black" />
                    </View>
                </View>
        
             
                <View style={styles.financeiro}>
                    <View style={styles.campo1}>
                    <AntDesign name="arrowdown" size={24} color="black" />
                    </View>
                </View>

                <View style={styles.financeiro}>
                    <View style={styles.campo1}>
                    <AntDesign name="arrowup" size={24} color="black" />
                    </View>
                </View>

                <View style={styles.financeiro}>
                    <View style={styles.campo1}>
                    <Feather name="menu" size={24} color="black" />
                    </View>
                </View>
            </View>

       

                <View>
                    <Text style={styles.BankCard}>Bank Cards</Text>
                 </View>

                 <View>
                 <Image style={styles.pagamento} source={(mastercard)}/>
                 <Text style={styles.Texto}>Mastercard</Text>
                        <p style={styles.Texto}> ****3975</p>
                 </View>

                 <View style={styles.Activity}>
                    <Text style={styles.Texto}>Last Activity</Text>
                 </View>

                 <View style={styles.atividade}>
                    <View style={styles.compras}>
                    <Feather name="shopping-bag" size={24} color="black" />
                        <Text style={styles.text1}>Shopping</Text>
                            <p style={styles.text2}>May 29, 2:21pm</p>
                    </View>
                    <View style={styles.compras}>
                    <Feather name="shopping-bag" size={24} color="black" />
                        <Text style={styles.text1}>Freelance Design</Text>
                            <p style={styles.text2}>May 29, 2:21pm</p>
                    </View>
                    <View style={styles.compras}>
                    <Feather  name="shopping-bag" size={24} color="black" />
                        <Text style={styles.text1}>Movie</Text>
                            <p style={styles.text2}> May 29, 2:21pm</p>
                    </View>
                </View>
            </View>
    )
}