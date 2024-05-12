import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
  userId: {
    type: ObjectId,
    requried: true,
  },
  hotelId: {
    type: ObjectId,
    requried: true,
  },
  checkin: {
    type: String,
    requried: true,
  },
  checkout: {
    type: String,
    requried: true,
  },
});

export const bookingModel =
  mongoose.models.bookings ?? mongoose.model("bookings", bookingSchema);
