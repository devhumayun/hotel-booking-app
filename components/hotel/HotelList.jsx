import { getAllHotels } from "@/database/hotel-quries";
import { dbConnect } from "@/services/mongo-connection";
import HotelCard from "./HotelCard";

const HotelList = async () => {
  await dbConnect()
  const hotels = await getAllHotels()
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {
          hotels ? (
            hotels.map((hotel) => (<HotelCard key={hotel.id} hotel={hotel} />))
          ) : (<p>No hotel available</p>)
        }

      </div>
    </div >
  );
};

export default HotelList;
