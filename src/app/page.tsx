import HeroSection from "@/components/home/hero-section";
import ProjectsPreviewSection from "@/components/home/projects-preview-section";
import HowItWorksHome from "@/components/home/how-it-works-home";
import FeaturesHome from "@/components/home/features-home";
import HappyCustomers from "@/components/home/happy-customers";
import ServicesHome from "@/components/home/services-home";
import TestimonialsHome from "@/components/home/testimonials-home";
import PackagesHome from "@/components/home/packages-home";
import CloserLookSection from "@/components/home/closer-look-section";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white">
      <HeroSection />
      <FeaturesHome />
      <PackagesHome />
      <CloserLookSection />
      <ServicesHome />
      <ProjectsPreviewSection />
      <HowItWorksHome />
      <TestimonialsHome />
      <HappyCustomers />
    </div>
  );
}
