import mongoose from "mongoose";

export const connectDB = async () =>{

console.log(process.env.MONGO_URI)

    try{

        await mongoose.connect(process.env.MONGO_URI || "")
        console.log("BD is already connected")

        
    }catch(error){
        console.log("Error Connecting To DB",error);
    }
}