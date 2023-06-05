import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import inicio from './pages/inicio'
import Login from "./pages/login";
import more from './pages/more'
import cadastro from './pages/cadastro'
import estatistica from './pages/estatistica'


const Pilha = createStackNavigator()


export default function Routers({navigation}){
    return(
        <NavigationContainer>
            <Pilha.Navigator>

                <Pilha.Screen
                    name="cadastro"
                    component={cadastro}
                    options={{ title: 'Login Lindomar' }}
                />
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login Lindomar' }}
                />
                {/* <Pilha.Screen
                    name="NavBar"
                    component={NavBar}
                    options={{ title: false,headerShown: false}}
                /> */}

                <Pilha.Screen
                    name="inicio"
                    component={inicio}
                    options={{ title: 'Login Lindomar' }}
                />
                 <Pilha.Screen
                    name="more"
                    component={more}
                    options={{ title: 'Home Lindomar' }}
                />
                <Pilha.Screen
                    name="estatistica"
                    component={estatistica}
                    options={{ title: 'Home Lindomar' }}
                />
          

                

            </Pilha.Navigator>
        </NavigationContainer>
    )
}
