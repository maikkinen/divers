import React from 'react'
import { Card, Button } from 'react-bootstrap'

const cardStyle = {
  width: '45vw',
  height: '25vh',
  backgroundColor: '#E0FCFF',
  padding: '2vh',
  opacity: '0.8',
  overflow: 'hidden',
  borderRadius: '1em',
  //border: 'solid',
  //borderColor: '#A27C1A',
  color: '#513C06',
}

const CardBox = () => {
  return (
    <div>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>Hello Diver!</Card.Title>
          <Card.Text>
            <br/>
            To me it seems that Front-end Development is often like diving: when you jump into the water, you're after a certain kind of beautiful fish.
            Sometimes you get lucky (or a superb div...coder) and immediately find the one you wished to see.
            Sometimes, then, you get lost in the miraculous underwater world.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardBox

/**
 * <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
 *
 */