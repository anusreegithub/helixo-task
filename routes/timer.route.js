import express from "express";
import {
  createTimer,
  deactivateTimer,
  getTimerById,
  getTimersByStore,
  getTimer,
} from "../controller/timer.controller.js";

const timerRouter = express.Router();

timerRouter.post("/", createTimer);
timerRouter.get("/:storeDomain/:productId", getTimersByStore);
timerRouter.get("/:numericId", getTimerById);
timerRouter.get("/", getTimer);
timerRouter.patch("/:id/deactivate", deactivateTimer);

export default timerRouter;
