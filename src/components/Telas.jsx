import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Telas() {
  return (
    <div id="telas" className="p-4 z-30">
      <div className=" flex justify-center ">
        <h1 className="text-5x1  font-normal pt-16 sm:text-6xl">Almohadones</h1>
      </div>
      <div className="mix_grid  p-4	">
        <div className="mix_grid1 ">
          <div className="flex flex-col justify-center gap-16">
            <img className="mix1 w-fit mix   " src="/mix_grid3.png" alt="" />
            <div className="text_container">
              <h1 className=" text-base text-center text">
                Perpetuar el amor a una mascota con un retrato de él, detalles
                que valen la pena.
              </h1>
            </div>
          </div>
          <img className="mix2 mix " src="/mix_grid2.png" alt="" />
          <img className="mix3 mix " src="/mix_grid9.png" alt="" />
          <img className="mix4 mix " src="/mix_grid4.png" alt="" />
          <img className="mix5 mix " src="/mix_grid5.png" alt="" />
        </div>
        <div className="mix_grid2">
          {/* <img className="mix6" src="/mix_grid8.png" alt="" /> */}
          <img className="mix7 mix" src="/mix_grid7.png" alt="" />
        </div>
        <div className="mix_grid3">
          <img className="mix8 mix" src="/mix_grid8.png" alt="" />
          <img className="mix9 mix" src="/mix_grid3.png" alt="" />
          <img className="mix10 mix" src="/mix_grid10.png" alt="" />
          <img className="mix11 mix" src="/mix_grid11.png" alt="" />
          {/* <img className="mix12" src="/mix_grid12.png" alt="" /> */}
          <img className="mix13 mix" src="/mix_grid13.png" alt="" />
        </div>
        <div className="mix_grid4">
          <img className="mix14 mix " src="/mix_grid14.png" alt="" />
        </div>
        <div className="mix_grid5 pb-14">
          {/* <img className="mix15" src="/mix_grid10.png" alt="" /> */}
          <img className="mix16 mix" src="/mix_grid16.png" alt="" />
          <img className="mix17 mix" src="/mix_grid17.png" alt="" />
        </div>

      
      </div>
    </div>
  );
}
