import mongoose, { Schema, version } from "mongoose";

//schema de la colleccion 

const Product = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: String, required: true},
    categorias: {type: Array, default: []},
    description:{type: String, required: true},
    imagenes:{type: String, required: true},
},{
    timestamps: true,
    versionKey: false
})
export default mongoose.model("product",Product)


//schema de la colleccion 


