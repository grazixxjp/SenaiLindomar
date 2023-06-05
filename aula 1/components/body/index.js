import {Button, View } from 'react-native';
import React, {useState} from 'react';
import Login from '../login/index.js';

import styles from './styles.js'


export default function Body({navigation}) {

  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={()=> navigation.navigate(Login)}
      />  
    </View>
    );
}
