import Link from "next/link";
import {NavigationMenu} from "~/components/ui/navigation-menu";

export default function HomePage() {
  return (
    <main className="">
      <div className="container">
          <NavigationMenu />
        <h1 className="text-center text-5xl font-medium text-cyan-600">Hello There

        </h1>
      </div>
    </main>
  );
}
