import {Router} from "express";
import { CapsulasControllers } from "../Controller/capsulas.mjs";
import { CapsulasModels } from "../Models/capsula.mjs";

const router = Router();
export const capsulascontroller = new CapsulasControllers({CapsulasModels: CapsulasModels});
export const CapsulasRouter = router;

/// GET
CapsulasRouter.get("/", capsulascontroller.getAll);
CapsulasRouter.get("/price/:price_capsula", capsulascontroller.getByPrice);
CapsulasRouter.get("/name/:name_capsula", capsulascontroller.getByName);
CapsulasRouter.get("/grams/:cant_gram", capsulascontroller.getByGrams);
CapsulasRouter.get("/type/:type_capsula", capsulascontroller.getByType);
CapsulasRouter.get("/:id", capsulascontroller.getByID);

/// POST
CapsulasRouter.post("/", capsulascontroller.create);

/// PATCH
CapsulasRouter.patch("/:id", capsulascontroller.updateCapsula);