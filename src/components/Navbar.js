import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const containerStyle = {
  width: '100%',
 
  position: 'absolute',
  left: '0px',
  top: '0px',
  //padding: '4vh',
  backgroundColor: 'red',
}

const navbarStyle = {
  backgroundColor: 'blue',
  width: '100%',
  zindex: '100',
  paddingTop: '4vh',
}

const elementStyle = {
  width: '5vw',
  height: '5vh',
  backcroundColor: 'red',
  border: 'solid',
  borderRadius: '1em',
  color: 'yellow',
  underline: 'none',
  padding: '1vh',
  margin: '2vh',
}

const NavbarElem = () => {
  return (
    <Container style={containerStyle}>
      <Navbar style={navbarStyle} bg="light" expand="lg" >
        <Nav className="mr-auto">
          <Nav.Link style={elementStyle} href="#home">Animations</Nav.Link>
          <Nav.Link style={elementStyle} href="#link">Diving</Nav.Link>
          <Nav.Link style={elementStyle} href="#link">Cooking</Nav.Link>
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
