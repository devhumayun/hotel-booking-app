"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"


const SearchByRating = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const [query, setQuery] = useState([])
    const params = new URLSearchParams(searchParams)
    const handleInputChange = (e) => {

        e.preventDefault()

        const name = e.target.name
        const checked = e.target.checked

        if (checked) {
            setQuery(prev => [...query, name])
        } else {
            const updateChacked = query.filter(item => item !== name)
            setQuery(updateChacked)
        }

    }

    useEffect(() => {
        const category = params.get("category")
        if (category) {
            const decodedCategory = decodeURI(category)
            const queryInCategory = decodedCategory.split("|")
            setQuery(queryInCategory)
        }
    }, [])

    useEffect(() => {
        if (query.length > 0) {
            params.set("category", encodeURI(query.join("|")))
        } else {
            params.delete("category")
        }
        replace(`${pathname}?${params.toString()}`);
    }, [query])

    return (
        <div>
            <h3 className="font-bold text-lg">Rating</h3>
            <form action="" className="flex flex-col gap-2 mt-2">
                <label htmlFor="fiveStar">
                    <input onChange={handleInputChange} checked={query.includes("5")} type="checkbox" name="5" id="fiveStar" />5 Star
                </label>

                <label htmlFor="fourStar">
                    <input onChange={handleInputChange} checked={query.includes("4")} type="checkbox" name="4" id="fourStar" />4 Star
                </label>

                <label htmlFor="threeStar">
                    <input onChange={handleInputChange} checked={query.includes("3")} type="checkbox" name="3" id="threeStar" />3 Star
                </label>

                <label htmlFor="twoStar">
                    <input onChange={handleInputChange} checked={query.includes("2")} type="checkbox" name="2" id="twoStar" />2 Star
                </label>

                <label htmlFor="oneStar">
                    <input onChange={handleInputChange} checked={query.includes("1")} type="checkbox" name="1" id="oneStar" />1 Star
                </label>
            </form>
        </div>
    )
}

export default SearchByRating
