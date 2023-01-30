import React from "react";
import { motion } from "framer-motion";

import { useState } from "react";


import Menu from "./Menu";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="navbar_container ">
      <a
        target="_blank"
        href="https://www.instagram.com/arte.de.reyes/?hl=es"
        className="insta_img hover:scale-150  transition-transform "
      >
        <img
          src="/instagram.png"
          className="insta_img hover:scale-120 "
          alt=""
        />
      </a>

      <div className=" z-50   ">
        
        <Menu  clicked={clicked} handleClick={handleClick} />
        <div className={` bg-white sm:none  links ${clicked ? "active" : ""}`}>      
          <a className="hover:underline hover:decoration-solid text-sm  " href="#telas">Telas</a>
          <a className="hover:underline hover:decoration-solid text-sm " href="#oleo">Tec.Mixtas</a>
          <a className="hover:underline hover:decoration-solid text-sm " href="#murales">Murales</a>
        </div>
      </div>
    </div>
  );
}
