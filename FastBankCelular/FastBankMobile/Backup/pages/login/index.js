import { View, Text, TouchableOpacity, Image } from 'react-native'
import {Fontisto} from '@expo/vector-icons'
import styles from './styles'

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
            <Image style={styles.tinyLogo}
                
            />
                <View style={styles.figura}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('inicio')}
                        >
                        <Text style={styles.texto}>login</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}