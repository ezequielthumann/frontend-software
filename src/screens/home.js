import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { getValueFor } from "../utils/storage";

export default Home = ({navigation}) =>{
    const [token,setToken]= useState();
    useEffect(()=>{
        const getToken =async () => {
            const token = await  getValueFor('token')
                setToken(token);

        };
        getToken();
    },[])//funcion=>arreglo dependencia
    return(
        <View>
            <Text>token</Text>
        </View>
    )
}


// generar un funcion que icupe el getmaterias
//se guarda en un data
//usar flatlist para lisstarlo
//crear cards para mostrar las materias 