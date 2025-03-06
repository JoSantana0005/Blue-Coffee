import React, {useState, useEffect} from "react";
import PaqueteCard from "../ui/PaqueteCard";
import type Paquete from "../../types/Paquete";

export default function Molido(){


    const [paquetes, setPaquetes] = useState<Paquete[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:6060/paquetes/type/Molido");
            const data = await response.json();
            setPaquetes(data.slice(0, 3));
        };
        fetchData();
    }, []);


    return (
        <section id="molido" className="h-[75vh] w-full flex flex-col p-10 gap-8 items-center justify-center">
            <h2 className="text-secondary font-black text-4xl text-center">Café Molido</h2>
            <div className="flex w-1/2 justify-between items-center gap-4">
                {paquetes.map((paquete) => (
                    <PaqueteCard key={paquete.id} {...paquete} />
                ))}
            </div>
        </section>
    )
}