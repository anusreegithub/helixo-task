import mongoose from "mongoose";

const TimerSchema = new mongoose.Schema(
  {
    storeId: { type: String, required: true }, // Unique store identifier (Shopify domain or ID)
    productId: { type: String, required: true }, // Target product for the timer

    name: { type: String, required: true }, // Timer name shown in admin panel
    description: { type: String }, // Promotional message or details

    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },

    style: {
      color: { type: String, default: "#000000" },
      size: {
        type: String,
        enum: ["Small", "Medium", "Large"],
        default: "Medium",
      },
      position: {
        type: String,
        enum: ["Top", "Bottom"],
        default: "Top",
      },
    },

    urgencyTrigger: {
      minutesBeforeEnd: { type: Number, default: 5 },
      type: {
        type: String,
        enum: ["Color pulse", "Banner", "Flash"],
        default: "Color pulse",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Timer", TimerSchema);
