import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const reviewgSchema = new Schema({
  hotelId: {
    type: ObjectId,
    requried: true,
  },
  userId: {
    type: ObjectId,
    requried: true,
  },
  rating: {
    type: Number,
    requried: true,
  },
});

export const reviewModel =
  mongoose.models.reviews ?? mongoose.model("reviews", reviewgSchema);
