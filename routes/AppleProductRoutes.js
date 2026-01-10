import express from "express";
import AppleProducts from "../models/AppleProducts.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await AppleProducts.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
