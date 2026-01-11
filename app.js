import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import AramexProductRoutes from "./routes/AramexProductRoutes.js";
import AppleProductRoutes from "./routes/AppleProductRoutes.js";
import AmazonProductRoutes from "./routes/AmazonProductRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5174",
  })
);


app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/aramex-products", AramexProductRoutes);
app.use("/api/apple-products", AppleProductRoutes);
app.use("/api/amazon-products", AmazonProductRoutes);


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
