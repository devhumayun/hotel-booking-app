import { auth } from "@/auth";
import ProfileInfo from "@/components/user/ProfileInfo";
import PastBooking from "@/components/user/booking/PastBooking";
import UpcomingBooking from "@/components/user/booking/UpcomingBooking";
import { getHotelByUserId } from "@/database/hotel-quries";
import { getUserByEmail } from "@/database/user-quries";
import { redirect } from "next/navigation";

const BookingsPage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const loggedInUser = await getUserByEmail(session?.user?.email);

  const bookings = await getHotelByUserId(loggedInUser?.id);

  const pastBooking = bookings.filter((booking) => {
    return new Date().getTime() > new Date(booking.checkin).getTime();
  });

  const upcomingBooking = bookings.filter((booking) => {
    return new Date().getTime() < new Date(booking.checkin).getTime();
  });

  return (
    <>
      <section className="mt-[100px]">
        <div className="container">
          <ProfileInfo />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PastBooking bookings={pastBooking} />
            <UpcomingBooking bookings={upcomingBooking} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingsPage;
