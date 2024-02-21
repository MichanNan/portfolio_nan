import About from "@/components/About";
import Introduce from "@/components/Introduce";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduce />
      <About />
      <Projects />
    </main>
  );
}
