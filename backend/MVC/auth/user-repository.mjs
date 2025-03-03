import dbLocal from "db-local";
const { Schema } = new dbLocal({path: '../users.json'})

const Users = Schema('Users', {
    id: { type: 'number', autoIncrement: true, primaryKey: true },
    first_name: { type: 'string', required: true },
    last_name: { type: 'string', required: true },
    email: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
})

export class UserRepository {
    static async create({user}){
        

    }
    static async Login({ email, password}){

    }
}