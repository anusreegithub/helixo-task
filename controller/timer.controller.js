import Timer from "../models/timer.js";

export const createTimer = async (req, res) => {
  try {
    const timer = new timer(req.body);
    await timer.save();
    res.status(201).json(timer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTimersByStoreId = async (req, res) => {
  try {
    const { storeId } = req.params;
    const timers = await Timer.find({ storeId });
    res.status(200).json(timers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTimerById = async (req, res) => {
  try {
    const { id } = req.params;
    const timer = await Timer.findById(id);
    if (!timer) return res.status(404).json({ error: "Timer not found" });
    res.status(200).json(timer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTimer = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTimer = await Timer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedTimer)
      return res.status(404).json({ error: "Timer not found" });
    res.status(200).json(updatedTimer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTimer = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTimer = await Timer.findByIdAndDelete(id);
    if (!deletedTimer)
      return res.status(404).json({ error: "Timer not found" });
    res.status(200).json({ message: "Timer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
