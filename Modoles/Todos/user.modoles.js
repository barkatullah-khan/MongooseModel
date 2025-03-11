import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String, // Capitalized
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String, // Capitalized
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String, // Capitalized
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
