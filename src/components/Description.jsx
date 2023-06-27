import React from "react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Description() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="description">
      <div
        className="flex relative rounded-xl pb-2 m-6 bg-[#ffefe7]   "
        data-aos="zoom-in-down"
        data-aos-anchor-placement="top-center"
        data-aos-delay="200"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
      >
        <p className=" font-semibold  top-4 left-[10%]  text-center text-xs sm:text-lg  max-w-xl p-4 pb-7  text-[#090d1d]  ">
          Gracias por pasar a conocer nuestra página! Somos Liliana y Mariana
          Reyes, artistas de esencia. Desde muy pequeñas incursionamos en el
          mundo creativo, y no hace mucho, fusionamos nuestros talentos para
          trabajar juntas en las mismas obras, logrando así un mejor resultado.
          Es una experiencia de hermanas maravillosa, en la cual potenciamos
          nuestras capacidades. Esperamos que lo disfruten!
        </p>
        <img
          className="absolute w-[20%] top-[220px] right-10"
          src="/arrow.svg"
          alt="arrow"
        />
      </div>
    </div>
  );
}
