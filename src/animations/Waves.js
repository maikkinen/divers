/* eslint-disable no-unused-vars */
import React from 'react'
import { Image } from 'react-bootstrap'
import wave from '../pics/wave.png'
import styled, { keyframes } from 'styled-components'


const waving1 = keyframes ` {
  0% { left: 0; }
  50% { left: 1000px; }
  100% { left: 0; }
}`

const waving2 = keyframes ` {
  0% { left: 0; }
  50% { left: -500px; }
  100% { left: 0; }
}`

const higher = keyframes ` {
  0% { height: 100px; }
  50% { 
    height: 120px; 
  }
  100% { height: 100px; }
}`

const OneWave = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.6;
  margin: 0 auto;
  background-image: url(${wave});
  position: absolute;
  top: 0.7vh;
  left: 0;
  repeat: true;
  animation: ${waving1} 30s linear infinite, ${higher} 4s ease-in-out infinite;
`

const OneWave2 = styled.div`
  width: 100%;
  height: 150%;
  opacity: 0.6;
  margin: 0 auto;
  background-image: url(${wave});
  position: absolute;
  top: 0.3vh;
  left: 0;
  repeat: true;
  animation-delay: 3s;
  animation: ${waving2} 20s linear infinite
`
//background-color: #e39d05;

const Waves = () => {
  return (
    <div>
      <OneWave/>
      <OneWave2/>
    </div>
  )
}

export default Waves

/**
 * <Wave className='waveAnimation2'/>
      <Wave className='waveAnimation3'/>
 */