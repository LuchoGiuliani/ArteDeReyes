import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Navbar from './components/Navbar'
import Front from './components/Front'
import Telas from './components/Telas'
import Description from './components/Description'
import Oleo from './components/Oleo'
import Murales from './components/Murales'
import Footer from './components/Footer'


import { motion } from 'framer-motion'

function App() {

  
 

  return (
    <div className="App background">
      <div className='wsp'><img src="/whatsapp.png" alt="" /></div>
     
     
      {/* navbar */}
      <div className='main_container h-full'>
      <Navbar />
      {/* front */}
      <Front />
      {/* description */}
      <Description />
      </div>

      {/* telas */}
      <Telas />
      {/* oleo */}
      <Oleo />
     
     {/* murales */}
     <Murales />
      {/* footer */}
      <Footer />
    
  
     
     
      
     
    </div>
  )
}

export default App
