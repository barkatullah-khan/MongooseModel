import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zipCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    contact: {
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        lowercase: true,
      },
      website: {
        type: String,
      },
    },
    departments: [
      {
        name: {
          type: String,
          required: true,
        },
        headDoctor: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Doctor",
        },
      },
    ],
    availableDoctors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
      },
    ],
    totalBeds: {
      type: Number,
      required: true,
    },
    occupiedBeds: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const hospital = mongoose.model("hospital", hospitalSchema);
