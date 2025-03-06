import { Router } from "express";
import { PaqueteController } from "../Controller/Paquetes.mjs";
import { PaquetesModels } from "../Models/Paquete.mjs";

const router = Router();
export const paquetecontroller = new PaqueteController({PaquetesModels: PaquetesModels});
export const ProductRouter = router;


///  GET
ProductRouter.get("/", paquetecontroller.getAll);
ProductRouter.get("/price/:price", paquetecontroller.getByPrice);
ProductRouter.get("/name/:name", paquetecontroller.getByName);
ProductRouter.get("/type/:type", paquetecontroller.getByType);
ProductRouter.get("/grams/:cant_gram", paquetecontroller.getByGram);
ProductRouter.get("/:id", paquetecontroller.getByID);
ProductRouter.get("/:id&:grams", paquetecontroller.getByIDAndGram);
ProductRouter.get("/:id&:price", paquetecontroller.getByIDAndPrice);

/// POST
ProductRouter.post("/", paquetecontroller.CreatePaquete);

/// PATCH
ProductRouter.patch("/:id", paquetecontroller.UpdatePaquete);