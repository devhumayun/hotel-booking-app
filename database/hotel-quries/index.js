import { bookingModel } from "@/models/booking-model";
import { hotelModel } from "@/models/hotels-model";
import {
  isTimeInBetween,
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

export const getAllHotels = async (destination, checkin, checkout) => {
  const regex = new RegExp(destination, "i");

  const hotelsByDestination = await hotelModel
    .find({ city: { $regex: regex } })
    .lean();

  let allhotels = hotelsByDestination;

  if (checkin && checkout) {
    allhotels = await Promise.all(
      allhotels.map(async (hotel) => {
        const found = await findBooking(hotel._id, checkin, checkout);
        console.log(found);
        if (found) {
          hotel["isBooked"] = true;
        } else {
          hotel["isBooked"] = false;
        }
        return hotel;
      })
    );
  }

  return replaceMongoIdInArray(allhotels);
};

const findBooking = async (hotelId, checkin, checkout) => {
  const matches = await bookingModel
    .find({ hotelId: hotelId.toString() })
    .lean();

  const found = matches.find((match) => {
    return (
      isTimeInBetween(checkin, match.checkin, match.checkout) ||
      isTimeInBetween(checkout, match.checkin, match.checkout)
    );
  });
  return found;
};

// get hotels by id
export const getHotelById = async (hotelId, checkin, checkout) => {
  try {
    const hotelData = await hotelModel.findById(hotelId).lean();

    if (checkin && checkout) {
      const found = await findBooking(hotelData._id, checkin, checkout);
      if (found) {
        hotelData["isBooked"] = true;
      } else {
        hotelData["isBooked"] = false;
      }
    }

    return replaceMongoIdInObject(hotelData);
  } catch (error) {
    console.error(error);
  }
};
