import React, { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import AOS from "aos";




export default function Oleo() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [opacity, setOpacity] = useState(1);
  const closePreview = () => {
    document.getElementById("preview-image").classList.add("fade-out");
    setIsPreviewOpen(false);
    setTimeout(() => {
      setPreviewImage(null);
    }, 500);
  };

  const [images, setImages] = useState([
    "oleo1.png",
    "oleo9.png",
    "oleo3.png",
    "oleo4.png",
    "oleo5.png",
    "oleo2.png",
    "oleo7.png",
    "oleo8.png",
    "oleo10.png",
    "oleo11.png",
  ]);

  const [currentImages, setCurrentImages] = useState(images);
  const [previewImage, setPreviewImage] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const scrollCount = useRef(0);

  const openPreview = (image) => {
    setPreviewImage(image);
    setIsPreviewOpen(true);
  };

  const handleScroll = () => {
    scrollCount.current += 1;
    if (scrollCount.current === 2) {
      setPreviewImage(null);
      scrollCount.current = 0;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      
    },

    fadeIn: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 2,
      },
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className=" bg_oleo bg-white "    onMouseEnter={textEnter} onMouseLeave={textLeave} >
       <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div className={`bg_oleo ${isPreviewOpen ? "bg_oleo-open" : ""}`}>
        <div className="flex justify-center" id="oleo">
        <div
          data-aos="fade-up"
          data-aos-offset="-20"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
        >
          <h3 className=" sm:text-5xl font-normal text-center pt-16 pb-16  ">
            Pinturas de técnicas mixtas
          </h3>
          </div>
        </div>
        <div className="oleo p-6 grid grid-cols-2 justify-center justify-items-center gap-8 md:grid-cols-2">
          {currentImages.map((image, index) => (
            <img
              className="  max-h-[580px] cursor-pointer z-10"
              src={image}
              key={index}
              onClick={() => openPreview(image)}
            />
          ))}
          {previewImage && (
            <div
              className="preview-overlay"
              style={{ opacity: opacity, transition: "opacity 1s" }}
            >
              <img
                id="preview-image"
                className=" preview-image p-6 z-20"
                src={previewImage}
                onClick={closePreview}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
