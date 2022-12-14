import React from 'react'

function Menu(props) {
  return (
    <>  
    <div className='pb-2' onClick={props.handleClick} >
        <img src="/Menu.png" className={`icon w-[70%] ${props.clicked ? 'open' : ''}`} alt="" />
    </div>
    </>
  )
}

export default Menu