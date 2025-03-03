import { motion } from "framer-motion";
import NavList from "./NavList";

const heightAnimation = {
  initial: {
    height: 0,
  },

  open: {
    height: "95vh",
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] },
  },
  close: {
    height: 0,
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] },
  },
};

type NavProps = {
  setNavActive: (active: boolean) => void;
};

function Nav({ setNavActive }: NavProps) {
  return (
    <motion.nav
      variants={heightAnimation}
      initial="initial"
      exit="close"
      animate="open"
      className="bg-black overflow-hidden absolute z-[50] -top-full w-full"
    >
      <div className="container mx-auto h-full flex items-center justify-center">
        <NavList setNavActive={setNavActive} />
      </div>
    </motion.nav>
  );
}

export default Nav;
