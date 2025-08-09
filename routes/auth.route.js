import express from "express";
import { authentication } from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.get("/callback", authentication);

export default authRouter;
