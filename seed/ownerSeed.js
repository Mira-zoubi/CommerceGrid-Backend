import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

dotenv.config();

const seedOwner = async () => {
  try {
    await mongoose.connect(process.env.CONN);

    const ownerEmail = "owner@mirapanel.com";

    const ownerExists = await User.findOne({ email: ownerEmail });
    if (ownerExists) {
      console.log("Owner already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("Owner@123", 10);

    await User.create({
      name: "Company Owner",
      email: ownerEmail,
      password: hashedPassword,
      role: "owner",
    });

    console.log(" Owner created successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedOwner();