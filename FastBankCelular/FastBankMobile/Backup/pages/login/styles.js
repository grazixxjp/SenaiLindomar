import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#white',
        flex: 1,

    },
    figura:{
        width: 195,
        height:33,
        borderRadius: 15,
        padding: 10,
        backgroundColor: '#3A0CA3',
        justifyContent: 'center',
        alignItems: 'center', 
        display: 'flex',
        shadowColor: 'black',
        position: 'absolute',

    },
    texto:{
        alignItems: 'center', 
        justifyContent:'center',
        direction: 'flex-direction',
        color: 'white',
        display: 'flex',
        fontWeight: 'bold',
  
    }
})

export default styles