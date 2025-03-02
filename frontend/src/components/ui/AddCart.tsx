import React from "react";
import { Plus } from "lucide-react";

export default function AddCart(item) {
  return (
    <button 
    className="bg-primary p-2 size-10 rounded-full cursor-pointer active:scale-95 transition-scale">
        <Plus color="white" />
    </button>
  );
}