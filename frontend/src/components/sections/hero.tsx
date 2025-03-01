import React from "react";
import './styles/hero.css'

export default function Hero(){
    return (
        <section id="hero" className='grid max-md:grid-cols-1 max-md:grid-rows-4 grid-cols-3 grid-rows-3 gap-6 w-full p-6 h-screen *:rounded-xl'>
            <article className="col-span-2 row-span-2 overflow-hidden"></article>
            <article className='col-start-3 bg-primary flex items-center justify-center gap-2'>
                <img className="size-28" src="/assets/brand/Apasionados.svg" alt="Apasionados" />
                <h2 className="text-white font-bold text-3xl uppercase">Apasionados<br></br> por el Cafe</h2>
            </article>
            <article className="row-span-2 col-start-3 row-start-2 bg-gray-200">3</article>
            <article className="col-span-2 row-start-3 bg-gray-200">4</article>
        </section>
    )
}