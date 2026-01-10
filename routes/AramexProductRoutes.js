import express from "express";
import AramexProducts from "../models/AramexProducts.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await AramexProducts.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
