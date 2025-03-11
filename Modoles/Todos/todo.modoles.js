import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String, // Capitalized
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, // Correct reference
      ref: "User",
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId, // Correct reference
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
