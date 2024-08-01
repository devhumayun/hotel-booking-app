import { getRatingsForAHotel } from "@/app/actions";


const HotelRating = async ({ id }) => {

    const ratings = await getRatingsForAHotel(id)
    let avgRating = 0

    const getRatingDescription = (avgRating) => {
        if (avgRating === 0) {
            return "No rating available"
        } else if (avgRating > 0 && avgRating <= 2) {
            return "Poor"
        } else if (avgRating > 2 && avgRating <= 3) {
            return "Average"
        } else if (avgRating > 3 && avgRating <= 4) {
            return "Good"
        } else if (avgRating > 4) {
            return "Very Good"
        }
    }

    if (ratings.length === 1) {
        avgRating = ratings[0]?.rating
    }
    if (ratings.length > 1) {
        avgRating = ratings.reduce((item, value) => {
            return item.rating + value.rating
        }) / ratings.length
    }

    return (
        <div className="flex items-center gap-3">
            <div className="bg-[#003912] w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
                {avgRating}
            </div>
            <span className="font-medium">{getRatingDescription(avgRating)}</span>
        </div>
    )
}

export default HotelRating
