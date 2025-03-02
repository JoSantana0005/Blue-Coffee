import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);
export default function CartContextProvider({ children }) {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    return (
        <ShopContext.Provider value={[cart, setCart, total, setTotal]}>
            {children}
        </ShopContext.Provider>
    );
}