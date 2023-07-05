import {
  Navbar,
  Hero,
  Telas,
  Description,
  Oleo,
  Murales,
  Footer,
  LoadingPage,
} from "./components";

import "./App.css";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const main = useRef();

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // if (loading) {
  //   return <LoadingPage onLoad={() => setLoading(false)} />;
  // }

  useEffect(() => {
    const boxes = gsap.utils.toArray(".box");
    const box2 = document.querySelector(".box3");
    const scrolling = ScrollTrigger.create({
      trigger: box2,
      start: "680",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to(box2, {
          duration: 1,
          overwrite: "auto",
          color: "white",
        });
      },
      onLeaveBack: () => {
        gsap.to(box2, {
          duration: 1,
          overwrite: "auto",
        });
      },
    });
    console.log(scrolling);

    boxes.forEach((box) => {
      ScrollTrigger.create({
        trigger: box,
        start: "680",
        end: "bottom bottom",

        onEnter: () => {
          gsap.to(box, {
            backgroundColor: "#3e4f3f",
            duration: 1,
            overwrite: "auto",
            color: "white",
          });
        },
        onLeaveBack: () => {
          gsap.to(box, {
            backgroundColor: "gray",
            duration: 1,
            color: "gray",
            overwrite: "auto",
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  useEffect(() => {
    const boxes = gsap.utils.toArray(".box2");

    boxes.forEach((box) => {
      ScrollTrigger.create({
        
        trigger: box,
        start: "top top",
        end: "bottom bottom",

        onEnter: () => {
          gsap.to(box, {
          
            backgroundColor: "rgb(138,101,66,1)",

            duration: 1,
            overwrite: "auto",
          });
        },
        onLeaveBack: () => {
          gsap.to(box, {
            backgroundColor: "rgb(215,179,111,1)",
            duration: 1,
            overwrite: "auto",
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
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
          {/* <Description /> */}
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
