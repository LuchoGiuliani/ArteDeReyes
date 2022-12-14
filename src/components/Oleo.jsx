import React from 'react'

export default function Oleo() {
  return (
    <div>
      <div  className='flex justify-center' id='oleo'>
        <img className=' p-8 flex justify-center max-w-xs' src="/OleoText.png" alt="" />
      </div>
      <div className=' p-10 grid grid-cols-2 justify-center justify-items-center gap-2 md:grid-cols-5'>
        <img className=' max-h-[200px] hover:scale-150 delay-75 duration-150   ' src="/oleo1.png" alt="" />
        <img className='max-h-[200px] hover:scale-150 delay-75 duration-150   ' src="/oleo2.png" alt="" />
        <img className='max-h-[200px] hover:scale-150 delay-75 duration-150    ' src="/oleo3.png" alt="" />
        <img className='max-h-[200px] hover:scale-150 delay-75 duration-150    ' src="/oleo4.png" alt="" />
        <img className='max-h-[200px] hover:scale-150 delay-75 duration-150  ' src="/oleo5.png" alt="" />
      </div>
    </div>
  )
}
