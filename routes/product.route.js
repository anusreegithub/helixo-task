import express from "express";
import { getProductData } from "../controller/product.controller.js";

const productRouter = express.Router();

productRouter.get("/", getProductData);

export default productRouter;
