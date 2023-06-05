import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles'
import { Feather, AntDesign, MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';
import NavBar from '../../nav';


export default function inicio({route, navigation }) {


    return (
       
        <View style={styles.container}>
            <View style={styles.seta}>
             </View>
      
             <TextInput
                style={styles.input}
                placeholder="search"
            />
       
        <View style={styles.opcoes}>
                <View style={styles.financeiro}>
                    <View style={styles.campo1}>
                    <MaterialCommunityIcons name="finance" size={42} color="black" />
                    </View>
                </View>
        
             
                <View style={styles.financeiro}>
                    <View style={styles.campo1}>
                    <AntDesign name="creditcard" size={42} color="black" />
                    </View>
                </View>

                <View style={styles.financeiro}>
                    <View style={styles.campo1}>
                    <Feather name="repeat" size={42} color="black" />
                    </View>
                </View>

                <View style={styles.financeiro}>
                    <View style={styles.campo1}>
                    <MaterialIcons name="attach-money" size={42} color="black" />
                    </View>
                </View>
            </View>
            </View>
    )
}

