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

 export const getfactura = async (req: Express.Request, res: Express.Response) =>{
     try { 
          const idProductos = req.params.idProductos;
          const productos = (idProductos);

          if (productos.length === 0) {
               return res.status(404).json({ error: 'No se encontraron productos' });
             }
             
             //Calcular el total de la factura sumando los precios de los productos
             const total = productos.((acc, producto) => acc + producto.precio, 0);

             const factura = {
               idProductos: idProductos,
               productos: productos,
               total: total
             };
              // Devolver el resultado final de la factura
               res.json(factura);

               function obtenerProductosPorIds(idProductos){
                    const productos = [
                         { id: 1, nombre: 'Producto 1', precio: 10 },
                         { id: 2, nombre: 'Producto 2', precio: 15 },
                         { id: 3, nombre: 'Producto 3', precio: 20 }
                       ];
                       const ids = idProductos.split(',');

                       return productos.filter(producto => ids.includes(producto.id.toString()));
               }
     } catch (error) {
         return res.status(400).json({msg: "no se encuentra el precio del producto",error})
     }
 }



