import React from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import NavbarElem from './components/Navbar'
import Grid from './components/Grid'

import watercolor from './pics/watercol_texture.jpg'

import { Navbar, Nav } from 'react-bootstrap'
import Waves from './animations/Waves'

const containerStyle = {
  width: '100%',
  height: '10vh',
  position: 'absolute',
  left: '0px',
  top: '0px',
  //padding: '4vh',
}

//colors from UI coloring sketchbook pages 106-107

const navbarStyle = {
  backgroundColor: '#504A40',
  width: '100%',
  zindex: '100',
  paddingTop: '4vh',
  paddingBottom: '4vh',
}

const bgStyle = {
  margin: '0',
  left: '0',
  top: '0',
  width: '100%',
  height: '90em',
  backgroundImage: `url(${watercolor})`,
  display: 'grid',
  //alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
  overflow: 'hidden',
  //opacity: '0.8',
}

const elementStyle = {
  width: '5vw',
  height: '5vh',
  //border: 'solid',
  borderRadius: '0.5em',
  color: '#B8B2A7',
  textDecoration: 'none',
  padding: '1%',
  margin: '2vh',
}

const App = () => {
  return (
    <Router>
      <Container>
        <Container style={containerStyle}>
          <Navbar style={navbarStyle} bg="light" expand="lg" >
            <Nav className="mr-auto">
              <Link style={elementStyle} to="/">Dockyard</Link>
              <Link style={elementStyle} to="/animations">Animations</Link>
              <Link style={elementStyle} to="/cooking">Cooking</Link>
              <Link style={elementStyle} to="/comics">Comics</Link>
            </Nav>
          </Navbar>
        </Container>
      </Container>
      <Route exact path="/" render={() => <Grid/>} />
      <Route path="/animations" render={() => <Grid/>} />
      <Route path="/cooking" render={() => <Grid/>} />
      <Route path="/comics" render={() => <Grid/>} />
    </Router>
  )
}

export default App
