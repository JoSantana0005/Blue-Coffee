import { ReadJson } from "../Components/utilis.mjs";
const capsulas = ReadJson("../Capsulas.json");

export class CapsulasModels{
    
    // Obtener todas las capsulas de cafe

    static async getAll(){
        return capsulas;
    }

    // Obtener una capsula de cafe por su precio

    static async getByPrice({price_capsula}){
        if(price_capsula){
            return capsulas.filter(capsula =>
                capsula.price_capsula === parseInt(price_capsula)
            )
        }
        else{
            console.log("No se ha encontrado ninguna capsula de cafe con ese precio");
            return null;
        }
    }

    // Obtener una capsula de cafe por su nombre
    
    static async getByName({name_capsula}){
        if(name_capsula){
            return capsulas.find(capsula =>
                capsula.name_capsula === name_capsula
            )
        }
        else{
            console.log("No se ha encontrado ninguna capsula de cafe con ese nombre");
            return null;
        }
    }

    // Obtener una capsula de cafe por su cantidad de gramos
    
    static async getByGram({cant_gram}){
        if(cant_gram){
            return capsulas.filter(capsula =>
                capsula.cant_gram === parseInt(cant_gram)
            )
        }
        else{
            console.log("No se ha encontrado ninguna capsula de cafe con esa cantidad de gramos");
            return null;
        }
    }

    // Obtener una capsula de cafe por su tipo
    
    static async getByType({type_capsula}){
        if(type_capsula){
            return capsulas.filter(capsula =>
                capsula.type_capsula.includes(type_capsula.toLowerCase())
            )
        }
        else{
            console.log("No se ha encontrado ninguna capsula de cafe con ese tipo");
            return null;
        }
    }

    // Obtener una capsula de cafe por su id

    static async getByID({id}){
        if(id){
            return capsulas.find(capsula =>
                capsula.id === parseInt(id)
            )
        }
        else{
            console.log("No se ha encontrado ninguna capsula de cafe con ese id");
            return null;
        }
    }

    // Crear una capsula de cafe
   
    static async CreateCapsula({capsula}){
        if(capsula){
            const NewCapsula = {
                id: capsulas.length + 1,
                ...capsula
            }
            capsulas.push(NewCapsula);
            console.log("Se ha creado una capsula de cafe exitosamente");
            return capsulas;
        }
        else{
            console.log("No se ha podido crear la capsula de cafe");
            return null;
        }
    }

    // Actualizar una capsula de cafe segun su id
    
    static async UpdateCapsula({id, capsula}){
        if(id && capsula){
            const index = capsulas.findIndex(capsula =>
                capsula.id === parseInt(id)
            )
            if(index !== -1){
                const UpdateCapsula = {
                    ...capsulas[index],
                    ...capsula
                }
                capsulas[index] = UpdateCapsula;
                console.log("Se ha actualizado la capsula de cafe exitosamente");
                return capsulas;
            }
            
            else{
                console.log("No se ha encontrado ninguna capsula de cafe con ese id");
                return null;
            }
        }
    }
}