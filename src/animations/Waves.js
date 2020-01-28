/* eslint-disable no-unused-vars */
import React from 'react'
import { Image } from 'react-bootstrap'
import wave from '../pics/wave.png'
import styled, { keyframes } from 'styled-components'


const waving1 = keyframes` {
  0% { left: 0; }
  50% { left: 200px; }
  100% { left: 0; }
}`

const waving2 = keyframes` {
  0% { left: 0; }
  50% { left: -500px; }
  100% { left: 0; }
}`

const higher = keyframes` {
  0% { top: 100px; }
  50% { 
    top: 120px; 
  }
  100% { top: 100px; }
}`

const wavering = keyframes` {
  0% { transform: rotate(-2deg); }
  50% { transform: rotate(0deg); }
  100% { transform: rotate(-2deg); }
}`

const OneWave = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.6;
  margin: 0 auto;
  background-image: url(${wave});
  position: relative;
  repeat: no-repeat;
  animation: ${higher} 10s ease-in-out infinite;
`

const OneWave2 = styled.div`
  width: 100%;
  height: 150%;
  opacity: 0.6;
  margin: 0 auto;
  background-image: url(${wave});
  position: absolute;
  top: 1vh;
  left: 0;
  repeat: false;
  animation-delay: 3s;
  animation: ${waving2} 20s linear infinite
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
  repeat: false;
  animation-delay: 3s;
  animation: ${wavering} 10s linear infinite
`
//background-color: #e39d05;


const Waves = () => {
  return (
    <div>
      <OneWave />
    </div>
  )
}

export default Waves

/**
 * <Wave className='waveAnimation2'/>
      <Wave className='waveAnimation3'/>
 */