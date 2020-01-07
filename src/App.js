import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

import watercolor from './pics/watercol_texture.jpg'
import dock from './pics/bg_elems_cabin.png'
import iland from './pics/bg_iland.png'
import mountains from './pics/bg_mountains.png'
import divers from './pics/divers_graphic1.png'
import blue_shell from './pics/seashell_blue.jpg'
import seashells from './pics/seashells_cabarete.jpg'

const bgStyle = {
  //backgroundImage: `url(${watercolor})`,
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

const containerStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: 'yellow',
  display: 'flex',
  //alignItems: 'center',
  justifyContent: 'center'
}

const rowStyle = {
  width: '50%',
  height: '100%',
  borderRadius: '1em',
  backgroundColor: 'blue',
  margin: '0em',
  padding: '1em'
}

const gridElemStyle = {
  width: '90%',
  height: '100%',
  borderRadius: '1em',
  backgroundColor: 'red',
  padding: '0.5em',
  margin: '0.25em'
}


const App = () => {
  return (
    <Container>
      <Grid/>
      <ImageBox img={dock}/>

      <p>Lorem aya hipsum yolo spatula cupcake</p>
    </Container>
  )
}


// eslint-disable-next-line react/prop-types
const ImageBox = ({img}) => {
  return (
    <Image src={img}/>
  )
}

const Grid = () => {
  return(
    <Container style={containerStyle}>
      <Row style={rowStyle} >
        <Col sm style={gridElemStyle}><ImageBox img={blue_shell}/></Col>
        <Col sm style={gridElemStyle}>Seashell Macaroni Desperate Pancake</Col>
      </Row>
      <Row style={rowStyle} >
        <Col style={gridElemStyle}>Blue Whale Yellow Hellow Ocean Strategy</Col>
        <Col style={gridElemStyle}>Motivation Whale Nightingale</Col>
        <Col style={gridElemStyle}>Pizza Romana Masco Tri Colorana</Col>
      </Row>
    </Container>
  )
}

export default App
