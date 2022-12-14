import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="background_footer flex justify-around items-center">
        <a href="">
          <img className='max-w-[40px] hover:scale-110' src="/github.png" alt="" /></a>
        <a href="">
          <img className='max-w-[40px] hover:scale-110'  src="/facebook.png" alt="" /></a>
        <a href="">
          <img className='max-w-[40px] hover:scale-110'  src="/instagram.png" alt="" /></a>
      </div>
    </div>
  )
}
