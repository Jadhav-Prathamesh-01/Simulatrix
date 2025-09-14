import type { Route } from "./+types/home";
import Header from "../components/Header";
import HeroSection from "../components/sections/HeroSection";
import FeaturesShowcase from "../components/sections/FeaturesShowcase";
import CreationSpeed from "../components/sections/CreationSpeed";
import MainFeatures from "../components/sections/MainFeatures";
import CreativeFlexibility from "../components/sections/CreativeFlexibility";
import FineTunedControl from "../components/sections/FineTunedControl";
import ProductionReadiness from "../components/sections/ProductionReadiness";
import WorkflowIntegration from "../components/sections/WorkflowIntegration";
import EnterpriseFeatures from "../components/sections/EnterpriseFeatures";
import Testimonials from "../components/sections/Testimonials";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Meshy AI - Free Image to 3D Model Generator" },
    { name: "description", content: "Create 3D models from text and images with AI. Transform text and images into stunning 3D models in seconds with our text & image to 3D model tool—no experience required!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <FeaturesShowcase />
      <CreationSpeed />
      <MainFeatures />
      <CreativeFlexibility />
      <FineTunedControl />
      <ProductionReadiness />
      <WorkflowIntegration />
      <EnterpriseFeatures />
      <Testimonials />
      <Footer />
    </div>
  );
}
