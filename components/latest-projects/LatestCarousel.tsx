import React, { useState } from "react";
import card1 from "@/public/latest-images/01.jpg";
import card2 from "@/public/latest-images/02.jpg";
import card3 from "@/public/latest-images/03.jpg";
import card4 from "@/public/latest-images/04.jpg";
import LatestProjectCardPage from "./LatestProjectCardPage";

export type Data = {
  img: string;
  projectName: string;
  projectDetails: string;
};
const carouselImages = [card1, card2, card3, card4, card1, card2, card3, card4];
const sliderData = [
  {
    id: 1,
    img: "/latest-images/01.jpg",
    projectName: "Residential",
    projectDetails: "Bla bla",
  },
  {
    id: 2,
    img: "/latest-images/02.jpg",
    projectName: "Residential",
    projectDetails: "Bla bla1",
  },
  {
    id: 3,
    img: "/latest-images/03.jpg",
    projectName: "Residential",
    projectDetails: "Bla bla2",
  },
  {
    id: 4,
    img: "/latest-images/04.jpg",
    projectName: "Residential2",
    projectDetails: "Bla bla3",
  },
  {
    id: 5,
    img: "/latest-images/01.jpg",
    projectName: "Residential",
    projectDetails: "Bla bla",
  },
  {
    id: 6,
    img: "/latest-images/02.jpg",
    projectName: "Residential",
    projectDetails: "Bla bla1",
  },
  {
    id: 7,
    img: "/latest-images/03.jpg",
    projectName: "Residential",
    projectDetails: "Bla bla2",
  },
  {
    id: 8,
    img: "/latest-images/04.jpg",
    projectName: "Residential2",
    projectDetails: "Bla bla3",
  },
  {
    id: 9,
    img: "/latest-images/01.jpg",
    projectName: "Residential",
    projectDetails: "Bla bla",
  },
  {
    id: 10,
    img: "/latest-images/02.jpg",
    projectName: "Residential",
    projectDetails: "Bla bla1",
  },
  {
    id: 11,
    img: "/latest-images/03.jpg",
    projectName: "Residential",
    projectDetails: "Bla bla2",
  },
  {
    id: 12,
    img: "/latest-images/04.jpg",
    projectName: "Residential2",
    projectDetails: "Bla bla3",
  },
];

function LatestCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < carouselImages.length - 4) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Carousel Container */}
      <div className="flex items-center ">
        <button
          className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full"
          onClick={handlePrevious}
        >
          {"<"}
        </button>
        <button
          className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full"
          onClick={handleNext}
        >
          {">"}
        </button>
        <div className="overflow-hidden w-full">
          {/* Track */}
          <div
            className="flex transition-transform duration-1000 "
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
            }}
          >
            {sliderData.map((item) => (
              <LatestProjectCardPage
                key={item.id}
                img={item.img}
                projectName={item.projectName}
                projectDetails={item.projectDetails}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestCarousel;
