//definimos la url de nuestro backend
export const urlBase = "http:// 192.168.3.176:3000"; //si me conecto a otra red, cambia la ip
export const login = `${urlBase}/user/login`;
export const getMaterias = `${urlBase}/user/getMateriaById/:dni`;
//restarian las demas url
