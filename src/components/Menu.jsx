import React from 'react'

function Menu(props) {
  return (
    <>  
    <div className='max-w-[80px] sm:max-w-full flex justify-end ' onClick={props.handleClick} >
        <img src="/Menu.png" className={`icon w-[70%] ${props.clicked ? 'open' : ''}`} alt="" />
    </div>
    </>
  )
}

export default Menu