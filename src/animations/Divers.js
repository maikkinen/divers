/* eslint-disable no-unused-vars */
import React from 'react'
import { Image } from 'react-bootstrap'
import divers from '../pics/divers_small.png'
import styled, { keyframes } from 'styled-components'

const wavering = keyframes ` {
  0% { transform: rotate(-1deg); }
  25% { transform: rotate(0deg); }
  50% { transform: rotate(1deg); }
  75% { transform: rotate(0deg); }
  100% { transform: rotate(-1deg); }
}`

const floating = keyframes ` {
  0% { top: 34.5em; }
  50% { 
    top: 35em; 
  }
  100% { top: 34.5em; }
}`


const DiversBoat = styled.div`
  background-image: url(${divers});
  repeat-image: false;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  animation: ${floating} 4s ease-in-out infinite;
  z-index: 1000;
`
export default DiversBoat