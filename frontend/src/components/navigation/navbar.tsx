import React, {useState, useRef} from "react";
import { Link } from "react-router";
import './styles/navbar.css';
import {User, ShoppingBasket, X} from "lucide-react";

export default function Navbar() {

    const cart = useRef<HTMLDivElement>(null);
    const [isCartOpen, setIsCartOpen] = useState(false);

    function handleCart(){
        setIsCartOpen(!isCartOpen);
        if (cart.current) {
            cart.current.style.right = isCartOpen ? "-100%" : "0px";
        }
    }

    return (
        <nav className="fixed z-50 top-0 bg-white backdrop-blur-md w-full h-16 flex p-8 px-14 items-center justify-between">
            <a href="/"><img src="/assets/brand/BlueCoffee.svg" alt="Logo" /></a>
            <section className="flex gap-4 *:hover:text-primary *:transition-all">
                <a href="/#capsulas">Cápsulas</a>
                <a href="/#grano">Café en Grano</a>
                <a href="/#molido">Café Molido</a>
                <a href="/#packs">Packs</a>
            </section>
            <section onClick={handleCart} id="accountSection" className="flex items-center gap-6">
                <Link to="/login"><User size={40} className="hover:bg-primary p-2 hover:rounded-full transition-all" /></Link>
                <span><ShoppingBasket size={40} className="hover:bg-primary active:scale-95 p-2 hover:rounded-full transition-all cursor-pointer" /></span>
            </section>
            <section ref={cart} className="fixed p-8 transition-all right-[-100%] top-0 w-1/4 h-screen bg-white">
                <article className="flex w-full justify-between items-center">
                    <h2 className="bg-white font-bold">Carrito</h2>
                    <X onClick={handleCart} className="cursor-pointer" />
                </article>
            </section>
        </nav>
    );
}