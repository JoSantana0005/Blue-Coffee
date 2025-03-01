import React from "react";
import TopCoffee from "../ui/TopCoffee";
import './styles/hero.css'

export default function Hero(){
    return (
        <section id="hero" className='grid max-md:flex max-md:flex-col grid-cols-3 grid-rows-3 gap-6 w-full p-6 h-[150vh] *:rounded-xl'>
            <article id="textMove" className="col-span-2 row-span-2 overflow-hidden"></article>
            <article className='col-start-3 transition-all cursor-pointer bg-primary flex items-center justify-center gap-2'>
                <img className="size-28" src="/assets/brand/Apasionados.svg" alt="Apasionados" />
                <h2 className="text-white font-bold text-3xl uppercase">Apasionados<br></br> por el Cafe</h2>
            </article>
            <article id="backgroundGrain" className="row-span-2 col-start-3 row-start-2 bg-gray-200"></article>
            <TopCoffee />
        </section>
    )
}