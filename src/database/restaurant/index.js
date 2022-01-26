import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    mapLocation: { type: String, required: true },
    cuisine: [String],
    restaurantTimings: String,
    phone: String,
    restaurantReviewValue:Number,
    deliveryReviewValue:Number,
    deliveryReviewCount:Number,
    restaurantReviewCount:Number,
    website: String,
    popularDishes: [String],
    averageCost: Number,
    amenities: [String],
    menuImages: {
      type: mongoose.Types.ObjectId,
      ref: "Images",
    },
    menu: {
      type: mongoose.Types.ObjectId,
      ref: "Menus",
    },
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Reviews" }],
    photos: { type: mongoose.Types.ObjectId, ref: "Images" },
    isOff:Boolean,
    isPro:Boolean,
    phone:String
  },
  {
    timestamps: true,
  }
);

export const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);
