import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Rotas from  './Rotas'

const Pilha = createStackNavigator()

export default function App() {
    return (
       <Rotas></Rotas>
    )
}