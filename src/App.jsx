import { Navbar, Hero, Telas, Oleo, Murales, Footer } from "./components";

import "./App.css";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const main = useRef();
  const colores = ["#3e4f3f", "#ece8e1"];

  useEffect(() => {
    const boxes = gsap.utils.toArray(".box");
    const box3 = document.querySelector(".box3");

    ScrollTrigger.create({
      trigger: box3,
      start: "680",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to(box3, {
          duration: 1,
          color: "white",
        });
      },
      onLeaveBack: () => {
        gsap.to(box3, {
          duration: 1,
          color: "black",
        });
      },
    });
    boxes.forEach((box) => {
      ScrollTrigger.create({
        trigger: box,
        start: "680",
        end: "bottom bottom",

        onEnter: () => {
          gsap.to(box, {
            backgroundColor: "#3e4f3f",
            duration: 1,
          });
        },
        onLeaveBack: () => {
          gsap.to(box, {
            backgroundColor: "#ece8e1",
            duration: 1,
          });
        },
      });
    });
  }, []);

  useEffect(() => {
    const boxes = gsap.utils.toArray(".box2");
    boxes.forEach((box) => {
      ScrollTrigger.create({
        trigger: box,
        start: "top 500px",
        end: "bottom bottom",

        onEnter: () => {
          gsap.to(box, {
            color: "white",
            backgroundColor: "rgb(138,101,66,1)",
            duration: 1,
          });
        },
        onLeaveBack: () => {
          gsap.to(box, {
            backgroundColor: "rgb(215,179,111,1)",
            duration: 1,
          });
        },
      });
    });
  }, []);

  return (
    <div ref={main} className="App box background">
      <a href="#front" className="wsp  hover:scale-110 z-50">
        <img src="/whatsapp.png" alt="" />
      </a>
      <div className="main_container h-full ">
        <Navbar />
        <div className="bg-hero h-screen">
          <Hero className="" />
        </div>
      </div>
      <Oleo className="box" />

      <Telas className="box2" />
      <Murales className="" />
      <Footer />
    </div>
  );
}

export default App;
