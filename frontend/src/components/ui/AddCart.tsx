import React, {useContext} from "react";
import { Plus } from "lucide-react";
import { ShopContext } from "../../context/CartContext";
import type ShopContextType from "../../types/ShopContext";

export default function AddCart({ item }: { item: any }) {

  const { cart, setCart, total, setTotal }: ShopContextType = useContext(ShopContext);

  function addCart(){
    setCart([...cart, item]);
    setTotal(total + item.price);
    console.log(cart);
  }

  return (
    <button 
        onClick={addCart}
        className="bg-primary p-2 size-10 rounded-full cursor-pointer active:scale-95 transition-scale">
            <Plus color="white" />
    </button>
  );
}