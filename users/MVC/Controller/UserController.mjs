import { validateUser, validateUserLogin } from "../Validation/SchemaUsers.mjs";
export class UserController {
    constructor({ UserRepository}){
        this.UserRepository = UserRepository;
    }

    // Funcion para crear un usuario
    register = async ( req , res ) =>{
        const result = validateUser(req.body);
        try{
            if(!result.success){
                return res.status(400).json({
                    error: result.error.format()
                })
            }
            const user = await this.UserRepository.create({user: result.data});
            if(user){
                return res.status(200).json({
                    message: "Usuario creado correctamente",
                    user
                })
            }
        }
        catch(error){
            console.log(error);
            return res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    }
    // Funcion para logear un usuario
    login = async ( req, res) =>{
        const { email , password} = req.body;
        const result = validateUserLogin(req.body);
        try{
            if(!result.success){
                return res.status(400).json({
                    error: result.error.format()
                })
            }
            const user = await this.UserRepository.Login({user: result.data});
            if(user){
                return res.status(200).json({
                    message: "Usuario Logeado correctamente",
                    user
                })
            }
            else{
                return res.status(400).json({
                    message: "Error al logear el usuario"
                })
            }
        }
        catch(error){
            console.log(error);
            return res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    }
}