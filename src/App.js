import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

import watercolor from './pics/watercol_texture.jpg'
import dock from './pics/bg_elems_cabin.png'
import iland from './pics/bg_iland.png'
import mountains from './pics/bg_mountains.png'
import divers from './pics/divers_graphic1.png'
import seashells from './pics/seashells_cabarete.jpg'

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
    <Container>
      <ImageBox img={seashells}/>
      <ImageBox img={dock}/>
      <p>Lorem aya hipsum yolo spatula cupcake</p>
    </Container>
  )
}


// eslint-disable-next-line react/prop-types
const ImageBox = ({img}) => {
  return (
    <Image src={img} fluid/>
  )
}

export default App
