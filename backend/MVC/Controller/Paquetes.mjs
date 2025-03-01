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
}