import { getHotelById } from "@/database/hotel-quries";
import { dayDifference } from "@/utils/data-util";

const BookingCard = async ({ booking }) => {

    const hotelData = await getHotelById(booking.hotelId)
    const days = dayDifference(booking?.checkin, booking?.checkout)
    const totalCost = ((hotelData?.highRate + hotelData?.lowRate) / 2) * days

    return (
        <div className="flex justify-between items-center ">
            <div>
                <h3 className="text-xl font-semibold">{hotelData?.name}</h3>
                <div className="text-sm text-gray-600 my-4">
                    <p>Check In: {booking.checkin}</p>
                    <p>Check Out: {booking.checkout}</p>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-right">${totalCost}</h3>
                <p className="text-sm text-gray-600">${(hotelData?.highRate + hotelData?.lowRate) / 2} per night x {days} days</p>
            </div>
        </div>
    )
}

export default BookingCard
