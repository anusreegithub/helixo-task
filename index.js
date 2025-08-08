import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/dbConnect.js";
import router from "./routes/timer.route.js";

dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/timer", router);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
