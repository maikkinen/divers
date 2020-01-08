import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ImageBox from './ImageBox'

import dock from '../pics/bg_elems_cabin.png'
import iland from '../pics/bg_iland.png'
import mountains from '../pics/bg_mountains.png'
import divers from '../pics/divers_graphic1.png'
import blue_shell from '../pics/seashell_blue.jpg'
import seashells from '../pics/seashells_cabarete.jpg'


const containerStyle = {
  margin: '0',
  padding: '0',
  width: '100%',
  minHeight: '100%',
  //backgroundImage: `url(${watercolor})`,
  display: 'flex',
  //alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden' //change this to get scrollable
}

const rowStyle = {
  width: '33%',
  height: '100%',
  borderRadius: '1em',
  //backgroundColor: 'blue',
  margin: '0em',
  padding: '1em'
}

const fullWidthRow = {
  width: '95%',
  height: '1em',
  borderRadius: '0em',
  backgroundColor: 'blue',
  margin: '0em',
  padding: '1em'
}

const imgStyle = {
  width: '120%',
  height: '200%',
  padding: '0',
  margin: '0'
}

const gridElemStyle = {
  width: '95%',
  height: '8em',
  //borderRadius: '1em',
  //backgroundColor: 'red',
  //padding: '0.5em',
  margin: '0.05em'
}


const Grid = () => {
  return (
    <Container style={containerStyle}>
      <Row style={rowStyle} >
        <Col style={gridElemStyle}></Col>
        <Col style={gridElemStyle}></Col>  
        <Col style={gridElemStyle}>
          <ImageBox image={iland} style={{opacity: '0.8', height: '100%'}}/>
        </Col>   
        
        
      </Row>
      <Row style={rowStyle}>
        <Col style={gridElemStyle}>
        </Col>
        <Col style={gridElemStyle}>
          <ImageBox image={mountains} style={{opacity: '0.5'}}/>
        </Col>
        <Col style={gridElemStyle}>
          <ImageBox image={divers} style={imgStyle}/>
        </Col>
      </Row>
      <Row style={rowStyle} >
        <Col style={gridElemStyle}></Col>
        <Col style={gridElemStyle}>
          <ImageBox image={dock} />
        </Col>
      </Row>
    </Container>
  )
}

export default Grid