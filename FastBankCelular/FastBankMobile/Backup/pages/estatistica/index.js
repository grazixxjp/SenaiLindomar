import React, { useState, useEffect } from 'react';
import styles from './styles'
import { View, Text, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Delete({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />
      <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.button}>
        <Text style={styles.text}>Sign in with Facebook</Text>
      </LinearGradient>
    </View>
        </View>
    )
}