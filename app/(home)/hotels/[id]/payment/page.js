import { auth } from "@/auth";
import PaymentForm from "@/components/payment/PaymentForm";
import { getHotelById } from "@/database/hotel-quries";
import { getUserByEmail } from "@/database/user-quries";
import { dayDifference } from "@/utils/data-util";
import { redirect } from "next/navigation";

const PaymentPage = async ({
  params: { id },
  searchParams: { checkin, checkout },
}) => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const userData = await getUserByEmail(session?.user?.email);
  const hotelData = await getHotelById(id);

  let cost = (hotelData?.highRate + hotelData?.lowRate) / 2;

  const hasCheckinCheckout = checkin && checkout;

  if (hasCheckinCheckout) {
    const days = dayDifference(checkin, checkout);
    cost = days * cost;
  }

  console.log(hotelData);

  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">
          You have picked <b>{hotelData?.name}</b> and base price is{" "}
          <b>${cost}</b> for {dayDifference(checkin, checkout)} day(s)
        </p>
        <PaymentForm
          userData={userData}
          checkin={checkin}
          checkout={checkout}
          hotelData={hotelData}
          totalCost={cost}
        />
      </div>
    </section>
  );
};

export default PaymentPage;
