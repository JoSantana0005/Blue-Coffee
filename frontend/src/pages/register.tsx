import React from "react";
import Layout from "../layout/layout";
import { useRef } from "react";
import axios from "axios";


export default function Register() {

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        const first_name = (document.getElementById('firstname') as HTMLInputElement).value;
        const last_name = (document.getElementById('lastname') as HTMLInputElement).value;
        
        if(!email || !password || !first_name || !last_name) {
            alert('Todos los campos son requeridos');
            return;
        }

        //MODIFICAR RUTA Y RESPONSE
        axios.post('http://localhost:3000/api/register', {
            email,
            password,
            first_name,
            last_name
        }).then((response) => {
            if(response.status === 200) {
                window.localStorage.setItem('token', response.data.token);
                window.location.href = '/';
            }
        }
        ).catch((error) => {
            console.log(error);
        });
    }

    return (
        <Layout>
            <section className="h-[95vh] flex items-center justify-center">
                <div className="w-full max-w-xs">
                    <form onSubmit={handleForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h1 className="text-center font-bold text-3xl my-8">Registro</h1>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                                First Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="firstname"
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                                Last Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="lastname"
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="******************"
                            />
                        </div>
                        <button
                                className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                                type="submit">
                                Sign Up
                        </button>
                    </form>
                </div>
            </section>
        </Layout>
    );
}