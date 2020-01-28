/* eslint-disable no-unused-vars */
import React from 'react'
import { Image } from 'react-bootstrap'
import wave from '../pics/wave.png'
import styled, { keyframes } from 'styled-components'


const waving1 = keyframes` {
  0% { left: -50px; }
  50% { left: 20px; }
  100% { left: -50px; }
}`

const waving2 = keyframes` {
  0% { left: 0; }
  50% { left: -500px; }
  100% { left: 0; }
}`

const higher = keyframes` {
  0% { height: 13%; }
  50% { height: 15%; }
  100% { height: 13%; }
}`

const wavering = keyframes` {
  0% { transform: rotate(-2deg); }
  50% { transform: rotate(0deg); }
  100% { transform: rotate(-2deg); }
}`

const OneWave = styled.div`
  width: 100%;
  height: 20%;
  opacity: 0.6;
  margin: 0 auto;
  background-image: url(${wave});
  position: absolute;
  left: 0px;
  top: 120vh;
  background-repeat: no-repeat; 
`

const OneWave2 = styled.div`
  width: 98%;
  height: 13%;
  opacity: 0.2;
  margin: 0 auto;
  background-image: url(${wave});
  position: absolute;
  left: 1%;
  top: 120vh;
  background-repeat: repeat-x;
  animation-delay: 3s;
  animation: ${wavering} 5s ease-out infinite, ${higher} 10s linear infinite
`
const OneWave3 = styled.div`
  width: 100%;
  height: 150%;
  opacity: 0.8;
  margin: 0 auto;
  background-image: url(${wave});
  position: absolute;
  top: 1vh;
  left: 0;
  animation-delay: 3s;
  animation: ${wavering} 10s linear infinite
`
//background-color: #e39d05;


const Waves = () => {
  return (
    <div>
      <OneWave />
      <OneWave2 />
    </div>
  )
}

export default Waves

/**
 * <Wave className='waveAnimation2'/>
      <Wave className='waveAnimation3'/>
 */