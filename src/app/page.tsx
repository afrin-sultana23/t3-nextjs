import Link from "next/link";;
import {Navbar} from "~/components/Home/Navbar";
import Footer from "~/components/Home/footer";

export default function HomePage() {
  return (
    <div className="">
        <div className=" justify-between">
            <Navbar/>
            <a href="/login"></a>

        </div>
        <div className="container ">
        <h1 className="text-center text-5xl font-medium text-cyan-600">Hello There

        </h1>
        </div>

        <Footer/>
    </div>
  );
}
