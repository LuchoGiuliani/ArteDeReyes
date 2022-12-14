import React from 'react'

export default function Murales() {
  return (
    <div>
      <div  className='flex justify-center' id='murales'>
        <img  className='p-6 flex justify-center max-w-[220px]' src="/Murales.png" alt="" />
      </div>
      <div className='flex justify-center items-center gap-4 flex-col'>
        <div data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"> 
          <img className=' rounded-lg max-h-[800px]' src="/mural1.png" alt="" />
        </div>
        <div className='pb-6' data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"> 
          <img className=' rounded-lg max-h-[800px]' src="/mural2.png" alt="" />
        </div>
      </div>
    </div>
  )
}
