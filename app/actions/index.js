"use server";

import { signIn } from "@/auth";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import { dbConnect } from "@/services/mongo-connection";
import { replaceMongoIdInArray } from "@/utils/data-util";

// user login with redeantails
export const login = async (fromData) => {
  try {
    await dbConnect();

    const response = await signIn("credentials", {
      email: fromData.get("email"),
      password: fromData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

// get reviews for a hotel
export const getReviewsForAHotel = async (hotelId) => {
  try {
    await dbConnect();
    const reviews = await reviewModel.find({ hotelId: hotelId }).lean();
    return replaceMongoIdInArray(reviews);
  } catch (error) {
    console.error(error);
  }
};

// get rating for a hotel
export const getRatingsForAHotel = async (hotelId) => {
  try {
    await dbConnect();
    const ratings = await ratingModel.find({ hotelId: hotelId }).lean();
    return replaceMongoIdInArray(ratings);
  } catch (error) {
    console.error(error);
  }
};
