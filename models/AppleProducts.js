import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AppleProductsSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
    },

    variant: {
      type: String,
    },

    badge: {
      type: String, 
    },

    stock: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const AppleProducts = mongoose.model(
  "AppleProducts",
  AppleProductsSchema
);

export default AppleProducts;
