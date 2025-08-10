import express from "express";
import {
  createTimer,
  deactivateTimer,
  getTimerById,
  getTimersByStore,
  updateTimer,
} from "../controller/timer.controller.js";

const timerRouter = express.Router();

timerRouter.post("/", createTimer);
timerRouter.get("/:storeDomain/:productId", getTimersByStore);
timerRouter.get("/:numericId", getTimerById);
timerRouter.put("/:id", updateTimer);
timerRouter.patch("/:id/deactivate", deactivateTimer);

export default timerRouter;
