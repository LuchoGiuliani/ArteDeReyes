import React from "react";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Description() {
  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  });

  const [cursorVariant, setCursorVariant] = useState("default");
  console.log(mousePosition);

  useEffect(()=>{
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
      console.log(e);
    }
      window.addEventListener("mousemove", mouseMove);

      return () => {
        window.removeEventListener("mousemove", mouseMove)
      }
    }, [])

    const variants = {
      default:{
        x: mousePosition.x -10,
        y: mousePosition.y -10
      },
      text:{
        height: 150,
        width: 150,
        x: mousePosition.x -75 ,
        y: mousePosition.y -75,
       
        

      }
    }

    const textEnter = () => setCursorVariant("text")
    const textLeave = () => setCursorVariant("default")
  return (
    <div className="flex justify-center">
       <motion.div
        className='cursor'
        variants={variants}
        animate= {cursorVariant}
       />
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="relative  top-4 left-[10%] description text-center text-xs sm:text-lg  max-w-xl p-4 pb-7 ">
      Gracias por pasar a conocer nuestra página! 
Somos Liliana y Mariana REYES, artistas de esencia.
Desde muy pequeñas incursionamos en el mundo creativo, y no hace mucho, fusionamos nuestros talentos para trabajar juntas en las mismas obras, logrando así un mejor resultado.
Es una experiencia de hermanas maravillosa, en la cual potenciamos nuestras capacidades. 
Esperamos que lo disfruten!
      </h1>
      <img className="relative w-[20%] top-28 right-10" src="/arrow.svg" alt="" />
      {/* <div>
        <img src="/pencil.svg" alt="" className="pencil2  fixed hover:sepia" />
        <img src="/brush.svg" alt="" className="brush fixed  top-2 hover:sepia" />
        <img src="/paintbrush.svg" alt="" className="pencil1 -z-0  hover:sepia" />
        <img src="/spiral.svg" alt="" className="pencil fixed hover:sepia" />
       
        </div> */}
    </div>
  );
}
