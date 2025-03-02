import React from "react";
import type Paquete from "../../types/Paquete"
import {Plus} from "lucide-react"

export default function PaqueteCard({...item}: Paquete){
    return (
        <article className="h-72 cursor-pointer border-[#00000030] hover:border w-full transition-all rounded-lg p-2 flex flex-col justify-between items-center">
            <img src={item.image} alt={item.name} className="rounded-lg h-2/3"/>
            <div className="flex flex-col w-full justify-between items-center h-1/3">
                <h3 className="text-secondary font-black text-sm text-center">{item.name}</h3>
                <p className="text-secondary font-light text-xs text-center">${item.price}</p>
                <button className="bg-primary size-10 p-2 rounded-full cursor-pointer active:scale-95 transition-scale"><Plus color="white" /></button>
            </div>
        </article>
    )
}