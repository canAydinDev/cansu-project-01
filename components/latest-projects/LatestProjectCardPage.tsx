import { Card } from "../ui/card";

import Image from "next/image";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export type Data = {
  img: string;
  projectName: string;
  projectDetails: string;
};

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: 0.7,
      },
    },
  };
};

function LatestProjectCardPage({ img, projectName, projectDetails }: Data) {
  return (
    <div className="min-w-[25%] flex-shrink-0 group">
      <Link href="/projects">
        <Card className="h-full w-[330px] relative overflow-hidden">
          {/* Image */}
          <Image
            src={img}
            alt={`Image ${projectName}`}
            layout="responsive"
            width={330}
            height={200}
            className="w-full h-full rounded-md object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
          />
          <div className="absolute left-3 bottom-5 p-4 font-extrabold">
            <h2 className="text-white">{projectName}</h2>
          </div>
          {/* Hover Background */}
          <div className="absolute inset-0 bg-[#fbc711] opacity-0 invisible group-hover:opacity-100 group-hover:visible flex items-center justify-center transition-opacity duration-700 ease-in-out z-10">
            <div className="text-center text-white">
              <AnimatePresence>
                <motion.div
                  variants={fadeIn("down", 1)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="flex flex-col m-10 justify-between items-center"
                >
                  {projectName}
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                <motion.div
                  variants={fadeIn("down", 1)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="flex flex-col m-10 justify-between items-center"
                >
                  {projectDetails}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
}

export default LatestProjectCardPage;
