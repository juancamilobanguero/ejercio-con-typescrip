import { Router } from "express";
import User from "./user.routes"
import Product from "./product.routes"


const router = Router()

// rutas del api 

// rutas del usuario
router.use("/user", User )
//rutas de los productos 
router.use("/products", Product)


export default router