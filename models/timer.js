import mongoose from "mongoose";

const TimerSchema = new mongoose.Schema(
  {
    storeId: { type: String, required: true },
    productId: { type: String, required: true },

    name: { type: String },
    description: { type: String },

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

    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Timer", TimerSchema);
