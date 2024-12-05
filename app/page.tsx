"use client";
import AboutUs from "@/components/aboutUs/AboutUs";

import Slider from "@/components/home/Slider";
import Services from "@/components/servicesPage/Services";

function HomePage() {
  return (
    <>
      <Slider />
      <AboutUs />
      <Services />
    </>
  );
}

export default HomePage;
