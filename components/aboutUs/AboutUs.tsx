import React from "react";
import Container from "../global/Container";
import Image from "next/image";
import { Button } from "../ui/button";

function AboutUs() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row mt-16 gap-6">
        <div className="flex flex-1 flex-col gap-6">
          <div className="text-accent text-center lg:text-left">ABOUT US</div>
          <div>
            <h2 className="h2 tracking-tight leading-tight mb-3 text-center lg:text-left">
              Strategy-led <span className="text-accent">design </span>in every
              detail
            </h2>
            <p className="font-light leading-snug tracking-tight text-sm lg:text-base text-center lg:text-left">
              Founded in 2007, Sparch is specializing in providing innovative
              services such as website design, brand identity and marketing
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Button
              variant="destructive"
              size="lg"
              className="bg-accent hover:bg-accent-hover"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            src="/images/aboutUs.jpg"
            width={500}
            height={250}
            alt="aboutUs"
            className="object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </Container>
  );
}

export default AboutUs;
