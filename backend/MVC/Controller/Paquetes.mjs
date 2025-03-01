import { validatePaquete, validatePaqueteUpdate } from "../Validation/SchemaPaquete.mjs";
export class ProductController{
    constructor({ProductModels}){
        this.ProductModels = ProductModels;
    }

    // Obtener todos los paquetes de cafe
    
    getAll = async ( req, res) => {
        
        try{
            const paquetes = await this.ProductModels.getALL();
            return res.status(200).json(paquetes);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }
    
    // Obtener un paquete de cafe por su precio
    
    getByPrice = async ( req, res) => {
        
        try{
            const {price} = req.params;
            const paquetePrice = await this.ProductModels.getByPrice({price});
            return res.status(200).json(paquetePrice);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }

    // Obtener un paquete de cafe por su nombre
    
    getByName = async ( req, res) => {
        
        try{
            const {name} = req.params;
            const paqueteName = await this.ProductModels.getByName({name});
            return res.status(200).json(paqueteName);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }

    // Obtener un paquete de cafe por su tipo

    getByType = async ( req, res ) =>{
        
        try{
            const {type} = req.params;
            const paqueteType = await this.ProductModels.getByType({type});
            return res.status(200).json(paqueteType);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }

    // Obtener un paquete de cafe por su cantidad de gramo

    getByGram = async ( req, res ) =>{
        
        const {gram} = req.params;
        try{
            const paqueteGram = await this.ProductModels.getByGram({gram});
            return res.status(200).json(paqueteGram);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }

    // Obtener un paquete de cafe por su id
    
    getByID = async ( req, res ) =>{
        
        const params = req.params;
        try{
            const PaqueteID = await this.ProductModels.getByID(params);
            return res.status(200).json(PaqueteID);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }

    // Crear un paquete de cafe

    CreatePaquete = async ( req, res) => {
        try{
            const result = validatePaquete(req.body);
            if(!result.success){
                return res.status(400).json(result.error);
            }
            else{
                const NewPaquetes = await this.ProductModels.CreatePaquete({paquete: result.data});
                return res.status(201).json(NewPaquetes);
            }
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
        
    }

    // Actualizar un paquete de cafe
    UpdatePaquete = async ( req, res ) => {
        try{
            const {id} = req.params;
            const result = validatePaqueteUpdate(req.body);
            if(!result.success){
                return res.status(400).json(result.error);
            }
            else{
                const UpdatePaquete = await this.ProductModels.UpdatePaquete({id, paquete: result.data});
                return res.status(200).json(UpdatePaquete);
            }
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }
}