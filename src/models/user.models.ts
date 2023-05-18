import mongoose, { Schema, version } from "mongoose";

//schema de la colleccion 

const User = new Schema({
    id: {type: String, required: true},
    username: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    active:{type: Boolean, default: false},
    dateBirth:{type: String, required: true},
    address:{type: String, required: true},
    paymentMethosds:{type: Array, default: []},
    phoneNumber:{type: String, required: true}
},{
    timestamps: true,
    versionKey: false
})
export default mongoose.model("user",User)
