import mongoose from "mongoose";
import { stringify } from "postcss";
import { data } from "react-router-dom";

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  role: { type: String, enum: ["admin", "employee"], require: true },
  profileImage: { type: String },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
export default User;
