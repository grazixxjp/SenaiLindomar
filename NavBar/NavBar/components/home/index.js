import {View, Text, Button} from 'react-native'
import styles from './styles'

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.texto1}>
                Home
            </Text>
            <Button
                title='DeleteX'
                onPress={()=>navigation.navigate('Delete')}
            />
        </View>
    )
}