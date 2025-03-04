import React, {useState, useEffect} from "react";
import { useParams, useLocation } from "react-router";
import axios from "axios";
import Layout from "../layout/layout";
import type Paquete from "../types/Paquete";
import type Capsula from "../types/Capsula";
import AddCart from "../components/ui/AddCart";
import {Package, Truck,LockKeyhole, RefreshCcw} from 'lucide-react'

export default function Product() {

    const {id} = useParams();
    const [product, setProduct] = useState<Paquete | Capsula | null>(null);
    const navigation = useLocation();
    let url = navigation.pathname.split('/')[2];

    useEffect(() => {
        axios.get(`http://localhost:8080/${url}/${id}`)
        .then(res => {
            setProduct(res.data);
        })
        .catch(err => {
            console.error(err);
        });
    }, [id]);

    
    return (
        <Layout>
            <section className="p-10 flex flex-col h-[120vh]">
                <section className="flex justify-between h-2/3">
                    <article className="flex flex-col">
                        {
                            url === 'paquetes' ? (
                                <p>Granos de Cafe</p>
                            ) : (
                                <p>Capsulas de Cafe</p>
                            )
                        }
                        <h2>{product ? ('name' in product ? product.name : product.name_capsula) : 'Loading...'} de {product ? ('cant_gram' in product ? product.cant_gram : "") : 'Loading...'} gr</h2>
                        <p>$ {product ? ('price' in product ? product.price : product.price_capsula) : 'Loading...'}</p>
                        <AddCart item={product} />
                        <p>Descripcion</p>
                        <p>{product ? ('description' in product ? product.description : product.description_capsula) : 'Loading...'}</p>
                    </article>
                    <article className="w-1/2 h-full">
                        <div>
                            <img className="h-full w-full bg-red-300" src={product ? ('image' in product ? product.image : product.imagen_capsula) : 'Loading...'} alt="product" />
                        </div>
                    </article>
                </section>
                <section className="h-1/3 w-full">
                    <div className="bg-gray-100 rounded-xl h-full flex items-center justify-around p-8 gap-8 text-center">
                        <article className="flex-1 flex flex-col items-center justify-between">
                            <Package size={60} />
                            <h3 className="font-bold text-xl">ENVÍOS GRATIS</h3>
                            <p>Envíos gratis en pedidos superiores a $25</p>
                        </article>
                        <article className="flex-1 flex flex-col items-center justify-between gap-2">
                            <Truck size={60} />
                            <h3 className="font-bold text-xl">PERIODO DE ENTREGA</h3>
                            <p>Carabobo: 24/772h
                            Nacional: 3-7 días</p>
                        </article>
                        <article className="flex-1 flex flex-col items-center justify-between">
                            <LockKeyhole size={60} />
                            <h3 className="font-bold text-xl">TRANSACCIÓN SEGURA</h3>
                            <p>Todas las tarjetas de débito y credito aceptadas</p>
                        </article>
                        <article className="flex-1 flex flex-col items-center justify-between">
                            <RefreshCcw size={60} />
                            <h3 className="font-bold text-xl">DEVOLUCIONES</h3>
                            <p>Contáctanos para procesar tu devolución de manera sencilla</p>
                        </article>
                    </div>
                </section>
            </section>
        </Layout>
    );
}