const { Schema, model } = require("mongoose");

const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    collaborators: [],
  },
  { timestamps: true }
);

module.exports = model("ToDo", todoSchema);
