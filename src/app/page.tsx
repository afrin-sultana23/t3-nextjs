"use client"
import {Navbar} from "~/components/Home/Navbar";
import Footer from "~/components/Home/footer";
import Hero from "~/components/Home/hero";
import ProductGrid from "~/components/products/productGrid";
import Subscribe from "~/components/Home/subscribe";
import Topbar from "~/components/Home/topbar";


export default function HomePage() {
  return (
    <div className="">
        <div className=" justify-between">
            <Navbar/>
            <a href="/login"></a>
        </div>
            <div className="container ">

            </div>
        <Topbar></Topbar>
        <Hero/>
        <ProductGrid></ProductGrid>
        <Subscribe/>
        <Footer/>
    </div>
  );
}
