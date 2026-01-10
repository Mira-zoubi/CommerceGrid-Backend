import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AramexProductRoutes from "./routes/AramexProductRoutes.js";
import AppleProductRoutes from "./routes/AppleProductRoutes.js";
import cors from "cors";

 
dotenv.config();
const app=express();
const PORT=process.env.PORT;

 // ✅ ENABLE CORS
app.use(cors({
  origin: "http://localhost:5179"
}));

app.use("/uploads", express.static("uploads"));

app.use("/api/aramex-products", AramexProductRoutes);
app.use("/api/apple-products", AppleProductRoutes);

mongoose.connect(process.env.CONN)
.then((result)=>{
    app.listen(PORT, ()=>{
        console.log("listening successfully");
    })
})
.catch((err)=>{
    console.log(err)
})