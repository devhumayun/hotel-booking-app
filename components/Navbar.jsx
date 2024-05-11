
import { auth } from "@/auth"
import Image from "next/image"
import Link from "next/link"
import Logout from "./auth/Logout"

const Navbar = async ({ menu_access }) => {
  const session = await auth()
  return (
    <nav>
      <Link href="/">
        <Image
          src="/stayswift.svg"
          alt="Stay Swift Logo"
          width={200}
          height={200} />
      </Link>
      {
        menu_access &&
        <ul>
          <li>
            <Link href="#">Recommended Places</Link>
          </li>

          <li>
            <Link href="#">About Us</Link>
          </li>

          <li>
            <Link href="#">Contact us</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>

          <li>
            {
              session?.user ? (
                <div>
                  <Link href="/bookings">{session?.user?.name}</Link>
                  <span className="px-2 text-slate-400">|</span>
                  <Logout />
                </div>
              ) : (
                <Link href="/login" className="login">Login</Link>
              )
            }

          </li>
        </ul>
      }

    </nav>
  )
}

export default Navbar