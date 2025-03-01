import React from "react";
import type Capsula from "../../types/Capsula"

export default function CapsulaCard({...item}: Capsula){
    return (
        <article className="h-60 w-1/2 rounded-lg p-5 flex flex-col justify-between items-center">
            <img src={item.imagen_capsula} alt={item.name_capsula} className="w-fit h-10/2 rounded-lg"/>
            <div className="flex flex-col justify-between h-1/3">
                <h3 className="text-secondary font-black text-2xl">{item.name_capsula}</h3>
                <p className="text-secondary font-light text-lg">{item.price_capsula}</p>
            </div>
        </article>
    )
}