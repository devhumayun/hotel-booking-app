import BookingCard from "./BookingCard";

const PastBooking = ({ bookings }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🕛️ Past Bookings</h2>

      {
        bookings.length > 0 ?
          bookings?.map((booking) => (
            <div key={booking.id} className="bg-[#F6F3E9] p-4 rounded-md">
              <BookingCard booking={booking} />
            </div>

          ))
          : (
            <div className="bg-[#F6F3E9] p-4 rounded-md">
              <p>Hi, You have no Past Booking(s)</p>
            </div>
          )
      }
    </div>
  );
};

export default PastBooking;
