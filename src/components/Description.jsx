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
      <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="relative z-10 top-4 left-[10%] description text-center text-xs sm:text-lg  max-w-xl p-10 ">
        Gracias por pasar a conocer nuestro página, somos Liliana y Mariana
        Reyes, nos dedicamos al arte desde pequeñas, somos un duo muy creativo y
        lo expresamos de diversas formas, pinturas al oleo, murales,
        restauración de muebles, intervención en telas, son algunas de las cosas
        que nos divierte hacer.
      </p>
      <img className="relative w-[20%] top-20 right-10" src="/arrow.svg" alt="" />
    </div>
  );
}
