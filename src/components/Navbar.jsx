import React from "react";
import {HiMenuAlt4} from 'react-icons/hi'
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import styled from "styled-components"

import Description from "./Description";
import Front from "./Front";
import Telas from "./Telas";
import Oleo from "./Oleo";
import Murales from "./Murales";
import Menu from "./Menu";

export default function Navbar() {
  const [clicked,setClicked] = useState(false)
  console.log(clicked);

  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <div className="navbar_container ">
      <a target="_blank" href="https://www.instagram.com/arte.de.reyes/?hl=es" className="insta_img hover:scale-150 max-h-3 transition-transform " ><img src="/instagram.png" className="insta_img hover:scale-120 " alt="" /></a>
  
      <div>
        <Menu clicked={clicked} handleClick={handleClick} />
      <div className={`links ${clicked ? 'active' : ''}` }>
        <a href="#front">Principal</a>
        <a href="#telas">Télas</a>
        <a href="#oleo">Óleo</a>
        <a href="#murales">Murales</a>
      </div>
      </div>
    
 
    </div>
  );
}
