import React from "react";
import Navbar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";

export default function Layout({ children }) {
    return (
        <>
        <Navbar />
        <main className="w-full h-fit flex flex-col mt-16">{children}</main>
        <Footer />
        </>
    );
}