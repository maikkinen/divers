import React from 'react'
import watercolor from './pics/watercol_texture.jpg'
import dock from './pics/bg_elems_cabin.png'
import iland from './pics/bg_iland.png'
import mountains from './pics/bg_mountains.png'
import divers from './pics/divers_graphic1.png'

const bgStyle = {
  //backgroundImage: `url(${watercolor})`,
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}


const App = () => {
  return (
    <div>
      <img style={bgStyle} src={watercolor}/>
      <img src={dock}/>
      <img src={iland}/>
      <img src={mountains}/>
      <img src={divers}></img>
    </div>
  )
}

export default App
