import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./src/router/user.router.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Payroll Employee Backend Running 🚀");
});

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});