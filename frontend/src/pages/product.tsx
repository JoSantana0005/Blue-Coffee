import React, {useState, useEffect} from "react";
import { useParams, useLocation } from "react-router";
import axios from "axios";
import Layout from "../layout/layout";
import type Paquete from "../types/Paquete";
import type Capsula from "../types/Capsula";

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
            <section className="container mx-auto p-8">
                <h1>{product ? ('name' in product ? product.name : product.name_capsula) : 'Loading...'}</h1>
                <p>{product ? ('description' in product ? product.description : product.description_capsula) : 'Loading...'}</p>
                <p>{product ? ('price' in product ? product.price : product.price_capsula) : 'Loading...'}</p>
                <p>{product ? ('type' in product ? product.type : product.type_capsula) : 'Loading...'}</p>
            </section>
        </Layout>
    );
}