"use client"
import {Navbar} from "~/components/Home/Navbar";
import Footer from "~/components/Home/footer";
import Hero from "~/components/Home/hero";
import ProductGrid from "~/components/products/productGrid";
import Subscribe from "~/components/Home/subscribe";


export default function HomePage() {
  return (
    <div className="">
        <div className=" justify-between">
            <Navbar/>
            <a href="/login"></a>
        </div>
            <div className="container ">
                {/*<h1 className="text-center text-5xl font-medium text-cyan-600">Hello There</h1>*/}
            </div>
        <Hero/>
        <ProductGrid></ProductGrid>
        <Subscribe/>
        <Footer/>
    </div>
  );
}
