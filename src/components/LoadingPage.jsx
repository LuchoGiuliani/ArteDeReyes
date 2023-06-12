import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function LoadingPage({ onLoad }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      onLoad();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [onLoad]);

  return (
    show && (
      <div className="loading-page w-full h-screen">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="relative text-3xl text-white sm:text-9xl drop-shadow-2xl art_reyes">
            <span className="title-animation ">
              <span className="fade-in">B</span>
              <span className="fade-in">I</span>
              <span className="fade-in">E</span>
              <span className="fade-in">N</span>
              <span className="fade-in">V</span>
              <span className="fade-in">E</span>
              <span className="fade-in">N</span>
              <span className="fade-in">I</span>
              <span className="fade-in">D</span>
              <span className="fade-in">O</span>
              <span className="fade-in">S</span>
            </span>
          </h1>
        </div>
      </div>
    )
  );
}

export default LoadingPage;
