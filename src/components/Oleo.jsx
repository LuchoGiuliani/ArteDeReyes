import React from 'react'
import Carousel from './Carousel'
import ImagePreview from './font'
import ImageGrid from './ImageGrid'
import { useState, useEffect } from 'react'



export default function Oleo() {

 
  
  return (
    <div className=' bg_oleo bg-white'>
      
      
      {/* <div className=' p-10 grid grid-cols-2 justify-center justify-items-center gap-2 md:grid-cols-2'>
     
        <img className=' max-h-[580px] sm:hover:scale-105 delay-75 duration-150   ' src="/oleo1.png" alt="" />
        <img className='max-h-[580px] sm:hover:scale-105 delay-75 duration-150   ' src="/oleo2.png" alt="" />
        <img className='max-h-[580px] sm:hover:scale-105 delay-75 duration-150    ' src="/oleo3.png" alt="" />
        <img className='max-h-[580px] sm:hover:scale-105 delay-75 duration-150    ' src="/oleo4.png" alt="" />
        <img className='max-h-[580px] sm:hover:scale-105 delay-75 duration-150  ' src="/oleo5.png" alt="" />      
        <img className='max-h-[580px] sm:hover:scale-105 delay-75 duration-150  ' src="/oleo7.png" alt="" />
        <img className='max-h-[580px] sm:hover:scale-105 delay-75 duration-150  ' src="/oleo8.png" alt="" />
      </div>
      < Carousel /> */}
      < ImageGrid />
      
    </div>
  )
}
