"use client";
import AboutPage from "@/components/about/About";
import AboutUs from "@/components/aboutUs/AboutUs";

import Slider from "@/components/home/Slider";
import Services from "@/components/servicesPage/Services";

function HomePage() {
  return (
    <>
      <Slider />
      <AboutUs />
      <Services />
      <AboutPage />
    </>
  );
}

export default HomePage;
