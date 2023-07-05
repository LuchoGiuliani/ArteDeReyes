import React, { useEffect, useState } from "react";
import { TelasGroup1, TelasGroup2 } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

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
      height: 80,
      width:80,
      x: mousePosition.x - 45,
      y: mousePosition.y - 45,
      mixBlendMode: "multiply",
    },
  };
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div
      id="telas"
      className="p-4 z-30 box2 "
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
    >
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <h3 className=" tracking-tight sm:text-5xl font-normal text-center pt-12 sm:pt-[196px] pb-12">
        Almohadones
      </h3>

      <div className="flex gap-4 flex-wrap items-center justify-center lg:pt-16	 ">
        {TelasGroup1.map((telas) => (
          <img
            className=" border img_telas border-black bg-black  rounded-full w-[120px] h-[120px] sm:h-[240px] sm:w-[260px] xl:w-[260px]  flex-wrap flex justify-center items-center  "
            src={telas.img}
            alt="imagenTelas"
          />
        ))}
      </div>

      <div className="mix_grid  p-6 sm:p-16	">
        <div className="mix_grid2">
          <img
            className="mix7 img_telas  border border-black bg-black  rounded-full "
            src="/mix_grid7-min.png"
            alt="imagen Telas"
          />
        </div>
        <div className="mix_grid3">
          {TelasGroup2.map((telas) => (
            <img
              className=" img_telas  border border-black bg-black  rounded-full w-[120px] h-[120px] sm:h-[240px] sm:w-[260px] xl:w-[260px] flex-wrap flex justify-center items-center"
              src={telas.img}
              alt="imagenTelas"
            />
          ))}
          <h1 className="text-center sm:text-2xl z-90">
            Cualquier duda o consulta, <br /> no dudes en comunicarte via <br />{" "}
            <a className=" text-green-600 z-90" href="#">
              WhatsApp
            </a>
          </h1>
          <img
            className=" img_telas border border-black bg-black  rounded-full w-[120px] sm:h-[240px] sm:w-[260px] xl:w-[260px] flex-wrap flex justify-center items-center drop-shadow-2xl "
            src="/mix_grid13-min.png"
            alt="imagen telas"
          />
        </div>
        <div className="mix_grid4 justify-center flex">
          <img
            className="mix14 img_telas   border border-black bg-black rounded-[1.7rem]  w-[80%] "
            src="/mix_grid14-min.png"
            alt=" imagen telas"
          />
        </div>
        <div className="mix_grid5 pb-14 flex flex-row flex-wrap justify-center">
          <img
            className="mix16 img_telas   border border-black bg-black  rounded-xl max-w-[280px]"
            src="/mix_grid16.png"
            alt=" imagen telas"
          />
          <img
            className="mix17 img_telas   border border-black bg-black  rounded-xl  sm:max-w-[440px] max-w-[340px]"
            src="/mix_grid17.png"
            alt=" imagen telas"
          />
        </div>
      </div>
    </div>
  );
}
