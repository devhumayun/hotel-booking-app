import HotelSort from "../sort/HotelSort";
import SearchByAmenities from "./SearchByAmenities";
import SearchByPrice from "./SearchByPrice";
import SearchByRating from "./SearchByRating";

const Filter = () => {
  return (
    <>
      <div className="col-span-3 space-y-4">
        <HotelSort />
        <SearchByPrice />
        <SearchByRating />
        <SearchByAmenities />
      </div>
    </>
  );
};

export default Filter;
