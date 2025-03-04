import { validatePaquete, validatePaqueteUpdate } from "../Validation/SchemaPaquete.mjs";
export class PaqueteController{
    
    constructor({PaquetesModels}){
        this.PaquetesModels = PaquetesModels;
    }

    // Obtener todos los paquetes de cafe
    
    getAll = async ( req, res) => {
        
        try{
            const paquetes = await this.PaquetesModels.getAll();
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
            const paquetePrice = await this.PaquetesModels.getByPrice({price});
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
            const paqueteName = await this.PaquetesModels.getByName({name});
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
            const paqueteType = await this.PaquetesModels.getByType({type});
            return res.status(200).json(paqueteType);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }

    // Obtener un paquete de cafe por su cantidad de gramo

    getByGram = async ( req, res ) =>{
        
        const {cant_gram} = req.params;
        try{
            const paqueteGram = await this.PaquetesModels.getByGram({cant_gram});
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
            const PaqueteID = await this.PaquetesModels.getByID(params);
            return res.status(200).json(PaqueteID);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }

    // Obtener un paquete de cafe segun su id y precio
    
    getByIDAndPrice = async ( req, res ) =>{
        const {id,price} = req.params;
        try{
            const PaqueteIDPrice = await this.PaquetesModels.getByIDPrice({id, price});
            return res.status(200).json(PaqueteIDPrice);
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    } 

    // Obtener un paquete de cafe por su id y cantidad de gramos
    getByIDAndGram = async ( req, res ) =>{
        const {id,cant_gram} = req.params;
        try{
            const PaqueteIDGram = await this.PaquetesModels.getByIDAndGram({id, cant_gram});
            return res.status(200).json(PaqueteIDGram);
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
                const NewPaquetes = await this.PaquetesModels.CreatePaquete({paquete: result.data});
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
                const UpdatePaquete = await this.PaquetesModels.UpdatePaquete({id, paquete: result.data});
                return res.status(200).json(UpdatePaquete);
            }
        }
        catch(err){
            console.log(`Ocurrio un error ${err}`);
            return res.status(500).json({error: err});
        }
    }
}