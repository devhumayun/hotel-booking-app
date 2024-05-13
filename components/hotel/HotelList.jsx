import { getAllHotels } from "@/database/hotel-quries";
import { dbConnect } from "@/services/mongo-connection";
import HotelCard from "./HotelCard";

const HotelList = async ({ destination, checkin, checkout }) => {
  await dbConnect()
  const hotels = await getAllHotels(destination, checkin, checkout)
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {
          hotels ? (
            hotels.map((hotel) => (<HotelCard key={hotel.id} hotel={hotel} checkin={checkin} checkout={checkout} />))
          ) : (<p>No hotel available</p>)
        }

      </div>
    </div >
  );
};

export default HotelList;
