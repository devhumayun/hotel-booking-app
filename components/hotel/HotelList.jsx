import { getAllHotels } from "@/database/hotel-quries";
import { dbConnect } from "@/services/mongo-connection";
import HotelCard from "./HotelCard";

const HotelList = async () => {
  await dbConnect()
  const hotels = await getAllHotels()
  console.log(hotels);
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        <HotelCard />
      </div>
    </div>
  );
};

export default HotelList;
