import React from "react";
import Layout from "../layout/layout";
import { useRef } from "react";

export default function Register() {

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        
    }

    return (
        <Layout>
            <section className="h-[95vh] flex items-center justify-center">
                <div className="w-full max-w-xs">
                    <form onSubmit={handleForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h1 className="text-center font-bold text-3xl my-8">Registro</h1>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
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
                                placeholder="******************"
                            />
                        </div>
                        <button
                                className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                                type="submit">
                                Sign In
                        </button>
                    </form>
                </div>
            </section>
        </Layout>
    );
}