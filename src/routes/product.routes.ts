import Express from "express";
import { Router } from "express";
import controllers from "../controllers";

const router = Router();
//crear un usuario
 router.post("/create", controllers.Product.createproductos);
 router.get("/obtener", controllers.Product.getName)
 router.get("/obtener1/:id",controllers.Product.getOne)
 router.get("/obtener/:id", controllers.factura.getfactura)
export default router