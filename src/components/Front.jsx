import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


export default function Front() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: "saturation",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="pt-10">
      <div
        id="front"
        className="flex justify-evenly items-center pt-[59px]  p-2 gap-10 sm:p-7 sm:justify-between  "
      >
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
        <div className="circle "></div>

        <div className="w-1/5 pt-4 z-50">
          <h1
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="text-3xl sm:text-9xl drop-shadow-2xl art_reyes   "
          >
            Arte De Reyes
          </h1>
        </div>

        <div className=" w-[30%]">
          <img className="min-w-[10%] " src="/front_paint.png" alt="" />
        </div>
      </div>
    </div>
  );
}
