"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";


const PaymentForm = ({ userData, checkin, checkout, hotelData, totalCost }) => {

  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handlePayment = async (e) => {
    e.preventDefault()
    try {

      setLoading(true)
      const fromData = new FormData(e.currentTarget)

      const hotelId = hotelData?.id
      const userId = userData?.id
      const checkin = fromData.get("checkin")
      const checkout = fromData.get("checkout")

      const res = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hotelId, userId, checkin, checkout
        })

      })

      res.status === 201 && router.push("/bookings")

    } catch (error) {
      setError(error?.message)
    } finally {
      setLoading(false)
    }
  }


  return (
    <>
      {
        error &&
        <div className="text-red-600">{error}</div>
      }
      <form className="my-8" onSubmit={handlePayment}>
        <div className="my-4 space-y-2">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            id="name"
            defaultValue={userData?.name}
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>

        <div className="my-4 space-y-2">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            defaultValue={userData?.email}
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>

        <div className="my-4 space-y-2">
          <span>Check in</span>
          <h4 className="mt-2">
            <input type="date" defaultValue={checkin} name="checkin" id="checkin" />
          </h4>
        </div>

        <div className="my-4 space-y-2">
          <span>Checkout</span>
          <h4 className="mt-2">
            <input type="date" defaultValue={checkout} name="checkout" id="checkout" />
          </h4>
        </div>

        <div className="my-4 space-y-2">
          <label htmlFor="card" className="block">
            Card Number
          </label>
          <input
            type="text"
            id="card"
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>

        <div className="my-4 space-y-2">
          <label htmlFor="expiry" className="block">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry"
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>

        <div className="my-4 space-y-2">
          <label htmlFor="cvv" className="block">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full">
          Pay Now (${totalCost})
        </button>
      </form>
    </>
  );
};

export default PaymentForm;
