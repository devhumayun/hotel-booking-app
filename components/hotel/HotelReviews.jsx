import { getReviewsForAHotel } from "@/app/actions"
import Link from "next/link"

const HotelReviews = async ({ id }) => {
    const reviews = await getReviewsForAHotel(id)

    return (
        <>
            {
                reviews.length === 0 ? (
                    <Link href="#">Be the first one to review</Link>
                ) : (<span>{reviews.length} {reviews.length > 1 ? "Reviews" : "Review"}</span>)
            }

        </>
    )
}

export default HotelReviews
