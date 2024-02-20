import About from "@/components/About";
import Header from "@/components/Header";
import Introduce from "@/components/Introduce";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduce />
      <About />
    </main>
  );
}
