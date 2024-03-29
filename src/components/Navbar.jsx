import React, { useState, useEffect, useRef } from "react";
import Menu from "./Menu";
import { NavbarLinks } from "../constants";

 const Navbar = () => {

  const [clicked, setClicked] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    // Add event listener to detect clicks outside of the menu
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="navbar_container ">
      <a
        target="_blank"
        href="https://www.instagram.com/arte.de.reyes/?hl=es"
        className="insta_img hover:scale-150  transition-transform "
      >
        <img
          src="/instagram.png"
          className="insta_img hover:scale-[80%] "
          alt="instagram"
        />
      </a>

      <div ref={menuRef} className="z-50">
        <Menu clicked={clicked} handleClick={handleClick} />
        <div className={`bg-white sm:none links ${clicked ? "active" : ""}`}>
          {NavbarLinks.map((link) => (
            <a
              key={link.name}
              className="hover:underline hover:decoration-solid text-sm menu"
              href={`#${link.class}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar