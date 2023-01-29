import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Telas() {
  const [angle, setAngle] = useState(0);

  const handleMouseOver = () => {
    setAngle(90);
  } 

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseOut = () => {
    setAngle(0);
  }

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
    <div id="telas" className="p-4 z-30">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div className=" flex justify-center ">
        <h1 className="text-4x1  font-normal pt-12 sm:text-6xl">Almohadones</h1>
      </div>
      <div className="mix_grid  p-4	">
       <div className="mix_grid1 ">
        <div className="flex flex-col justify-center gap-16">
        <img className="mix1 w-fit  " src="/mix_grid3.png" alt="" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  /> 
        <div className="text_container"> <h1 className=" text-base text-center text">Perpetuar el amor a una mascota con un retrato de él, detalles que valen la pena. </h1></div>
        </div>
        <img className="mix2  " src="/mix_grid2.png" alt="" />
        <img className="mix3    " src="/mix_grid9.png" alt="" />
        <img className="mix4   " src="/mix_grid4.png" alt="" />
        <img className="mix5  " src="/mix_grid5.png" alt="" />
        </div>
        <div className="mix_grid2">
        {/* <img className="mix6" src="/mix_grid8.png" alt="" /> */}
        <img className="mix7" src="/mix_grid7.png" alt="" />
        </div>
        <div className="mix_grid3">
        <img className="mix8" src="/mix_grid8.png" alt="" />
        <img className="mix9" src="/mix_grid3.png" alt="" />
        <img className="mix10" src="/mix_grid10.png" alt="" />
        <img className="mix11" src="/mix_grid11.png" alt="" />
        {/* <img className="mix12" src="/mix_grid12.png" alt="" /> */}
        <img className="mix13" src="/mix_grid13.png" alt="" />
        </div>
        <div className="mix_grid4">
        <img className="mix14 " src="/mix_grid14.png" alt="" />
        </div>
        <div className="mix_grid5 pb-8">
        {/* <img className="mix15" src="/mix_grid10.png" alt="" /> */}
        <img className="mix16" src="/mix_grid16.png" alt="" />
        <img className="mix17" src="/mix_grid17.png" alt="" />
        </div>





        {/* <div className=" max-w-max rounded-xl ml-20 mr-20 flex items-center justify-center   bg-[#edcd9e]">
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
      <div className="flex justify-center"> */}
        {/* <div className=" max-w-max rounded-xl m-12 flex columns-2 items-center justify-between   bg-[#edcd9e]">
          <div
            className="flex justify-center "
           
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
        </div> */}
      </div>
    </div>
  );
}
