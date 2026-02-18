import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Download } from "@/components/download";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      {/* Background noise texture */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.35] [background-image:radial-gradient(rgba(255,255,255,0.08)_0.5px,transparent_0.5px)] [background-size:2px_2px]" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Download />
        <Footer />
      </div>
    </main>
  );
}
