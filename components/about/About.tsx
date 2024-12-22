import { motion } from "framer-motion";
import CountUp from "react-countup";

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

function AboutPage() {
  return (
    <motion.div
      variants={fadeIn("right", 0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex flex-col m-10 justify-between items-center"
    >
      <div className="flex flex-1 gap-x-6">
        <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
          <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
            <CountUp start={0} end={3} duration={5} suffix="+" />
          </div>
          <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
            Years of Experience
          </div>
        </div>
        <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
          <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
            <CountUp start={0} end={25} duration={5} suffix="+" />
          </div>
          <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
            Satisfied clients
          </div>
        </div>
        <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
          <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
            <CountUp start={0} end={10} duration={5} suffix="+" />
          </div>
          <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
            Finished projects
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
