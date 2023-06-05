import { View, Text, Button } from "react-native";
import styles from './styles'
import Calcula from '../calcula'

export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.txt1}>Login</Text>

            <View>
                <Button 
                    title='Calcula'
                    onPress={()=>navigation.navigate(Calcula)}
                />
            </View>
        </View>
    )
}