import express from "express";
import usersignup from "../service/signup.js";
let userrouter = express.Router();
import userloggingservice from "../service/user.logging.js";
import  loginmid  from '../midd/logging.js'
import auth from "../auth/auth.js";
import userdeleteservices from "../service/user.deleteservices.js";

userrouter.post("/signup", usersignup);
userrouter.get("/login", loginmid, userloggingservice);
userrouter.delete("/", auth,userdeleteservices )


export default userrouter