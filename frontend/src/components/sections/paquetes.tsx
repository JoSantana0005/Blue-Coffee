import React from "react";
import CircularGallery from "../ui/CircularGallery";

export default function Paquetes(){

    const items = [
        {
            image: "/data/images/paquetes/paqueteHD.png",
            text: "",
        },
        {
            image: "/data/images/paquetes/paqueteHD.png",
            text: "",
        },
        {
            image: "/data/images/paquetes/paqueteHD.png",
            text: "",
        },
        {
            image: "/data/images/paquetes/paqueteHD.png",
            text: "",
        },
        {
            image: "/data/images/paquetes/paqueteHD.png",
            text: "",
        },
        {
            image: "/data/images/paquetes/paqueteHD.png",
            text: "",
        },
        {
            image: "/data/images/paquetes/paqueteHD.png",
            text: "",
        },
        {
            image: "/data/images/paquetes/paqueteHD.png",
            text: "",
        },
        {
            image: "/data/images/paquetes/paqueteHD.png",
            text: "",
        },
        {
            image: "/data/images/paquetes/paqueteHD.png",
            text: "",
        },

    ]

    return (
        <section className="h-[75vh] w-full">
            <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery items={items} bend={0} textColor="#000" />
            </div>
        </section>
    )
}