"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = ({ fromList, destination, checkin, checkout }) => {

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const [allowSearch, setAllowSearch] = useState(true)
  const [searchTerm, setSearchTerm] = useState({
    destination: destination || "Calvi",
    checkin: checkin,
    checkout: checkout
  })
  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    const changeState = { ...searchTerm, [name]: value }
    if (new Date(changeState?.checkin).getTime() > new Date(changeState?.checkout).getTime()) {
      setAllowSearch(false)
    } else {
      setAllowSearch(true)
    }

    setSearchTerm(changeState)
  }

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams)
    params.set("destination", searchTerm?.destination)

    if (searchTerm?.checkin && searchTerm?.checkout) {
      params.set("checkin", searchTerm?.checkin)
      params.set("checkout", searchTerm?.checkout)
    }

    if (pathname.includes("hotels")) {
      replace(`${pathname}?${params.toString()}`)
    } else {
      replace(`${pathname}hotels?${params.toString()}`)
    }

  }

  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams" className={fromList && "!shadow-none"}>
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select onChange={handleInputChange} defaultValue={searchTerm?.destination} name="destination" id="destination">
                <option value="Calvi">Calvi</option>
                <option value="West Midlands">West Midlands</option>
                <option value="Puglia">Puglia</option>
                <option value="Greater London">Greater London</option>
                <option value="Ferjus">Ferjus</option>
                <option value="Unterwössen">Unterwössen</option>
                <option value="Saint-Denis"> Saint-Denis</option>
                <option value="Catania"> Catania</option>
                <option value="Putzbrunn"> Putzbrunn</option>
                <option value="Perpignan"> Perpignan</option>
                <option value="Paris"> Paris</option>
                <option value="London"> London</option>
              </select>
            </h4>
          </div>

          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input onChange={handleInputChange} defaultValue={searchTerm?.checkin} type="date" name="checkin" id="checkin" />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input onChange={handleInputChange} defaultValue={searchTerm?.checkout} type="date" name="checkout" id="checkout" />
            </h4>
          </div>
        </div>
      </div>

      <button onClick={handleSearch} disabled={!allowSearch} className="search-btn">🔍️ {fromList ? "Modify Search" : "Search"}</button>
    </>
  );
};

export default Search;
