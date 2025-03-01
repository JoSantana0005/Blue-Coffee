import React, {useEffect, useState} from "react"
import type Paquete from "../../types/Paquete"
import {Plus} from "lucide-react"

export default function TopCoffee(){

    const [coffee, setCoffee] = useState<Paquete[]>([])
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
        <article className="col-span-2 p-8 gap-12 flex row-start-3 bg-[#E2F4FF]">
            <h3 className="text-secondary font-black text-4xl">Top-3<br></br>Coffee</h3>
            <div className="flex flex-col justify-between items-center">
                {loading ? <p>Loading...</p> : 
                
                coffee.map((item, index) => {
                    return (
                        <article key={index} className="flex w-full gap-4 items-center">
                            <img className="w-10" src={item.image} alt={item.name} />
                            <p className="font-bold uppercase">{item.name}</p>
                            <p>{item.description}</p>
                            <p className="font-bold">{item.price}$ C/U</p>
                            <button className="bg-primary p-2 rounded-full cursor-pointer active:scale-95 transition-scale"><Plus color="white" /></button>
                        </article>
                    )
                })}
            </div>
        </article>
    )
}