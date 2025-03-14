import React, {useState, useEffect} from "react";
import CapsulaCard from "../ui/CapsulaCard";
import type Capsula from "../../types/Capsula";

export default function Packs(){


    const [capsulas, setCapsulas] = useState<Capsula[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:7070/capsulas");
            const data = await response.json();
            setCapsulas(data.slice(0, 5));
        };
        fetchData();
    }, []);


    return (
        <div id="packs" className="h-[80vh] p-14">
            <section className="h-full rounded-xl border w-full flex flex-col p-10 gap-8 justify-center">
                <h2 className="text-secondary font-black text-4xl">Packs</h2>
                <div className="flex w-full justify-between items-center gap-4">
                    {capsulas.map((capsula) => (
                        <CapsulaCard key={capsula.id} {...capsula} />
                    ))}
                </div>
            </section>
        </div>
    )
}