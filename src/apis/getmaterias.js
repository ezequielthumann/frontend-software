import { getMaterias } from "../config/urlapis";

export const obtenerMaterias  = async(token) =>{
    try {
        const response =await fetch(getMaterias,{
            method: "POST",
            headers: {"auth":token},
        });
        return await response.json();
    } catch (error) {
        console.log(error);    
    }
}