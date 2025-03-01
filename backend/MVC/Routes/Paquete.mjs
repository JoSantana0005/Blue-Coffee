import { Router } from "express";
import { ProductController } from "../Controller/Product.mjs";
import { ProductModels } from "../Models/Product.mjs";

const router = Router();
const productcontroller = new ProductController({ ProductModels: ProductModels});
export const ProductRouter = router;

ProductRouter.get("/", productcontroller);