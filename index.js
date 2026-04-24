import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userrouter from "./routers/user.router.js";


import logger from "./logger/log.js";


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userrouter);

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Database connected successfully");

}).catch((error) => {
    logger.error(` error ${new Date().toISOString()}  ${error.message}`);
    console.log(error);
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);

})