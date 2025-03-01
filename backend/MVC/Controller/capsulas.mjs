import { validateCapsula, validateCapsulaUpdate } from "../Validation/SchemaCapsula.mjs";
export class CapsulasControllers{
    
    constructor({CapsulasModels}){
        this.CapsulasModels = CapsulasModels;
    }

    // Obtener a todos los paquetes de cafe
    
    getAll = async ( req, res ) =>{
        try{
            const capsulas = await this.CapsulasModels.getAll();
            return res.status(200).json(capsulas);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }

    // Obtener una capsula de cafe por su precio
    
    getByPrice = async ( req, res ) =>{
        const {price_capsula} = req.params;
        try{
            const capsulaPrice = await this.CapsulasModels.getByPrice({price_capsula});
            return res.status(200).json(capsulaPrice);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }

    // Obtener una capsula de cafe por su nombre
    
    getByName = async ( req, res ) =>{
        const {name_capsula} = req.params;
        try{
            const capsulaName = await this.CapsulasModels.getByName({name_capsula});
            return res.status(200).json(capsulaName);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }

    // Obtener una capsula de cafe por su cantidad de gramos
    
    getByGrams = async ( req, res ) =>{
        const {cant_gram} = req.params;
        try{
            const capsulaGram = await this.CapsulasModels.getByGram({cant_gram});
            return res.status(200).json(capsulaGram);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }

    // Obtener una capsula de cafe por su tipo
    
    getByType = async ( req, res ) =>{
        const {type_capsula} = req.params;
        try{
            const capsulaType = await this.CapsulasModels.getByType({type_capsula});
            return res.status(200).json(capsulaType);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }

    // Obtener una capsula por su id
    
    getByID = async ( req, res ) =>{
        const {id} = req.params;
        try{
            const CapsulasID = await this.CapsulasModels.getByID({id});
            return res.status(200).json(CapsulasID);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }

    // Crear una capsula de cafe
    
    create = async ( req, res ) =>{
        const result = validateCapsula(req.body);
        try{
            if(!result.success){
                return res.status(500).json({error: result.error});
            }
            else{
                const NewCapsula = await this.CapsulasModels.create({capsula: result.data});
                return res.status(200).json(NewCapsula);
            }
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }

    // Actualizar una capsula de cafe
    
    updateCapsula = async ( req, res ) =>{
        const {id} = req.params;
        const result = validateCapsulaUpdate(req.body);
        try{
            const UpdateCapsula = await this.CapsulasModels.UpdateCapsula({id, capsula: result.data});
            return res.status(200).json(UpdateCapsula);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }
}