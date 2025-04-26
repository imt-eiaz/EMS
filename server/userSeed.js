import User from "./models/User.js";
import bcrypt from "bcrypt";
import connectToDatabase from "./db/db.js";

const userRegister = async () => {
  connectToDatabase();
  try {
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUSer = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin",
    });

    await newUSer.save();
  } catch (error) {
    console.log(error);
  }
};

userRegister();
