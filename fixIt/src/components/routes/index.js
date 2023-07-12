import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Cadastro from '../screens/cadastro/index';
import Login from '../screens/login/index';
import Cadastro from '../screens/cadastro';
import Home from '../screens/home';
import ElementLojasProximas from '../screens/lojasProximas'
import ElementEditarBike from '../screens/editarBike'
import ElementVisualizarBike from '../screens/viewBike'




const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
           
             <Stack.Screen
                name="Login"
                component={ElementVisualizarBike}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                }}
            />
              <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                }}
            />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                }}
            />
              <Stack.Screen
                name="ElementLojasProximas"
                component={ElementLojasProximas}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                }}
            />
              <Stack.Screen
                name="ElementEditarBike"
                component={ElementEditarBike}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                }}
            />
              <Stack.Screen
                name="ElementVisualizarBike"
                component={ElementVisualizarBike}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}