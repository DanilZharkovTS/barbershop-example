import Header from "./components/Header";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import GiftCards from "./components/GiftCards";
import VideoSection from "./components/VideoSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#052124] text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Locations />
        <GiftCards />
        <VideoSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
