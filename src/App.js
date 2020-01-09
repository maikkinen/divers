import React from 'react'
import { Container } from 'react-bootstrap'
import Grid from './components/Grid'

import watercolor from './pics/watercol_texture.jpg'

const bgStyle = {
  margin: '0',
  width: '100%',
  height: '90em',
  backgroundImage: `url(${watercolor})`,
  //display: 'flex',
  //alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  //overflow: 'hidden',
  //opacity: '0.8',
}

const App = () => {
  return (
    <Container style={bgStyle}>
      <Grid />
    </Container>
  )
}

export default App
