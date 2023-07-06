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
      height: 10,
      width:10,
      x: mousePosition.x - 14,
      y: mousePosition.y - 3,
      
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
    <div className="pt-10 px-6 flex flex-col justify-center" onMouseEnter={textEnter}
    onMouseLeave={textLeave}>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div
        id="front"
        className="flex justify-between items-center pt-12   p-6 gap-10  sm:justify-between  "
      >
        {/* <div className="circle  "></div> */}
        <div className="w-1/5  z-50">
          <div
            data-aos="fade-up"
            data-aos-offset="-20"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
          >
            <h1 className=" relative text-6xl text-white  sm:text-9xl drop-shadow-2xl art_reyes   ">
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
              alt="Buho imágen principal"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center opacity-30">
      <div
        className="rounded-xl bg-slate-50 p-3 m-4 h-fit "
        data-aos="zoom-in-down"
        data-aos-anchor-placement="top-center"
        data-aos-delay="200"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
      >
        <p className="font-bold text-[16px] max-w-[960px]   sm:text-[24px]  text-center      text-[#090d1d]  ">
          Gracias por pasar a conocer nuestra página! Somos Liliana y Mariana
          Reyes, artistas de esencia. Desde muy pequeñas incursionamos en el
          mundo creativo, y no hace mucho, fusionamos nuestros talentos para
          trabajar juntas en las mismas obras, logrando así un mejor resultado.
          Es una experiencia de hermanas maravillosa, en la cual potenciamos
          nuestras capacidades. Esperamos que lo disfruten!
        </p>
        <img
          className="absolute w-[15%] top-[220px] right-10"
          src="/arrow.svg"
          alt="arrow"
        />
      </div>
      </div>
    
    </div>
  );
}
