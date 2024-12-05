"use client";
import Link from "next/link";
import { useState } from "react";

function Logo() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link className="flex justify-center items-center relative z-[60]" href="/">
      <div
        className="relative inline-block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h3 className="h3 text-gray-400 relative flex gap-2 left-2">
          <span className=" text-accent relative z-10 ">Cansu</span>
          <span className="relative ">&</span>
          <span className="relative">Design</span>
        </h3>
        {/* Üst Çizgi */}
        <span
          className={` text-accent absolute left-0 top-0 h-[1px] bg-current transition-all duration-500 ${
            hovered ? "w-[40%]" : "w-0"
          }`}
        ></span>
        {/* Alt Çizgi */}
        <span
          className={` text-accent absolute left-0 bottom-0 h-[1px] bg-current transition-all duration-500 ${
            hovered ? "w-[40%]" : "w-0"
          }`}
        ></span>
        <span
          className={` text-accent absolute  left-0 top-0 w-[1px] bg-current transition-all duration-500 ${
            hovered ? "h-full" : "h-0"
          }`}
        ></span>
      </div>
    </Link>
  );
}

export default Logo;
