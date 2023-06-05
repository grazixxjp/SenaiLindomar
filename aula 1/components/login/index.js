import {Button, View } from 'react-native';
import React, {useState} from 'react';
import Body from '../body/index.js';
import Somar from '../add'

import styles from './styles.js'

export default function Login(navigation) {
  return (
    <View style={styles.container}>
      <View>
      <Button
        title="Voltar"
        onPress={()=>navigation.naviagte(Body)}
      />
    </View>
      <View>
        <Somar valorA={10} valorB={5}/>
      </View>
    </View>
    );
}
