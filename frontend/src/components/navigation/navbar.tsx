import React, {useState, useRef, useEffect, useContext} from "react";
import { Link, useLocation } from "react-router";
import './styles/navbar.css';
import {User, ShoppingBasket, X} from "lucide-react";
import { ShopContext } from "../../context/CartContext";

export default function Navbar() {

    const location = useLocation();
    const shopContext = useContext(ShopContext);
    if (!shopContext) {
        return null;
    }
    const { cart, setCart, total, setTotal } = shopContext;
    const cartRef = useRef<HTMLDivElement>(null);
    const [isCartOpen, setIsCartOpen] = useState(false);

    function handleCart(){
        setIsCartOpen(!isCartOpen);
        if (cartRef.current) {
            cartRef.current.style.right = isCartOpen ? "-100%" : "0px";
        }
    }

    useEffect(() => {
        if (location.hash) {
          const element = document.querySelector(location.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [location]);

    return (
        <nav className="fixed z-50 top-0 bg-white backdrop-blur-md w-full h-16 flex p-8 px-14 items-center justify-between">
            <Link to="/#hero"><img src="/assets/brand/BlueCoffee.svg" alt="Logo" /></Link>
            <section className="flex gap-4 *:hover:text-primary *:transition-all">
                <Link to="/#capsulas">Cápsulas</Link>
                <Link to="/#grano">Café en Grano</Link>
                <Link to="/#molido">Café Molido</Link>
                <Link to="/#packs">Packs</Link>
            </section>
            <section onClick={handleCart} id="accountSection" className="flex items-center gap-6">
                <Link to="/login"><User size={40} className="hover:bg-primary p-2 hover:rounded-full transition-all" /></Link>
                <span><ShoppingBasket size={40} className="hover:bg-primary active:scale-95 p-2 hover:rounded-full transition-all cursor-pointer" /></span>
            </section>
            <section id="cart" ref={cartRef} className="fixed gap-4 flex flex-col shadow-2xl p-8 transition-all right-[-100%] top-0 w-1/4 h-screen bg-white">
                <article className="flex w-full justify-between items-center">
                    <h2 className="bg-white font-bold">Carrito</h2>
                    <X onClick={handleCart} className="cursor-pointer" />
                </article>
                <article className="flex flex-col gap-4">
                    {
                        
                    }
                </article>
            </section>
        </nav>
    );
}