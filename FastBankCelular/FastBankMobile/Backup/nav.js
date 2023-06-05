import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons , Entypo, Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import inicio from './pages/inicio'
import Login from "./pages/login";
import more from './pages/more'
import cadastro from './pages/cadastro'
import estatistica from './pages/estatistica'
import { NavigationContainer } from "@react-navigation/native";

const Nav = createBottomTabNavigator()

function NavBar(){
    return(
        <NavigationContainer>

        <Nav.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor:'#white',
                    borderTopColor: 'transparent',
                    paddingBottom: 1,
                    paddingTop: 1,
                },
                tabBarActiveTintColor:'#f0f',
                tabBarInactiveTintColor: '#555',
            }}

            
        >
            <Nav.Screen name="more" component={more}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <AntDesign name="home" size={24} color={color} />
                    )
                }}
            />
            
            
            <Nav.Screen name="estatistica" component={estatistica}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Ionicons name="stats-chart-outline" size={24} color="black" />
                    )
                }}
            />

            <Nav.Screen name="inicio" component={inicio}
                options={{
                    headerShown: false,
                    tabBarIcon: ({size, color})=>(
                        <Ionicons name="stats-chart-outline" size={24} color="black" />
                    )
                }}
            />

  
        </Nav.Navigator>
        </NavigationContainer>
    )
}

export default NavBar;