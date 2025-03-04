import React, {useEffect, useState} from "react"
import type Paquete from "../../types/Paquete"
import AddCart from "./AddCart"
import { useNavigate } from "react-router"

export default function TopCoffee(){

    const [coffee, setCoffee] = useState<Paquete[]>([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8080/paquetes")
            const data = await response.json()
            setCoffee(data.slice(0,3))
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
                            <img onClick={()=>navigate("/product/paquetes/"+item.id)}  className="w-10" src={item.imagen} alt={item.name} />
                            <p className="font-bold uppercase">{item.name}</p>
                            <p>{item.description}</p>
                            <p className="font-bold">{item.price}$ C/U</p>
                            <AddCart item={item} />
                        </article>
                    )
                })}
            </div>
        </article>
    )
}