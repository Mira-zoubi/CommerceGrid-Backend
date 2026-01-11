import express from "express";
import Cart from "../models/Cart.js";

import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();

/* ================= GET MY CART ================= */
router.get("/", protect, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
    // If no cart yet, return empty structure
    if (!cart) return res.json({ user: req.user._id, items: [] });

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch cart" });
  }
});

/* ================= ADD ITEM TO CART =================
   body: { productId, productModel }
*/
router.post("/items", protect, async (req, res) => {
  const { productId, productModel } = req.body;

  if (!productId || !productModel) {
    return res.status(400).json({ message: "productId and productModel are required" });
  }

  if (!["AramexProducts", "AppleProducts", "AmazonProducts"].includes(productModel)) {
    return res.status(400).json({ message: "Invalid productModel" });
  }

  try {
    // Ensure user has ONE cart (create if missing)
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }

    // If item already exists (same product + model) -> increment quantity
    const existingIndex = cart.items.findIndex(
      (i) => i.product.toString() === productId && i.productModel === productModel
    );

    if (existingIndex !== -1) {
      cart.items[existingIndex].quantity += 1;
    } else {
      cart.items.push({
        product: productId,
        productModel,
        quantity: 1,
      });
    }

    await cart.save();

    // Return populated cart
    const populatedCart = await Cart.findOne({ user: req.user._id }).populate("items.product");
    res.status(201).json(populatedCart);
  } catch (err) {
    res.status(500).json({ message: "Failed to add to cart" });
  }
});

/* ================= UPDATE QUANTITY =================
   PUT /api/cart/items/:itemId
   body: { quantity }
*/
router.put("/items/:itemId", protect, async (req, res) => {
  const { quantity } = req.body;

  if (!quantity || quantity < 1) {
    return res.status(400).json({ message: "Quantity must be >= 1" });
  }

  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.items.id(req.params.itemId);
    if (!item) return res.status(404).json({ message: "Item not found" });

    item.quantity = quantity;
    await cart.save();

    const populatedCart = await Cart.findOne({ user: req.user._id }).populate("items.product");
    res.json(populatedCart);
  } catch (err) {
    res.status(500).json({ message: "Failed to update quantity" });
  }
});

/* ================= DELETE ITEM ================= */
router.delete("/items/:itemId", protect, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.items.id(req.params.itemId);
    if (!item) return res.status(404).json({ message: "Item not found" });

    item.deleteOne();
    await cart.save();

    const populatedCart = await Cart.findOne({ user: req.user._id }).populate("items.product");
    res.json(populatedCart);
  } catch (err) {
    res.status(500).json({ message: "Failed to delete item" });
  }
});

export default router;
