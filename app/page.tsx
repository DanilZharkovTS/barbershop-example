import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import Locations from "./src/components/Locations";
import HaircutsGallery from "./src/components/HaircutsGallery";
import GiftCards from "./src/components/GiftCards";
import VideoSection from "./src/components/VideoSection";
import Newsletter from "./src/components/Newsletter";
import Footer from "./src/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#052124] text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Locations />
        <HaircutsGallery />
        <GiftCards />
        <VideoSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
