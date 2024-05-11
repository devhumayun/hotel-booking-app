import { hotelModel } from "@/models/hotels-model";
import { replaceMongoIdInArray } from "@/utils/data-util";

export const getAllHotels = async () => {
  const hotels = await hotelModel.find().lean();
  return replaceMongoIdInArray(hotels);
};
