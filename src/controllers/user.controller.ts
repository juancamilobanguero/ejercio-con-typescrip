
import  Express  from "express";
import mongoose from "mongoose";
import userModel from "../models/user.models";

export const getUser = (req: Express.Request, res: Express.Response) => {
    return res.status(201).json({msg: 'Usuario creado'})
} 

export const getUsers = (req: Express.Request, res: Express.Response) =>{
    try {

        const result = userModel.find() //los usuarios existentes
        return res.status(200).json({result})
        
    } catch (error) {
        return res.status(400).json({msg: "EL usuario ya esta existente",error})
    }
}

export const createUser = async (req: Express.Request, res: Express.Response) =>{
   try {
    let newUser = req.body
    const userCreated = await userModel.create(newUser)

    if(userCreated) return res.status(201).json({msg: "usuarios creado"})
    throw {msg: "ha ocurrido un error"}
    
   } catch (error) {
    console.log(error)
    return res.status(400).json({msg: 'ha ocurrio un error',error})
   }
}

export const updateUser = async (req: Express.Request, res: Express.Response) =>{

    // {
    //     id:
    //     dataToUpdate:{}
    // }
    try {
        let {dataToUpdate, _id} = req.body
        const updatedData = await userModel.findByIdAndUpdate(_id, dataToUpdate)

        return res.status(200).json({msg: "usuario actualizado"})
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "ha ocurrio un error", error})
    }
}


 