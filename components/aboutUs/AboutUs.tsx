import React from "react";
import Container from "../global/Container";
import Image from "next/image";
import { Button } from "../ui/button";

function AboutUs() {
  return (
    <Container>
      <div className="flex mt-16 h-[600px] gap-6">
        <div className="flex flex-1 flex-col gap-16 ">
          <div className="text-accent">ABOUT US</div>
          <div>
            <h2 className="h2 tracking-tight leading-tight mb-3">
              Strategy-led <span className="text-accent">design </span>in every
              detail
            </h2>
            <p className="font-light leading-snug -tracking-tighter">
              Founded in 2007, Sparch is specializing in providing innovative
              services such as website design, brand identity and marketing
            </p>
          </div>
          <div>
            <Button
              variant="destructive"
              size="lg"
              className="bg-accent hover:bg-accent-hover"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-end ">
          <Image
            src="/images/aboutUs.jpg"
            width={500}
            height={250}
            alt="aboutUs"
          />
        </div>
      </div>
    </Container>
  );
}

export default AboutUs;
