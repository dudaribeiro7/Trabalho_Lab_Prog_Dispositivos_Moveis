import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Cadastro from '../screens/cadastro/index';
import Login from '../screens/login/index';


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}