import Timer from "../models/timer.js";

export const createTimer = async (req, res) => {
  try {
    const storeId = process.env.SHOPIFY_SHOP;

    const timer = new Timer({
      storeId,
      productId: req.body.productId,
      name: req.body.name,
      description: req.body.description,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      style: {
        size: req.body.style.size,
        position: req.body.style.position,
        color: req.body.style.color || "#000000",
      },
      urgencyTrigger: req.body.urgencyTrigger,
    });

    await timer.save();
    res.status(201).json(timer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTimersByStore = async (req, res) => {
  try {
    const { storeDomain, productId } = req.params;
    const timer = await Timer.findOne({
      storeId: storeDomain,
      productId: { $regex: productId + "$" },
    });

    if (!timer) {
      return res.status(404).json({ error: "Timer not found" });
    }

    res.json(timer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTimerById = async (req, res) => {
  try {
    const numericId = req.params.numericId;
    const timers = await Timer.find({
      productId: { $regex: numericId + "$" },
    });

    if (!timers || timers.length === 0) {
      return res.status(404).json({ error: "No matching timers found" });
    }

    res.status(200).json(timers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTimer = async (req, res) => {
  try {
    const timers = await Timer.find();
    res.json(timers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deactivateTimer = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTimer = await Timer.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!updatedTimer)
      return res.status(404).json({ error: "Timer not found" });

    res
      .status(200)
      .json({ message: "Timer deactivated successfully", timer: updatedTimer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
