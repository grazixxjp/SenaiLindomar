import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Body from './components/body'
import Login from "./components/login"

const Pilha = createStackNavigator()

export default function Rotas() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="Body"
                    component={Body}
                    options={{ title: 'Tela Body' }}
                />
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Tela Login' }}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}