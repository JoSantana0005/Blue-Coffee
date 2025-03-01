import { ReadJson } from "../Components/utilis.mjs";
const paquetes = ReadJson("./Paquetes.json");
export class ProductModels{
    // Obtener todos los paquetes de cafe
    static async getAll(){
        return paquetes
    }

    // Obtener un paquete de cafe por su precio
    static async getByPrice({price}){
        if(price){
            return paquetes.filter(paquete =>
                paquete.price === price
            )
        }
        else{
            console.log("No se ha encontrado ningun paquete de cafe con ese precio");
            return null;
        }
    }
    
    // Obtener un paquete de cafe por su nombre
    static async getByName({name}){
        if(name){
            return paquetes.find(paquete =>
                paquete.name === name
            )
        }
        else{
            console.log("No se ha encontrado ningun paquete de cafe con ese nombre");
            return null;
        }
    }

    // Obtener un paquete de cafe por su id
    static async getByID({id}){
        
    }
}