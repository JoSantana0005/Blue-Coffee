import React, {useEffect, useContext} from "react";
import Layout from "../layout/layout";
import { ShopContext } from "../context/CartContext";
import { Link } from "react-router";

export default function Payment() {

    const shopContext = useContext(ShopContext);
    if (!shopContext) {
        return null;
    }
    const { cart, setCart, total, setTotal } = shopContext;

    useEffect(() => {
        if(!cart || cart.length === 0) {
            window.location.href = '/';
        }
    }, []);

    return (
        <Layout>
            <section id="payment" className="h-[95vh] w-full flex items-center justify-center">
                <article className="w-1/2 h-full overflow-auto flex flex-col p-10 gap-3">
                    <label className="text-xl font-bold" htmlFor="contact">Contacto</label>
                    <input className="border p-4 w-full rounded-full border-gray-300" type="text" name="contact" placeholder="Email" />
                    <label className="text-xl font-bold" htmlFor="delivery">Delivery</label>
                    <select className="border p-4 w-full rounded-full border-gray-300">
                        <option disabled value="">Estado</option>
                        <option value="Amazonas">Amazonas</option>
                        <option value="Anzoátegui">Anzoátegui</option>
                        <option value="Apure">Apure</option>
                        <option value="Aragua">Aragua</option>
                        <option value="Barinas">Barinas</option>
                        <option value="Bolívar">Bolívar</option>
                        <option value="Carabobo">Carabobo</option>
                        <option value="Cojedes">Cojedes</option>
                        <option value="Delta Amacuro">Delta Amacuro</option>
                        <option value="Distrito Capital">Distrito Capital</option>
                        <option value="Falcón">Falcón</option>
                        <option value="Guárico">Guárico</option>
                        <option value="Lara">Lara</option>
                        <option value="Mérida">Mérida</option>
                        <option value="Miranda">Miranda</option>
                        <option value="Monagas">Monagas</option>
                        <option value="Nueva Esparta">Nueva Esparta</option>
                        <option value="Portuguesa">Portuguesa</option>
                        <option value="Sucre">Sucre</option>
                        <option value="Táchira">Táchira</option>
                        <option value="Trujillo">Trujillo</option>
                        <option value="Vargas">Vargas</option>
                        <option value="Yaracuy">Yaracuy</option>
                        <option value="Zulia">Zulia</option>
                    </select>
                    <div className="flex gap-4">
                        <input className="border p-4 w-full rounded-full border-gray-300" type="text" name="name" placeholder="Nombre" />
                        <input className="border p-4 w-full rounded-full border-gray-300" type="text" name="lastname" placeholder="Apellido" />
                    </div>
                    <div className="flex gap-4">
                        <select className="border p-4 w-1/3 rounded-full border-gray-300" name="" id="">
                            <option value="">V</option>
                            <option value="">E</option>
                        </select>
                        <input className="border p-4 w-full rounded-full border-gray-300" type="text" name="document" placeholder="000000000" />
                    </div>
                    <input className="border p-4 w-full rounded-full border-gray-300" type="text" name="location" placeholder="Direccion" />
                    <input className="border p-4 w-full rounded-full border-gray-300" type="text" name="apartment" placeholder="Apartamento, suite, etc. (opcional)" />
                    <div className="flex gap-4">
                        <input className="border p-4 w-full rounded-full border-gray-300" type="number" name="postal" placeholder="Codigo Postal" />
                        <input className="border p-4 w-full rounded-full border-gray-300" type="text" name="provincia" placeholder="Provincia" />
                    </div>
                    <input className="border p-4 w-full rounded-full border-gray-300" type="number" name="phone" placeholder="Telefono" />

                    <section className="w-full flex flex-col gap-2 p-4 bg-gray-100 rounded-2xl">
                        <h2 className="text-xl font-bold p-2">Datos de la Tarjeta</h2>
                        <input className="border p-4 w-full rounded-full border-gray-300" type="text" name="card" placeholder="Numero de Tarjeta" />
                        <div className="flex gap-4">
                            <input className="border p-4 w-full rounded-full border-gray-300" type="number" name="vencimiento" placeholder="Fecha de Vencimiento" />
                            <input className="border p-4 w-full rounded-full border-gray-300" type="number" name="security" placeholder="Codigo de Seguridad" />
                        </div>
                        <input className="border p-4 w-full rounded-full border-gray-300" type="number" name="nameCard" placeholder="Nombre de la Tarjeta" />
                    </section>
                    <button onClick={()=> window.location.href="/"} className="bg-primary cursor-pointer font-bold active:scale-95 text-white p-4 rounded-full">Pagar</button>
                    <div className="flex justify-center gap-2 *:hover:underline">
                        <Link to="cookies">Políticas de cookies</Link>
                        <Link to="services">Términos de servicios</Link>
                        <Link to="privacy">Política de privacidad</Link>
                    </div>
                </article>
                <article className="w-1/2 h-full bg-gray-100 flex flex-col items-center justify-center p-10 gap-3">
                <h2 className="w-2/3 text-2xl font-bold">Carrito</h2>
                    <article className="flex flex-col h-1/2 gap-4 overflow-y-auto">
                            {
                            cart ? cart.length === 0 ? <span className="text-center opacity-50 text-2xl">Carrito Vacío</span> : null : null
                            }
                            {
                            cart.map((item: any, index: number) => (
                                <section key={index} className="flex justify-between h-30 transition-all hover:bg-primary cursor-pointer rounded-xl p-4 gap-2 items-center">
                                    <img src={item.imagen || item.imagen_capsula} alt={item.name || item.name_capsula} className="w-1/4 h-full" />
                                    <span className="text-sm w-1/2 font-bold">{item.name_capsula || item.name}</span>
                                    <span className="flex w-20">$ {item.price || item.price_capsula}</span>
                                </section>
                            ))}
                    </article>
                    <div className="w-2/3 h-[0.1em] bg-black opacity-20"></div>
                    <article className="w-2/3 gap-4 flex justify-between items-center">
                        <input className="border p-4 w-full rounded-full border-gray-300" type="text" name="discount" placeholder="Codigo de Descuento" />
                        <button className="bg-primary cursor-pointer active:scale-95 text-white p-4 rounded-full w-1/2">Aplicar</button>
                    </article>
                    <article className="flex justify-between w-2/3">
                        <span>Subtotal</span>
                        <span>$ {total}</span>
                    </article>
                    <article className="flex justify-between w-2/3">
                        <span>Taxes</span>
                        <span>$ {total*20/100}</span>
                    </article>
                    <article className="flex justify-between w-2/3 font-bold text-2xl">
                        <span>Total</span>
                        <span>$ {total+total*20/100}</span>
                    </article>
                </article>
            </section>
        </Layout>
    )
}