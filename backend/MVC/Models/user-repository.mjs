import dbLocal from "db-local";
import cryton from "node:crypto";
import bcrypt from "bcryptjs";
const { Schema } = new dbLocal({path: './MVC/users.json'});

const Users = Schema('Users', {
    _id: { type: 'number',  primaryKey: true },
    first_name: { type: 'string', required: true },
    last_name: { type: 'string', required: true },
    email: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
})

export class UserRepository {
    static async create({user}){
        if(user){
            const name = user.first_name;
            const FindUsers = await Users.findOne({first_name: name});
            if(FindUsers){
                console.log("El usuario ya existe");
                return [{error: "El usuario ya existe"}];
            }
            else{
                const id = cryton.randomUUID();
                const hash = bcrypt.hashSync(user.password, 10);
                Users.create({
                    _id: id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    password: hash
                }).save();
                return id;
            }
        }
        else{
            console.log("No se ha podido crear el usuario");
            return null;
        }

    }
    static async Login({ user }){
        if(user){
            const AccessUser = await Users.findOne({email: user.email});
            if(!AccessUser){
                return [{error: "El usuario no existe"}];
            }
            const password = bcrypt.compareSync(user.password, AccessUser.password);
            if(!password){
                return [{error: "La contraseña es incorrecta"}];
            }
            const {password: _ , ...rest} = AccessUser
            return rest;
                
        }else{
            return [{error: "No se ha podido acceder al usuario"}];
        }
    }
}