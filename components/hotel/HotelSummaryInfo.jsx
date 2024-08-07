import Link from "next/link";
import HotelRating from "./HotelRating";
import HotelReviews from "./HotelReviews";

const HotelSummaryInfo = ({ fromListPage, hotel, checkin, checkout }) => {

  let params = ""

  if (checkin && checkout) {
    params = `?checkin=${checkin}&checkout=${checkout}`
    console.log("booking page", params);
  }



  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2 className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}>{hotel?.name}</h2>
        <p>📍 {hotel?.city}</p>
        <div className="flex flex-col gap-2 my-4">
          <HotelRating id={hotel?.id} />
          <HotelReviews id={hotel?.id} />
          {hotel?.isBooked && <span className="font-bold">Sold out</span>}
        </div>
        <span className="text-[#000] bg-[#003912] bg-opacity-50 p-[6px] rounded-md">{hotel?.
          propertyCategory
        } star hotel</span>
      </div>

      <div className="flex flex-col gap-2 items-end justify-center">
        <h2 className="text-2xl font-bold text-right">${(hotel?.highRate + hotel?.lowRate) / 2}/night</h2>
        <p className=" text-right">Per Night for 1 Rooms</p>
        {
          fromListPage ? (<Link href={`/hotels/${hotel?.id}${params}`} className="btn-primary ">Details</Link>) : (<Link href={hotel?.isBooked ? "#" : `/hotels/${hotel?.id}/payment${params}`} className={hotel?.isBooked ? "btn-disabled" : "btn-primary"}>Book</Link>)
        }
        {/* {{ hotel?.id}/payment${params}`}
        className={hotel?.isBooked ? "btn-disabled" : "btn-primary"}>Book</Link>)
        } */}
      </div >
    </>
  );
};

export default HotelSummaryInfo;
