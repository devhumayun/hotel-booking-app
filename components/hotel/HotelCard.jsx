import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = () => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src="/hero-bg.jpg"
        className="max-h-[162px] max-w-[240px]"
        alt="h"
        height={162}
        width={240}
      />
      <HotelSummaryInfo fromListPage={true} />
    </div>
  );
};

export default HotelCard;