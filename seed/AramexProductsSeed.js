import mongoose from "mongoose";
import dotenv from "dotenv";
import AramexProducts from "../models/AramexProducts.js";
 
dotenv.config();
 
async function seed() {
  try {
    await mongoose.connect(process.env.CONN);
 
    await AramexProducts.deleteMany();
 
    await AramexProducts.insertMany([
      {
  title: "Cherry Lip Oil",
  description: "Honey-infused lip oil with a glossy finish.",
  image: "/uploads/aramex/product1.jpg",
  price: 10,
  category: "Cosmetics",
  variant: "Cherry",
  badge: "Popular",
  stock: 120
},

     {
  title: "Cherry Night Perfume",
  description: "Bold cherry-scented fragrance with a rich, elegant aroma.",
  image: "/uploads/aramex/product2.jpg",
  price: 18,
  category: "Fragrance",
  variant: "Cherry",
  badge: "New",
  stock: 80
},

     {
  title: "Rose Velvet Lip Tint",
  description: "Soft matte lip tint with a smooth velvet finish.",
  image: "/uploads/aramex/product3.jpg",
  price: 14,
  category: "Cosmetics",
  variant: "Rose",
  badge: "Best Seller",
  stock: 150
},

    {
  title: "Hydrating Gel Cream",
  description: "Lightweight moisturizing gel cream for daily skin hydration.",
  image: "/uploads/aramex/product4.jpg",
  price: 16,
  category: "Skincare",
  variant: "Gel Cream",
  badge: "Trending",
  stock: 140
},

      {
  title: "Peach Blush Tint",
  description: "Lightweight liquid blush for a natural rosy glow.",
  image: "/uploads/aramex/product5.jpg",
  price: 13,
  category: "Cosmetics",
  variant: "Peach",
  badge: "Fresh",
  stock: 110
},

   {
  title: "Rose Brightening Serum",
  description: "Lightweight facial serum for hydration and skin glow.",
  image: "/uploads/aramex/product6.jpg",
  price: 19,
  category: "Skincare",
  variant: "Rose",
  badge: "Recommended",
  stock: 95
},

    ]);
 
    console.log(" Aramex products seeded successfully");
    process.exit();
  } catch (err) {
    console.error( err);
    process.exit(1);
  }
}
 
seed();