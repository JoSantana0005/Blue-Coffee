import { ReadJson } from "../Components/utilis.mjs";
const paquetes = ReadJson("../Paquetes.json");
export class PaquetesModels{
    // Obtener todos los paquetes de cafe
    static async getAll(){
        return paquetes
    }

    // Obtener un paquete de cafe por su precio
    static async getByPrice({price}){
        if(price){
            return paquetes.filter(paquete =>
                paquete.price === parseInt(price)
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
        if(id){
            return paquetes.find(paquete =>
                paquete.id === parseInt(id)
            )
        }
        else{
            console.log("No se ha encontrado ningun paquete de cafe con ese id");
            return null;
        }
    }

    // Obtener un paquete de cafe por su tipo
    static async getByType({type}){
        if(type){
            return paquetes.filter(paquete =>
                paquete.type.includes(type.toLowerCase())
            )
        }
        else{
            console.log("No se ha encontrado ningun paquete de cafe con ese tipo");
        }
    }

    // Obtener un paquete de cafe por su cantidad de gramo
    static async getByGram({cant_gram}){
        if(cant_gram){
            return paquetes.filter(paquete =>
                paquete.cant_gram === parseInt(cant_gram)
            ) 
        }
        else{
            console.log("No se ha encontrado ningun paquete de cafe con esa cantidad de gramos");
            return null;
        }
    }

    // Obtener un paquete de cafe segun su id y precio
    
    static async getByIDPrice({id, price}){
        if(id && price){
            return paquetes.find(paquete =>
                paquete.id === parseInt(id) && paquete.price === parseInt(price)
            )
        }
        else{
            console.log("No se ha encontrado ningun paquete de cafe con ese id y precio");
            return null;
        }
    }

    // Obtener un paquete de cafe segun su id y cantidad de gramos
    
    static async getByIDGram({id, cant_gram}){
        if(id && cant_gram){
            return paquetes.find(paquete =>
                paquete.id === parseInt(id) && paquete.cant_gram === parseInt(cant_gram)
            )
        }
        else{
            console.log("No se ha encontrado ningun paquete de cafe con ese id y cantidad de gramos");
            return null;
        }
    }

    // Crear un paquete de cafe
    static async createPaquete({paquete}){
        if(paquete){
            const newPaquete = {
                id: paquetes.length + 1,
                ...paquete
            }
            paquetes.push(newPaquete);
            console.log("Se ha creado el paquete exitosamente");
            return paquetes;
        }
        else{
            console.log("El paquete esta mal validado")
            return null;
        }
    }

    // Actualizar un paquete de cafe por su id
    static async updatePaquete({id, paquete}){
        if(id && paquete){
            const index = paquetes.findIndex(paquete =>
                paquete.id === parseInt(id)
            )
            if(index !== -1){
                const updatePaquete = {
                    ...paquetes[index],
                    ...paquete
                }
                paquete[index] = updatePaquete;
                console.log("Informacion actualizada del paquete");
                return paquetes;
            }
            else{
                console.log("No se ha encontrado ningun paquete de cafe con ese id");
                return null;
            }
        }
    }
}