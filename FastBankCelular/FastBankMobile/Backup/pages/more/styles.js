import { StyleSheet, Dimensions } from "react-native";
import { inline } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFAFA',
        display: 'flex',

 
    },
    container1:{
        alignItems: 'left',
        justifyContent: 'left',
        display: 'flex',
        width: '100%',
        padding: '35px',
    },
    textoCabecalho: {
        padding: 32,
        fontSize: 15,
        color: 'black',
        alignItems: 'left',
        justifyContent: 'left',
        display: 'flex',
    },
    opcoes:{
        display: 'flex',
        flexDirection: 'row',
        width: 400, 
        padding: '10px',
        alignContent: 'space-around',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 20,

    },
    financeiro:{
        backgroundColor: '#D9D9D9',
        borderRadius: '35px',
        width: 40, 
        height: 40,
        display: 'flex',
        justifyContent: 'space-around',

    },
    campo1:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
 
    
    },
    imagem:{
        width: 250,
        height: 150,
        borderRadius: 20,
        marginLeft: 50,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',

    },
    pagamento:{
        width: 50,
        height: 40,
        justifyContent: 'flex-start',
        display: 'flex',
        alignItems: 'flex-start',

    },
})

export default styles