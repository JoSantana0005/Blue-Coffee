import zod from 'zod';
export const SchemaCapsula = zod.object({
    
    name_capsula: zod.string({
        required_error: "El nombre es requerido",
        invalid_type_error: "El nombre debe ser un string"
    }).isNullable(),

    description_capsula: zod.string({
        required_error: "La descripcion es requerida",
        invalid_type_error: "La descripcion debe ser un string"
    }).isOptional(),

    price_capsula: zod.number({
        required_error: "El precio es requerido",
        invalid_type_error: "El precio debe ser un number"
    }).positive(),

    grams_capsula: zod.number({
        required_error: "La cantidad de gramos es requerida",
        invalid_type_error: "La cantidad de gramos debe ser un number"
    }).int().positive(),

    type_capsula: zod.enum(["Molido", "Grano"]).array({
        required_error: "El tipo es requerido",
        invalid_type_error: "El tipo debe ser un array de strings"
    }),

    imagen_capsula: zod.string({
        required_error: "La imagen es requerida",
        invalid_type_error: "La imagen debe ser un string"
    }).url()

})

// Function para validar la creacion de un paquete
export function validateCapsula(capsula){
    return SchemaCapsula.safeParse(capsula);
}

// function para validar la actualizacion de un paquete
export function validateCapsulaUpdate(capsula){
    return SchemaCapsula.partial().safeParse(capsula);
}