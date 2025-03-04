import type Capsula from './Capsula';
import type Paquete from './Paquete';

interface ShopContextType {
    cart: Capsula[] | Paquete[] ;
    setCart: React.Dispatch<React.SetStateAction<any[]>>;
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
}

export default ShopContextType;