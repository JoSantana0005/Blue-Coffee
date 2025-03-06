import zod from 'zod';
export const SchemaPaquetes = zod.object({
    name: zod.string({
        required_error: "El nombre es requerido",
        invalid_type_error: "El nombre debe ser un string"
    }).isNullable(),

    description: zod.string({
        required_error: "La descripcion es requerida",
        invalid_type_error: "La descripcion debe ser un string"
    }).isOptional(),

    price: zod.number({
        required_error: "El precio es requerido",
        invalid_type_error: "El precio debe ser un number"
    }).positive(),

    cant_gram: zod.number({
        required_error: "La cantidad de gramos es requerida",
        invalid_type_error: "La cantidad de gramos debe ser un number"
    }).int().positive(),

    type: zod.enum(["Molido", "Grano"]).array({
        required_error: "El tipo es requerido",
        invalid_type_error: "El tipo debe ser un array de strings"
    }),

    imagen: zod.string({
        required_error: "La imagen es requerida",
        invalid_type_error: "La imagen debe ser un string"
    }).url()
})

// Function para validar la creacion de un paquete
export function validatePaquete(paquete){
    return SchemaPaquetes.safeParse(paquete);
}

// function para validar la actualizacion de un paquete
export function validatePaqueteUpdate(paquete){
    return SchemaPaquetes.partial().safeParse(paquete);
}