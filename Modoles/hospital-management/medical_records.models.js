import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
      },
      doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
      },
      hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
      },
      diagnosis: {
        type: String,
        required: true
      },
      symptoms: [String], // Array of symptoms
      prescriptions: [
        {
          medicine: String,
          dosage: String,
          duration: String
        }
      ],
      treatment: {
        procedure: String,
        notes: String
      },
      visitDate: {
        type: Date,
        default: Date.now
      },
      followUpDate: {
        type: Date
      }
}, { timestamps: true });

export const medicalRecord = mongoose.model(
  "medicalRecord",
  medicalRecordSchema
);
