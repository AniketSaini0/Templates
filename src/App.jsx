import React from "react";
import HeroSection from "./components/HeroSection";
import GymInterior from "./components/GymInterior";
import Equipment from "./components/Equipment";
import GymTimings from "./components/GymTiming";
import MembershipPlans from "./components/MembershipPlans";
import Competitions from "./components/Competitions";
import Testimonials from "./components/Testimonials";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallary";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <GymInterior />
      <Gallery />
      <Contact />
      <Equipment />
      <GymTimings />
      <MembershipPlans />
      <Competitions />
      <Testimonials />
      <Trainers />
      <FAQ />
      <Footer />
    </div>
  );
}
export default App;
