"use client";
import Logo from "./Logo";
import { AnimatePresence } from "framer-motion";

import NavLinks from "./NavLinks";
import { useState } from "react";
import Nav from "./Nav";
function Navbar() {
  const [navActive, setNavActive] = useState(false);

  return (
    <header className="fixed right-0 left-0 top-0 z-[60] bg-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center m-4 ">
          <div className="flex justify-between items-center gap-24">
            <Logo />

            <div className="hidden md:flex relative items-center space-x-4  ">
              <NavLinks />
            </div>
          </div>

          <div>
            <div>
              <p className="font-light hidden md:flex relative text-gray-500">
                +90 555 55 55
              </p>
            </div>
            <div className="block md:hidden">
              <button
                onClick={() => setNavActive(!navActive)}
                className="w-8 h-6 text-accent relative  flex items-center justify-center z-[60] outline-none"
              >
                <span
                  className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
                    navActive ? "top-1/2 rotate-45" : "top-0 translate-y-0"
                  }`}
                ></span>
                <span
                  className={`w-full h-[1.5px] bg-current absolute left-0  transition-opacity duration-300 ${
                    navActive ? "opacity-0" : "top-1/2"
                  }`}
                ></span>
                <span
                  className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
                    navActive ? "top-1/2 -rotate-45" : "bottom-0 translate-y-0"
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {navActive && <Nav setNavActive={setNavActive} />}
        </AnimatePresence>
      </div>
    </header>
  );
}
export default Navbar;
