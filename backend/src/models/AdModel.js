import mongoose from "mongoose";

const AdSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    images: [
      {
        url: {
          type: String,
        },
        public_id: {
          type: String,
        },
      },
    ],
    status: {
      type: String,
      default: "active",
      enum: ["active", "sold", "archived"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AdModel = mongoose.model("AdModel", AdSchema);

export default AdModel;
