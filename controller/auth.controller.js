import user from "../model/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export let register = async(req,res)=>{
    try{
        let {username,email,password} = req.body;
        let user = await user.create({username,email,password});
        return res.status(201).json({message:"User created successfully",user});
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}


export let login = async(req,res)=>{
    try{
        let {email,password} = req.body;
        let user = await user.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        if(user.password !== password){
            return res.status(401).json({message:"Invalid password"});
        }
        return res.status(200).json({message:"User logged in successfully",user});
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}