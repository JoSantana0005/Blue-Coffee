import React, {useEffect, useState} from "react"
import type Paquete from "../../types/Paquete"
import AddCart from "../ui/AddCart"

export default function Grano(){

    const [coffee, setCoffee] = useState<Paquete[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/data/coffee.json")
            const data = await response.json()
            setCoffee(data.slice(0,8))
            setLoading(false)
        }
        fetchData()
    }, [])

    return (
        <section id="grano" className="flex flex-col gap-12 justify-center items-center h-[150vh]">
            <h3 className="text-secondary font-black text-4xl">Café en Grano</h3>
            <div className="grid grid-cols-4 grid-rows-2 gap-14 w-full p-14">
                {loading ? <p>Loading...</p> : 
                
                coffee.map((item, index) => {
                    return (
                        <article key={index} className="flex flex-col h-full aspect-square gap-4 items-center justify-between">
                        <img className="w-10" src={item.image} alt={item.name} />
                            <p className="font-bold uppercase">{item.name}</p>
                            <p className="text-xs text-center w-1/2">{item.description}</p>
                            <p className="font-bold">{item.price}$ C/U</p>
                            <AddCart item={item} />
                      </article>
                    )
                })}
            </div>
        </section>
    )
}