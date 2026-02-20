import jwt from "jsonwebtoken";
import {StatusCodes} from "http-status-pro-js"
import dotenv from "dotenv";
dotenv.config()
function auth(req, res, next){
    try{
        let authotication = req.headers.authotication;
        if(!authotication || authotication.startswith("Bearer ")){
            res.status(StatusCodes.BAD_REQUEST.code).json({
                code:StatusCodes.BAD_REQUEST
            })
        }
     let token = authotication.split(" ")[1]
     let user = jwt.verify(token, process.env.TOKEN)
     if(!user){
        res.status(StatusCodes.UNAUTHORIZED.code).json({
            code:StatusCodes.UNAUTHORIZED.code,
            message:StatusCodes.UNAUTHORIZED.message,
            data:null
        })
        return
     }

      req.user = user.id
        next()

    }catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
            code:StatusCodes.INTERNAL_SERVER_ERROR.code,
            message:StatusCodes.INTERNAL_SERVER_ERROR.message,
            data:null
        })
    }
}export default auth;