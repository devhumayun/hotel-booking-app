"use server";

import { signIn } from "@/auth";
import { hotelModel } from "@/models/hotels-model";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

// user login with redeantails
export const login = async (fromData) => {
  try {
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
    const reviews = await reviewModel.find({ hotelId: hotelId }).lean();
    return replaceMongoIdInArray(reviews);
  } catch (error) {
    console.error(error);
  }
};

// get rating for a hotel
export const getRatingsForAHotel = async (hotelId) => {
  try {
    const ratings = await ratingModel.find({ hotelId: hotelId }).lean();
    return replaceMongoIdInArray(ratings);
  } catch (error) {
    console.error(error);
  }
};

// get hotels by id
export const getHotelByid = async (id) => {
  try {
    const hotelData = await hotelModel.findById(id).lean();
    console.log(hotelData);

    return replaceMongoIdInObject(hotelData);
  } catch (error) {
    console.error(error);
  }
};
