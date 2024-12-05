import Link from "next/link";
import { motion, Variants } from "framer-motion";

type LinkItem = {
  href: string;
  name: string;
};

const links: LinkItem[] = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/projects", name: "Projects" },
  { href: "/news", name: "News" },
  { href: "/contact", name: "Contact" },
];

const letterAnim: Variants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: (custom: [number, number]) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.6, 0, 0.2, 1],
      delay: custom[0],
    },
  }),
  exit: (custom: [number, number]) => ({
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0, 0.2, 1],
      delay: custom[1],
    },
  }),
};

const getLetter = (name: string): JSX.Element[] => {
  return name.split("").map((letter, index) => (
    <motion.span
      key={index}
      variants={letterAnim}
      initial="initial"
      animate="enter"
      exit="exit"
      custom={[index * 0.04, (name.length - index) * 0.01]}
    >
      {letter}
    </motion.span>
  ));
};

type NavListProps = {
  setNavActive: (active: boolean) => void;
};

function NavList({ setNavActive }: NavListProps): JSX.Element {
  return (
    <ul className="flex flex-col gap-8 font-primary text-4xl font-semibold  text-accent items-center uppercase">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="flex overflow-hidden hover:text-white transition-all"
          onClick={() => setNavActive(false)} // Tıklandığında navActive'i kapat
        >
          {getLetter(link.name)}
        </Link>
      ))}
    </ul>
  );
}

export default NavList;
