import mongoose, { Mongoose, model } from "mongoose";

const userSchema= new mongoose.Schema({
   
    email:{type:String},
    password:{type:String},
    cpassword:{type:String}
    // firstname:{type:String},
    // lastname:{type:String}
   
})

export default mongoose.model.user || mongoose.model('users',userSchema)