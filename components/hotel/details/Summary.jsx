import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = ({ hotel, checkin, checkout }) => {



  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummaryInfo hotel={hotel} checkin={checkin} checkout={checkout} source="details" />
      </div>
    </section>
  );
};

export default Summary;

