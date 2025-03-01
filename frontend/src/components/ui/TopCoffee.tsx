import React, {useEffect, useState} from "react"
import type Coffee from "../../types/Coffee"

export default function TopCoffee(){

    const [coffee, setCoffee] = useState<Coffee[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/data/coffee.json")
            const data = await response.json()
            setCoffee(data)
            setLoading(false)
        }
        fetchData()
    }, [])

    return (
        <article className="col-span-2 p-8 gap-8 flex row-start-3 bg-[#E2F4FF]">
            <h3 className="text-secondary font-black text-4xl">Top-3<br></br>Coffee</h3>
            <div>
                {loading ? <p>Loading...</p> : 
                
                coffee.map((item, index) => {
                    return (
                        <article key={index} className="flex gap-4 items-center">
                            <img src={item.image} alt={item.name} />
                            <section>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </section>
                        </article>
                    )
                })}
            </div>
        </article>
    )
}