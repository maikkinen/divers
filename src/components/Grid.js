import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ImageBox from './ImageBox'
import VideoBox from './VideoBox'
import CardBox from './Card'
import Ball from '../animations/Ball'
import Waves from '../animations/Waves'
import DiversBoat from '../animations/Divers'

import dock from '../pics/bg_elems_cabin.png'
import iland from '../pics/bg_iland.png'
import mountains from '../pics/bg_mountains.png'
import divergif from '../pics/diver_and_shark.gif'

const containerStyle = {
  margin: '0',
  padding: '0',
  width: '100%',
  minHeight: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden', //change this to get scrollable,
  //backgroundColor: 'yellow'
}

const rowStyle = {
  width: '33%',
  height: '100%',
  borderRadius: '1em',
  margin: '1em',
  padding: '1em',
  //backgroundColor: 'blue',
}

const fullWidthRow = {
  width: '100vw',
  height: '10vh',
  margin: '3vh',
  padding: '3vh',
  //backgroundColor: 'yellow',
}

const gridDiversStyle = {
  width: '50%',
  height: '50%',
  overflow: 'hidden',
  backgroundRepeat: 'no-repeat',
  //backgroundColor: 'red',
}

const gridElemStyle = {
  width: '30em',
  height: '15em',
  padding: '0.25em',
  margin: '1em',
  //backgroundColor: 'red',
}

const contentBoxStyle = {
  borderRadius: '1em',
}

//<VideoBox video={divergif} style={contentBoxStyle} />

const Grid = () => {
  return (
    <Container style={containerStyle}>

      <Row style={rowStyle} >
        <Col style={gridElemStyle}></Col>
        <Col style={gridElemStyle}>
          <Ball />
          <ImageBox image={iland} style={{ opacity: '0.8', height: '80%' }} />
        </Col>
        <Col style={gridElemStyle}></Col>
        
        <Col style={fullWidthRow}>
        </Col>
        
        <Col style={fullWidthRow}>
        </Col>
      </Row>

      <Row style={rowStyle}>
        <Col style={gridElemStyle}>
        </Col>
        <Col style={gridElemStyle}>
          <ImageBox image={mountains} style={{ opacity: '0.5' }} />
        </Col>
        <Col style={gridElemStyle}>
          <DiversBoat style={gridDiversStyle} />
        </Col>
        <Col style={fullWidthRow}>
        </Col>
        <CardBox/>
      </Row>

      <Row style={rowStyle} >
        <Col style={gridElemStyle}></Col>
        <Col style={gridElemStyle}>
          <ImageBox image={dock} />
        </Col>
        <Col style={gridElemStyle}></Col>
      </Row>
    </Container>
  )
}
//<VideoBox video={divergif} />
export default Grid