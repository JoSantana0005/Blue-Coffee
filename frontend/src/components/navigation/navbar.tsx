import React from "react";
import { Link } from "react-router";
import './styles/navbar.css';
import {User, ShoppingBasket} from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 bg-white w-full h-16 flex p-8 px-14 items-center justify-between">
            <Link to="/"><img src="/assets/brand/BlueCoffee.svg" alt="Logo" /></Link>
            <section className="flex gap-4 *:hover:text-primary *:transition-all">
                <Link to="/">Cápsulas</Link>
                <Link to="/about">Café en Grano</Link>
                <Link to="/menu">Café Molido</Link>
                <Link to="/contact">Packs</Link>
                <Link to="/contact">Accesorios</Link>
            </section>
            <section id="accountSection" className="flex items-center gap-6">
                <Link to="/login"><User size={40} className="hover:bg-primary p-2 hover:rounded-full transition-all" /></Link>
                <span><ShoppingBasket size={40} className="hover:bg-primary p-2 hover:rounded-full transition-all cursor-pointer" /></span>
            </section>
        </nav>
    );
}