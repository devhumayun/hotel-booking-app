import { getAllHotels } from "@/database/hotel-quries";
import { dbConnect } from "@/services/mongo-connection";
import HotelCard from "./HotelCard";

const HotelList = async ({ destination, checkin, checkout, category }) => {
  await dbConnect()
  const hotels = await getAllHotels(destination, checkin, checkout, category)
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {
          hotels.length > 0 ? (
            hotels.map((hotel) => (<HotelCard key={hotel.id} hotel={hotel} checkin={checkin} checkout={checkout} />))
          ) : (<div className="bg-slate-200 p-4 border-[#003912] border-2 rounded-md ">
            <h2 className="text-lg mb-1">No hotels found this search result 😐</h2>
            <p>Try to change your search query!</p>
          </div>)
        }

      </div>
    </div >
  );
};

export default HotelList;
