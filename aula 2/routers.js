import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Entypo, FontAwesome, Feather} from "@expo/vector-icons";

import Home from "./components/home";
import Login from './components/login';
import Calcula from "./components/calcula";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import Delete from "./components/delete";

const Pilha = createStackNavigator()
const Nav = createBottomTabNavigator()

function NavBar(){
    return(
        <Nav.Navigator
            screenOptions={{
                tabBarStyle:{
                backgroundColor:'#000',
                borderTopColor: 'transparent',
                paddingBottom: 1,
                paddingTop: 1,

            },
            tabBarActiveTintColor:'#f0f',
            tabBarInactiveTintColor: '#555',
        
        }}
        >
        <Nav.Screen
            options={{
                headerShown: false,
                tabBarIcon: ({size, color})=(
                    <Feather name='home'/>
                )
            }}

        />

export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                 <Pilha.Screen
                    name="Calcula"
                    component={Calcula}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Create"
                    component={Create}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Read"
                    component={Read}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Delete"
                    component={Delete}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Update"
                    component={Update}
                    options={{ headerShown: false }}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}