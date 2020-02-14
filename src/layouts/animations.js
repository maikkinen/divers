import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ImageBox from '../components/ImageBox'
import VideoBox from '../components/VideoBox'
import CardBox from '../components/Card'
import Ball from '../animations/Ball'
import iland from '../pics/bg_iland.png'

import sarjis1 from '../pics/J_O_H_sarjis.png'

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

const AnimationsGrid = () => {
  return (
    <Container style={containerStyle}>

      <Row style={rowStyle} >
        <Col style={gridElemStyle}></Col>
        <Col style={gridElemStyle}>
          <Ball />
          <ImageBox image={iland} style={{ opacity: '0.8', height: '80%' }} />
        </Col>
        <Col style={gridElemStyle}>
          <ImageBox image={sarjis1} style={{ height: '50vh' }} />
        </Col>
        <Col style={fullWidthRow}>
        </Col>
        <Col style={fullWidthRow}>
        </Col>
      </Row>

      <Row style={rowStyle}>
        <Col style={gridElemStyle}></Col>
        <Col style={gridElemStyle}></Col>
        <Col style={gridElemStyle}></Col>
      </Row>

      <Row style={rowStyle} >
        <Col style={gridElemStyle}></Col>
        <Col style={gridElemStyle}></Col>
        <Col style={gridElemStyle}></Col>
      </Row>
    </Container>
  )
}
//<VideoBox video={divergif} />
export default AnimationsGrid