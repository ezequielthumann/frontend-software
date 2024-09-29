import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/login"
import Singup from "../screens/singup"
import TabScreens from "./tabs"
export default StackScreens = () => {
    const Stack = createNativeStackNavigator();
    const opciones = {headersShow:false}

    return (
        <Stack.Navigator>
            <Stack.Screen component={Login} name='login' options={opciones}/>
            <Stack.Screen component={Singup} name='crearCuenta' options={opciones}/>
            <Stack.Screen component={TabScreens} name='tabs' options={opciones}/>
        </Stack.Navigator>
    )
}


//mostrar la panntalla de logi y singup todo lo oque no mestre deberia esrar aca ejemplo un boton de recuperar cuneta