"use client"

import { signOut } from "next-auth/react"

const Logout = () => {
    return (
        <span onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })} className="cursor-pointer">
            Logout
        </span>
    )
}

export default Logout
