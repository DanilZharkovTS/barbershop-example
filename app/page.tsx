import Header from "./components/Header";
import Hero from "./components/Hero";
import Locations from "./components/Locations";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#052124] text-white">
      <Header />
      <Hero />
      <Locations />
    </main>
  );
}
