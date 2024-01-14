import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  text: String,
  createdAt: Date,
  creator: String,
  isDone: {
    type: Boolean,
    default: false
  }
});

const TodoSchema = mongoose.model("TodoSchema", todoSchema);

export default TodoSchema;
