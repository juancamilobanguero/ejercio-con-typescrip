import Express from "express";
import productModels from "../models/product.models";

export const createproductos = async (req: Express.Request, res: Express.Response) =>{
     try { 
         const  product = req.body;
         const products = await productModels.create(product)
         res.json(products)

     } catch (error) {
         return res.status(400).json({msg: "EL usuario ya esta existente",error})
     }
 }
 
 export const getName = async (req: Express.Request, res: Express.Response) =>{
     try { 
         const  getproduct = await productModels.find();
         res.json(getproduct)

     } catch (error) {
         return res.status(400).json({msg: "EL usuario ya esta existente",error})
     }
 }

 export const getOne = async (req: Express.Request, res: Express.Response) =>{
     try { 
         const  getproduct = await productModels.find();
         res.json(getproduct)

     } catch (error) {
         return res.status(400).json({msg: "EL usuario ya esta existente",error})
     }
 }

 