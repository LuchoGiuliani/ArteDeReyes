import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Description from "./Description";
import Text from "./Letter";

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
      mixBlendMode: "multiply" ,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
<div className="">
  
    <div id="front" className="flex justify-evenly items-center  p-2 gap-10 sm:p-7 sm:justify-between  ">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div className="circle rounded-[50%]"></div>
      <div  className="w-1/5">
       
        <h1  onMouseEnter={textEnter} onMouseLeave={textLeave}  className=" z-50 text-3xl   sm:text-9xl drop-shadow-2xl art_reyes  ">Arte De Reyes</h1>
      </div>
     
      <div className=" w-[30%]">
        <img className="min-w-[10%] " src="/front_paint.png" alt="" />
      </div>
   
    </div>
   
    </div>
    
  );
}
