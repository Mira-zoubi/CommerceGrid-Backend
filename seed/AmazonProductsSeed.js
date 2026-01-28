import mongoose from "mongoose";
import dotenv from "dotenv";
import AmazonProducts from "../models/AmazonProducts.js";

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.CONN);

    await AmazonProducts.deleteMany();

    await AmazonProducts.insertMany([
      {
        title: "Smart LED Clock Speaker",
        description:
          "Minimal smart speaker with LED clock display, touch controls, and ambient lighting.",
        image: "/uploads/amazon1.jpg",
        price: 89,
        category: "Smart Home",
        variant: "White",
        badge: "Popular",
        stock: 120,
      },

      {
        title: "Eilik Interactive Robot",
        description:
          "AI-powered emotional companion robot that reacts to touch, sound, and interaction.",
        image: "/uploads/amazon2.jpg",
        price: 159,
        category: "Robotics",
        variant: "Pink & White",
        badge: "Trending",
        stock: 45,
      },

      {
        title: "Ergonomic Office Chair",
        description:
          "Soft cushioned office chair with adjustable height rolling wheels.",
        image: "/uploads/amazon3.jpg",
        price: 199,
        category: "Furniture",
        variant: "Cream",
        badge: "Best Seller",
        stock: 60,
      },

      {
        title: "Stanley Insulated Tumbler",
        description:
          "Large insulated tumbler with handle and straw, keeps drinks cold for hours.",
        image: "/uploads/amazon4.jpg",
        price: 45,
        category: "Lifestyle",
        variant: "Pink",
        badge: "Hot Deal",
        stock: 200,
      },

      {
        title: "Full-Length Standing Mirror",
        description:
          "Modern full-length mirror with sturdy stand, perfect for dressing rooms.",
        image: "/uploads/amazon5.jpg",
        price: 129,
        category: "Home Decor",
        variant: "Black Frame",
        badge: "Modern",
        stock: 35,
      },

      {
        title: "Yoga Mat with Carry Strap",
        description:
          "Non-slip yoga mat with cushioning support strap for workouts.",
        image: "/uploads/amazon6.jpg",
        price: 39,
        category: "Fitness",
        variant: "Pink & Grey",
        badge: "Fitness Pick",
        stock: 90,
      },
    ]);

    console.log("Amazon products seeded successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
