import React from "react";
import type Capsula from "../../types/Capsula"
import {Plus} from "lucide-react"
import AddCart from "./AddCart";
import { useNavigate } from "react-router";

export default function CapsulaCard({...item}: Capsula){

    const navigate = useNavigate();

    return (
        <article className="h-72 cursor-pointer border-[#00000030] hover:border w-full transition-all rounded-lg p-2 flex flex-col justify-between items-center">
            <img onClick={()=>navigate("/product/capsulas/"+item.id)}  src={item.imagen_capsula} alt={item.name_capsula} className="rounded-lg h-2/3"/>
            <div className="flex flex-col w-full justify-between items-center h-1/3">
                <h3 className="text-secondary font-black text-sm text-center">{item.name_capsula}</h3>
                <p className="text-secondary font-light text-xs text-center">${item.price_capsula}</p>
                <AddCart item={item} />
            </div>
        </article>
    )
}