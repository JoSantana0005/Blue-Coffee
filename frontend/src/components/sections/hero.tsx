import React from "react";
import './styles/hero.css'

export default function Hero(){
    return (
        <section id="hero" className='grid grid-cols-3 grid-rows-3 gap-4 w-full h-screen *:rounded-xl'>
            <article className="col-span-2 row-span-2 bg-gray-200 overflow-hidden">1</article>
            <article className='col-start-3 bg-gray-200'>2</article>
            <article className="row-span-2 col-start-3 row-start-2 bg-gray-200">3</article>
            <article className="col-span-2 row-start-3 bg-gray-200">4</article>
        </section>
    )
}