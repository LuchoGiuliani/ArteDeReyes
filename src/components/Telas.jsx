import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Telas() {
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
      border: "dotted",
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: "multiply",
    },
    text2: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: "saturation",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const textEnter2 = () => setCursorVariant("text2");

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="telas" className="">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div className=" flex justify-center ">
        <img
          className=" p-4 flex justify-center max-w-xs"
          src="/telas.png"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <div className=" max-w-max rounded-xl ml-20 mr-20 flex items-center justify-center   bg-[#edcd9e]">
          <div
            data-aos="zoom-in-down"
            data-aos-delay="100"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <img className="max-h-[600px] p-2 md:p-8" src="/mix.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" max-w-max rounded-xl m-12 flex columns-2 items-center justify-between   bg-[#edcd9e]">
          <div
            className="flex justify-center w-fit"
           
          >
            <img className="p-2 w-[90%] min-w-[100px] max-h-[600px] md:p-8" src="/buho.png" alt="" />
          </div>
          <div
            className="flex justify-center"
            
          >
            <img
              className="p-2 w-[90%] min-w-[100px] max-h-[600px] md:p-8"
              src="/libelula.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="marco_bull  p-10">
        <img
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="flex justify-center max-h-lg md:max-w-[600px] "
          src="/marcoBull.png"
          alt=""
        />
        <p className="p-8 text-center text-lg">
          Perpetuar el amor a una mascota con un retrato de él, detalles que
          valen la pena.
        </p>
      </div>
      <div className=" justify-items-center items-center grid_containter grid grid-cols-2 gap-2 ">
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className=" flex justify-center m-4 w-fit"
        >
          <img
            className=" rounded-[26px] shadow-xl ease-in-out sm:max-w-[300px] "
            src="/buho_grid.png"
            alt=""
          />
        </div>
        <div
          onMouseEnter={textEnter2}
          onMouseLeave={textLeave}
          className=" flex justify-center m-4 w-fit"
        >
          <img className="rounded-[26px] shadow-xl sm:max-w-[300px]" src="/bull_frances.png" alt="" />
        </div>
        <div
          onMouseEnter={textEnter2}
          onMouseLeave={textLeave}
          className=" flex justify-center m-4 w-fit"
        >
          <img className="rounded-[26px] shadow-xl sm:max-w-[300px] " src="/conejo.png" alt="" />
        </div>
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className=" flex justify-center m-4 w-fit"
        >
          <img className="rounded-[26px] shadow-xl sm:max-w-[300px] " src="/pets.png" alt="" />
        </div>
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className=" flex justify-center m-4 w-fit"
        >
          <img className="rounded-[26px] shadow-xl sm:max-w-[300px]" src="/gato.png" alt="" />
        </div>
        <div
          onMouseEnter={textEnter2}
          onMouseLeave={textLeave}
          className=" flex justify-center m-4 w-fit"
        >
          <img className="rounded-[26px] shadow-xl sm:max-w-[300px]" src="/abeja.png" alt="" />
        </div>
      </div>
    </div>
  );
}
