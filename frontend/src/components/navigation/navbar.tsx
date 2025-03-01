import React from "react";
import { Link } from "react-router";
import {User, ShoppingCart} from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full h-16 flex p-8 px-14 items-center justify-between">
            <Link to="/"><img src="/assets/brand/BlueCoffee.svg" alt="Logo" /></Link>
            <section className="flex gap-4 *:hover:text-primary *:transition-all">
                <Link to="/">Cápsulas</Link>
                <Link to="/about">Café en Grano</Link>
                <Link to="/menu">Café Molido</Link>
                <Link to="/contact">Packs</Link>
                <Link to="/contact">Accesorios</Link>
            </section>
            <section className="flex items-center gap-6">
                <Link to="/login"><User className="" /></Link>
                <span><ShoppingCart className="" /></span>
            </section>
        </nav>
    );
}