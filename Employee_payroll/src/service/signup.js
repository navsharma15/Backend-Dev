import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import { usercreate } from "../model/user.model.js";

async function usersignup(req, res) {
  console.log("usersignup", req.body);

  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        message: "All fields are required",
        data: null
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const data = usercreate(name, email, hashPassword);

    if (!data) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "User not created",
        data: null
      });
    }

    return res.status(StatusCodes.CREATED).json({
      code: StatusCodes.CREATED,
      message: "User created successfully",
      data: data
    });

  } catch (error) {
    console.log("Signup error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Internal Server Error",
      data: null
    });
  }
}

export default usersignup;