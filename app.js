import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AramexProductRoutes from "./routes/AramexProductRoutes.js";
import cors from "cors";
<<<<<<< Updated upstream
=======
import authRoutes from "./routes/authRoutes.js";
import cartRoutes from "./routes/CartRoutes.js";
>>>>>>> Stashed changes

 
dotenv.config();
const app=express();
const PORT=process.env.PORT;

 // ✅ ENABLE CORS
app.use(cors({
<<<<<<< Updated upstream
  origin: "http://localhost:5179"
=======
  origin: "http://localhost:5173"
>>>>>>> Stashed changes
}));
app.use("/uploads", express.static("uploads"));
app.use("/api/aramex-products", AramexProductRoutes);
<<<<<<< Updated upstream
=======
app.use("/api/apple-products", AppleProductRoutes);
app.use("/api/amazon-products", AmazonProductRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
>>>>>>> Stashed changes

mongoose.connect(process.env.CONN)
.then((result)=>{
    app.listen(PORT, ()=>{
        console.log("listening successfully");
    })
})
.catch((err)=>{
    console.log(err)
})