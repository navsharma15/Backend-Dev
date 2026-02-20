import {StatusCodes} from "http-status-pro-js"
import  {deleteuser} from "../model/user.model.js"
import dotenv from "dotenv"
dotenv.config()

 function userdeleteservices(req, res){
    try {
        let{id} = req.user;
        let data = deleteuser(id)
        if(!data){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
                code:StatusCodes.INTERNAL_SERVER_ERROR.code,
                message:StatusCodes.INTERNAL_SERVER_ERROR.message,
                data:null
            })
            return;
        }
      
        
    } catch (error) {
        console.log("usreloginservice", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
            code:StatusCodes.INTERNAL_SERVER_ERROR.code,
            message:StatusCodes.INTERNAL_SERVER_ERROR.message,
            data:null
        })
       
       
    }
 }

 export default userdeleteservices;