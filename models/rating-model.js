import mongoose, { Schema } from "mongoose";

const ratingSchema = new Schema({
  hotelId: {
    type: ObjecrId,
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

export const ratingModel =
  mongoose.models.ratings ?? mongoose.model("ratings", ratingSchema);
