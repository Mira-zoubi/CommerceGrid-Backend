import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "items.productModel", // dynamic reference
    },
    productModel: {
      type: String,
      required: true,
      enum: ["AramexProducts", "AppleProducts", "AmazonProducts"],
    },
    quantity: {
      type: Number,
      default: 1,
      min: 1,
    },
  },
  { _id: true } // keep _id for each item (needed for edit/delete)
);

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // ✅ ONE cart per user
    },
    items: [cartItemSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
