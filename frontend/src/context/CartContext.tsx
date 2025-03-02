import { createContext, useState, ReactNode } from "react";
import type ShopContextType from "../types/ShopContext";

export const ShopContext = createContext<ShopContextType>({
    cart: [],
    setCart: () => {},
    total: 0,
    setTotal: () => {}
});


interface CartContextProviderProps {
    children: ReactNode;
}

export default function CartContextProvider({ children }: CartContextProviderProps) {

    const [cart, setCart] = useState<any[]>([])
    const [total, setTotal] = useState(0)

    return (
        <ShopContext.Provider value={{ cart, setCart, total, setTotal }}>
            {children}
        </ShopContext.Provider>
    );
}