import mongoose from "mongoose";
import TodoSchema from "./todoSchema.js";

const userSchema = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  id: {type: String}
});

const UserSchema = mongoose.model("UserSchema", userSchema);
export default UserSchema;
