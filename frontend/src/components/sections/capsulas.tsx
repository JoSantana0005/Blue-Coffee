import React, {useState, useEffect} from "react";
import CapsulaCard from "../ui/CapsulaCard";
import type Capsula from "../../types/Capsula";

export default function Capsulas(){


    const [capsulas, setCapsulas] = useState<Capsula[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/data/capsulas.json");
            const data = await response.json();
            setCapsulas(data.slice(0, 5));
        };
        fetchData();
    }, []);


    return (
        <section id="capsulas" className="h-[75vh] w-full flex flex-col p-10 gap-8 justify-center">
            <h2 className="text-secondary font-black text-4xl">Capsulas</h2>
            <div className="flex w-full justify-between items-center gap-4">
                {capsulas.map((capsula) => (
                    <CapsulaCard key={capsula.id} {...capsula} />
                ))}
            </div>
        </section>
    )
}