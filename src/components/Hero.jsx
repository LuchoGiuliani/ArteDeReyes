import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { zoomIn, fadeIn, textVariant } from "../utils/motion";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

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
      height: 80,
      width:80,
      x: mousePosition.x - 45,
      y: mousePosition.y - 45,
      
    },

    fadeIn: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 2,
      },
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="pt-10  " onMouseEnter={textEnter}
    onMouseLeave={textLeave}>
      <div
        id="front"
        className="flex justify-evenly items-center pt-12   p-2 gap-10 sm:p-7 sm:justify-between  "
      >
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
        {/* <div className="circle  "></div> */}
        <div className="w-1/5  z-50">
          <div
            data-aos="fade-up"
            data-aos-offset="-20"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
          >
            <h1 className=" relative text-3xl text-white  sm:text-9xl drop-shadow-2xl art_reyes   ">
              ARTE DE REYES
            </h1>
          </div>
        </div>

        <div className="">
          <div
            className="pb-6"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
          >
            <img
              className="w-[124px] sm:w-[248px] lg:w-[496px] rounded-full drop-shadow-2xl border-4 border-white	hover: "
              src="/buho2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
