import dbLocal from "db-local";
import cryton from "node:crypto";
import bcrypt from "bcrypt";
const { Schema } = new dbLocal({path: './MVC/Users.json'});

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
            const FindUsers = Users.findOne({user: user.first_name});
            if(FindUsers){
                console.log("El usuario ya existe");
                return null;
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
    static async Login({ email, password}){

    }
}