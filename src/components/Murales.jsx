import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
export default function Murales() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    
    <div id='murales'>
      <div  className='flex justify-center ' id=''>
        <h1 className='font-semibold pt-16 pb-12 text-[36px] tracking-wide	  sm:text-6xl    text-zinc-800'>  Murales</h1>
      </div>
      <div className=' m-3 mb-0  flex justify-center items-center gap-8 flex-col'>
        <div data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"> 
          <img className='mural1 rounded-lg max-h-[800px]' src="/mural1-min.png" alt="Mural 1" />
        </div>
        <div data-aos="fade-up"
            data-aos-offset="-200"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"> 
          <img className='mural2 rounded-lg max-h-[800px]' src="/shark.webp" alt="Mural 2" />
        </div>
        <div className='pb-6' data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"> 
          <img className='mural3 rounded-lg max-h-[800px]' src="/mural2-min.png" alt="Mural 3" />
          
        </div>
        <div className='pb-6' data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"> 
          <img className='mural4 rounded-lg max-h-[800px]' src="/mural3-min.png" alt="Mural 4" />
          
        </div>
      </div>
       
      
    </div>
  )
}
