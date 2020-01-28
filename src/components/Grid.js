import React from 'react'
import 'react-super-responsive-table/dist/SuperResponsiveTable'
import { Container, Row, Col } from 'react-bootstrap'
import ImageBox from './ImageBox'
import Ball from '../animations/Ball'
import Waves from '../animations/Waves'
import DiversBoat from '../animations/Divers'

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
  backgroundColor: 'blue',
  margin: '1em',
  padding: '1em'
}

const fullWidthRow = {
  width: '100%',
  //position: 'relative',
  height: '1em',
  borderRadius: '0em',
  backgroundColor: 'yellow',
  margin: '0em',
  overflow: 'hidden'
}

const waveRow = {
  width: '100%',
  //position: 'relative',
  height: '1em',
  borderRadius: '0em',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'yellow',
  margin: '0em',
}

const gridDiversStyle = {
  width: '50%',
  height: '50%',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
  backgroundColor: 'red',
}

const gridElemStyle = {
  width: '30em',
  height: '15em',
  backgroundColor: 'red',
  padding: '0.25em',
  margin: '2%',
}

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
        <Col style={fullWidthRow}>Yolo</Col>
        <Waves style={waveRow} />
        <Col style={fullWidthRow}>Yolo</Col>
      </Row>
      <Row style={rowStyle}>
        <Col></Col>
        <Col style={gridElemStyle}>
        </Col>
        <Col style={gridElemStyle}>
          <ImageBox image={mountains} style={{ opacity: '0.5' }} />
        </Col>
        <Col style={gridElemStyle}>
          <DiversBoat style={gridDiversStyle} />
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

/*
const Grid = () => {
  return (
    <Table style={t1}>
      <Tbody>
        <Tr style={r2} >
          <Td style={b2}>Yolo1 </Td>
          <Td style={b2}>Yolo2 </Td>
          <Td style={b2}>Yolo3
            <Ball />
          </Td>
          <Td style={b2}>Yolo1 </Td>
          <Td style={b2}>Yolo1 </Td>
          <Td style={b2}>Yolo1 </Td>
          <Td style={b2}>Yolo1 </Td>
        </Tr>

        <Tr style={r2} >
          <Td style={b2}>Yolo2 </Td>
          <Td style={b2}>
            <ImageBox image={iland} style={{ opacity: '0.8', height: '100%' }} />
          </Td>
          <Td style={b2}></Td>

          <Td style={b2}>Yolo2 </Td>
          <Td style={b2}>Yolo2 </Td>
          <Td style={b2}>Yolo2 </Td>
          <Td style={b2}>Yolo2 </Td>
        </Tr>
        <Tr style={r2}>
          <Td style={b2}>Yolo3 </Td>
          <Td style={b2}>Yolo3 </Td>
          <Td style={b2}>Yolo3 </Td>
          <Td style={b2}>Yolo3 </Td>
          <Td style={b2}>Yolo3 </Td>
          <Td style={b2}>Yolo3 </Td>
          <Td style={b2}>Yolo3 </Td>
        </Tr>
        <Tr style={r2}>
          <Td style={b2}>Yolo3 </Td>
          <Td style={b2}>Yolo3 </Td>
          <Td style={b2}>Yolo3 </Td>
          <Td style={b2}>Yolo3 </Td>
          <Td style={b2}>Yolo3 </Td>
          <Td style={b2}>Yolo3 </Td>
          <Td style={b2}>Yolo3 </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default Grid
*/