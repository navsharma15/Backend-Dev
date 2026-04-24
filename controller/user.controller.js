import userModel from "../model/user.model.js"
import httpStatus from "http-status-pro-js"
export let getAllUser = async(req,res)=>{
    try{
        const users = await userModel.find();
    }catch(err){
        console.log(err);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:"Internal server error"})
    }
}