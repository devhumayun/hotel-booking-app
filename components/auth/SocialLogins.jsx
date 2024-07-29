"use client"
import Image from "next/image";

import { signIn } from "next-auth/react";

const SocialLogins = () => {
  const handleAuth = (e, provider) => {
    signIn(provider, { callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/bookings` })
  }
  return (
    <>
      <div className="text-center text-xs text-gray-500">or Signup with</div>
      <div className="flex gap-4">
        <button onClick={(e) => handleAuth(e, "google")} className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
          <Image src="/google.png" alt="google" width={40} height={40} />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;
