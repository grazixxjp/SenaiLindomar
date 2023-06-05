import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter',
    },
    container1: {
        flex: 0.2,
        width: '100%',
        alignItems: 'center',
        fontFamily: 'Inter',
    },
    container2: {
        flex: 1,
        padding: 3,
        width: '100%',
        alignItems: 'center',
        fontFamily: 'Inter',
    },
    texto1: {
        fontSize: 50,
        color: '#2E8B57',
        fontWeight: 'bold',
        fontFamily: 'Inter',
    },
    texto2: {
        fontSize: 30,
        fontFamily: 'Inter',
    },
    top: {
        flexDirection: 'column',
        backgroundColor: '#f00',
    },
    campo: {
        width: '70%',
        paddingBottom: 10,
        paddingTop: 10,
    },
    caixa1: {
        borderColor: '#222',
        borderWidth: 1,
        borderRadius: 8,
        color: '#555',
        height: 40,
        width: '100%',
        padding: 10,
    },
    foto0: {
        padding: 10,
        alignItems: 'center',
    },
    foto1: {
        width: 150,
        height: 150,
        backgroundColor: '#EEE9E9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    entrada: {
        paddingBottom: 10,
        paddingTop: 2,
        alignItems: 'center',
    },
    botao: {
        width: '30%',
        height: 50,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    btn: {
        width: 149,
        height: 33,
        borderRadius: 15,
        padding: 10,
        backgroundColor: '#3A0CA3',
        justifyContent: 'center',
        alignItems: 'center', 
        shadowColor: 'black',
    },
    btnContainer: {
        pading: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height:70,
        width: '100%',
    },
    sucesso: {
        fontSize: 10,
        color: '#0f0',
    },
    txtButton: {
        fontFamily: 'Inter',
        fontSize: 15,
        color: 'white',
    },
})

export default styles