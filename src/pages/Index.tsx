import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { StayOptions } from "@/components/StayOptions";
import { Amenities } from "@/components/Amenities";
import { Events } from "@/components/Events";
import { VenueDetails } from "@/components/VenueDetails";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <StayOptions />
      <Amenities />
      <Events />
      <VenueDetails />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
