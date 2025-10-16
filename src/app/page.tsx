import Link from "next/link";
import {NavigationMenu} from "~/components/ui/navigation-menu";
import {Navbar} from "~/components/ui/Navbar";

export default function HomePage() {
  return (
    <main className="">
        <div className=" justify-between">
            <Navbar/>
            <a href="/login"></a>

        </div>
        <div className="container ">
        <h1 className="text-center text-5xl font-medium text-cyan-600">Hello There

        </h1>
        </div>


    </main>
  );
}
