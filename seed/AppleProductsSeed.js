import mongoose from "mongoose";
import dotenv from "dotenv";
import AppleProducts from "../models/AppleProducts.js";

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.CONN);

    await AppleProducts.deleteMany();

    await AppleProducts.insertMany([
      {
        title: "AirPods Pro (2nd Generation)",
        description:
          "Active Noise Cancellation with Transparency mode and personalized spatial audio.",
        image: "/uploads/apple1.jpg",
        price: 249,
        category: "Audio",
        variant: "White",
        badge: "Best Seller",
        stock: 75,
      },

      {
        title: "AirPods Max",
        description:
          "High-fidelity audio with Active Noise Cancellation and premium over-ear design.",
        image: "/uploads/apple2.jpg",
        price: 549,
        category: "Audio",
        variant: "Pink",
        badge: "Premium",
        stock: 40,
      },

      {
        title: "MacBook Air M2",
        description:
          "Ultra-thin laptop powered by Apple M2 chip with all-day battery life.",
        image: "/uploads/apple3.jpg",
        price: 1199,
        category: "Laptops",
        variant: "13-inch · Pink",
        badge: "Trending",
        stock: 25,
      },

      {
        title: "iPhone 17 Pro",
        description:
          "Pro-grade camera system with A19 chip and stunning Super Retina display.",
        image: "/uploads/apple4.jpg",
        price: 1399,
        category: "Smartphones",
        variant: "Silver",
        badge: "New",
        stock: 60,
      },
    ]);

    console.log("🍎 Apple products seeded successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();

