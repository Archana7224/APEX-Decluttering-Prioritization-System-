import React from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import BotPenguin from "../components/BotPenguin";
import Features from "../components/Features";
import Platforms from "../components/SmartPlatforms";
import About from "../components/About";
import Team from "../components/Team";
import Support from "../components/HelpSupport";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <BotPenguin />
        <Features />
        <Platforms />
        <About />
        <Team />
        <Support />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
