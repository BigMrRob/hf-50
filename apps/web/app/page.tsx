"use client";

import { Navigation } from "@/components/home-section/navigation";
import { Hero } from "@/components/home-section/hero";
import Model from "@/components/home-section/model";
import { StateTabs } from "@/components/home-section/state-tabs";
import { Features } from "@/components/home-section/features";
import { StateCoverage } from "@/components/home-section/state-coverage";
import { ContactForm } from "@/components/home-section/contact-form-new";
import { Footer } from "@/components/home-section/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navigation />
      <Hero />
      <Model />
      <Features />
      <StateCoverage />
      <StateTabs />
      <ContactForm />
      <Footer />
    </div>
  );
}
