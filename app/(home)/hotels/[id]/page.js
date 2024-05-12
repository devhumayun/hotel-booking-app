import { getHotelByid } from "@/app/actions";
import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";

const HotelDetailsPage = async ({ params: { id } }) => {
  const hotelInfo = await getHotelByid(id);
  console.log(hotelInfo);
  return (
    <>
      <Summary hotel={hotelInfo} />
      <Gallery gallery={hotelInfo?.gallery} />
      <Overview overview={hotelInfo?.overview} />
    </>
  );
};

export default HotelDetailsPage;
