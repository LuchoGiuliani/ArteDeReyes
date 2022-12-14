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
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div id="front" className="flex flex-col items-center pr-14 p-2 justify-evenly gap-10 sm:p-7 sm:flex-row  ">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div onMouseEnter={textEnter} onMouseLeave={textLeave} className=" w-1/5">
        <h1 className="text-5xl drop-shadow-md sm:text-9xl ">Arte de Reyes</h1>
      </div>
      <div className=" w-[30%]">
        <img className="min-w-[180px]" src="/marcoFrances.png" alt="" />
      </div>
    </div>
  );
}
