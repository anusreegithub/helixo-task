import express from "express";
import {
  createTimer,
  deleteTimer,
  getTimerById,
  getTimersByStoreId,
  updateTimer,
} from "../controller/timer.controller.js";

const router = express.Router();

router.post("/", createTimer);
router.get("/store/:storeId", getTimersByStoreId);
router.get("/:id", getTimerById);
router.put("/:id", updateTimer);
router.delete("/:id", deleteTimer);

export default router;
