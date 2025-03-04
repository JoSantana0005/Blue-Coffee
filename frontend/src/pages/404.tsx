import React from "react";
import Layout from "../layout/layout";
import Loader from "../components/ui/Loader"

export default function NotFound() {
  return (
    <Layout>
        <section className="h-[60vh] flex justify-around items-center">
            <Loader />
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        </section>
    </Layout>
  );
}