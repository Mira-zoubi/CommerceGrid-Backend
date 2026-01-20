import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import AramexProductRoutes from "./routes/AramexProductRoutes.js";
import AppleProductRoutes from "./routes/AppleProductRoutes.js";
import AmazonProductRoutes from "./routes/AmazonProductRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cartRoutes from "./routes/CartRoutes.js";



dotenv.config();
const app = express();
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://commerce-grid.vercel.app"
  ]
}));


const PORT = process.env.PORT;
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/aramex-products", AramexProductRoutes);
app.use("/api/apple-products", AppleProductRoutes);
app.use("/api/amazon-products", AmazonProductRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);

mongoose
  .connect(process.env.CONN)
  .then(() => {
    app.listen(PORT, () => {
      console.log("listening successfully");
    });
  })
  .catch((err) => {
    console.log(err);
  });
  // "https://commerce-grid.vercel.app" 