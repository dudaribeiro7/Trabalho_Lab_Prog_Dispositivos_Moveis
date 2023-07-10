import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Cadastro from '../screens/cadastro/index';
import Login from '../screens/login/index';
import Cadastro from '../screens/cadastro';
import Home from '../screens/home';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
           
             <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}