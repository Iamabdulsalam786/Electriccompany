import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import TeamSection from "../components/TeamSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
    </>
  );
}
