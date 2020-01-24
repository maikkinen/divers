// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled, { keyframes } from 'styled-components'

const morph = keyframes` {
  0% { border-radius: 5px; }
  50% { border-radius: 50%; }
  100% { border-radius: 5px; }
}`

const spin = keyframes` {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`

const Ball = styled.div`
  width: 64px;
  height: 64px;
  opacity: 0.8; 
  border-radius: 50%;
  margin: 0 auto;
  background-color: #e39d05;
  background-image: linear-gradient(0deg, #e39d05 20%, #eb5307 80%);
  animation: ${morph} 1s linear infinite, ${spin} 1s ease-in-out infinite;
`

//animation: ${morph} 1s linear infinite, ${spin} 1s ease-in-out infinite;

export default Ball
