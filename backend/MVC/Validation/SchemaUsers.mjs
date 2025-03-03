import zod from 'zod';

export const UserSchema = zod.object({
    first_name: zod.string({
        required_error: 'El nombre es requerido',
        invalid_type_error: 'El nombre debe ser un string'
    }).min(1),

    last_name: zod.string({
        required_error: 'El apellido es requerido',
        invalid_type_error: 'El apellido debe ser un string'
    }).min(1),

    email: zod.string({
        required_error: 'El email es requerido',
        invalid_type_error: 'El email debe ser un string'
    }).email(),

    password: zod.string({
        required_error: 'La contraseña es requerida',
        invalid_type_error: 'La contraseña debe ser un string'
    }).min(8)
})

// Function que valida la creacion de un usuario
export function validateUser(user) {
    return UserSchema.safeParse(user);
}