import React from "react";
import {Mail,Phone, Instagram} from 'lucide-react'

export default function Footer() {
    return (
        <footer className="h-[30vh] relative w-full flex justify-center gap-16 text-sm items-center bg-gray-100 text-black">
            <article className="flex flex-col h-1/2 *:hover:underline">
                <a href="">Politicas de Envios</a>
                <a href="">Devoluciones</a>
                <a href="">Aviso Legal</a>
                <a href="">Condiciones generales</a>
            </article>
            <article className="flex flex-col h-1/2 *:hover:underline">
                <a href="">Politicas de Cookies</a>
                <a href="">Terminos de Servicios</a>
                <a href="">Politicas de Privacidad</a>
            </article>
            <article className="flex flex-col h-1/2 gap-1">
                <h2 className="font-bold uppercase text-xl">Contactanos</h2>
                <a href="mailto:blue.coffee@gmail.com" className="flex items-center gap-2">
                    <Mail size={24} />
                    <span className="hover:underline">blue.coffee@gmail.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2">
                    <Phone size={24} />
                    <span className="hover:underline">0414-2337890</span>
                </a>
                <a href="https://www.instagram.com" className="flex items-center gap-2">
                    <Instagram size={24} />
                    <span className="hover:underline">blue-coffeeVnzla</span>
                </a>
            </article>
            <img className="absolute right-0 h-full" src="/assets/resources/lluvia.webp" alt="lluvia" />
            <img className="absolute left-0 h-full rotate-180" src="/assets/resources/lluvia.webp" alt="lluvia" />
        </footer>
    )
}