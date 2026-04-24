
import mongoose from "mongoose";
let userSchema = new mongoose.Schema({
    name:{
        type:String,
        maxLength:20,
        minLength:3,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minLength:6,
        maxLength:10,
        required:true
    }
})
let userModel = mongoose.model("user",userSchema);
export default userModel;

