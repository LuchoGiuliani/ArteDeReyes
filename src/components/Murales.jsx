import React from 'react'

export default function Murales() {
  return (
    <div id='murales'>
      <div  className='flex justify-center ' id='murales'>
        <h1 className='font-normal pt-12 pb-12 text-[36px]  sm:text-6xl   text-zinc-800'>  Murales</h1>
      </div>
      <div className=' m-3 shadow-2xl flex justify-center items-center gap-8 flex-col'>
        <div data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"> 
          <img className='mural1 rounded-lg max-h-[800px]' src="/mural1.png" alt="" />
        </div>
        <div data-aos="fade-left"
            data-aos-offset="-200"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"> 
          <img className='mural1 rounded-lg max-h-[800px]' src="/shark.png" alt="" />
        </div>
        <div className='pb-6' data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"> 
          <img className='mural2 rounded-lg max-h-[800px]' src="/mural2.png" alt="" />
          
        </div>
        <div className='pb-6' data-aos="fade-left"
            data-aos-offset="-200"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"> 
          <img className='mural3 rounded-lg max-h-[800px]' src="/mural3.png" alt="" />
          
        </div>
      </div>
       
      
    </div>
  )
}
