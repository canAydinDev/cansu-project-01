import { AnimatePresence } from "framer-motion";
import React from "react";
import BackgroundImage from "./BackgroundImage";
import SlideInfo from "./SlideInfo";
import Slides from "./Slides";
import Controls from "./Controls";

import { Cormorant_Upright } from "next/font/google";

const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant_upright",
});

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

function Slider() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });
  return (
    <main
      className={`${cormorant_upright.className} relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full">
          <div className="flex  h-full w-full grid-cols-10 flex-col md:grid">
            {/*left slider content*/}
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            {/*slider right carousel content*/}
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "/1.png",
    location: "Costa Rica",
    description: "Bla bla",
    title: "Nayara Camp",
  },
  {
    img: "/2.png",
    title: "Columbila",
    description: "Bla bla bla",
    location: "TOWN OF CATAGANA",
  },
  {
    img: "/3.png",
    title: "Masai Mura",
    description: "Cla Cla",
    location: "VILLA ROSE",
  },
  {
    img: "/4.png",
    title: "Angkor Wa",
    description: "Dla Dla Dla",
    location: "COMBODIA",
  },
  {
    img: "/7.png",
    title: "Bali",
    description: "Bla bla Dla",
    location: "Indonesia",
  },
];

const initData = sliderData[0];

export default Slider;
