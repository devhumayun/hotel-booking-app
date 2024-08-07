"use client"
import Image from "next/image";

import { signIn } from "next-auth/react";

const SocialLogins = () => {
  const handleAuth = (e) => {
    signIn("google", { callbackUrl: `http://localhost:3000/bookings` })
  }
  return (
    <>

      <div className="flex gap-4">
        <button onClick={handleAuth} className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
          <Image src="/google.png" alt="google" width={40} height={40} />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;
