import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

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
  backgroundColor: '#513C06',
  width: '100%',
  zindex: '100',
  paddingTop: '4vh',
  paddingBottom: '4vh',
}

const elementStyle = {
  width: '5vw',
  height: '5vh',
  border: 'solid',
  borderRadius: '1em',
  color: '#BEF8FD',
  textDecoration: 'none',
  padding: '1%',
  margin: '2vh',
}

const NavbarElem = () => {
  return (
    <Container style={containerStyle}>
      <Navbar style={navbarStyle} bg="light" expand="lg" >
        <Nav className="mr-auto">
          <Nav.Link style={elementStyle} href="/home">Dockyard</Nav.Link>
          <Nav.Link style={elementStyle} href="/animations">Animations</Nav.Link>
          <Nav.Link style={elementStyle} href="/cooking">Cooking</Nav.Link>
          <Nav.Link style={elementStyle} href="/comics">Comics</Nav.Link>

        </Nav>

      </Navbar>
    </Container>
  )
}

/**<Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */

export default NavbarElem
