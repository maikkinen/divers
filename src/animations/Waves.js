/* eslint-disable no-unused-vars */
import React from 'react'
import { Image } from 'react-bootstrap'
import wave from '../pics/wave.png'


const OneWave = () => {
  return (
    <div className='singleWave'>
    </div>
  )
}

const Waves = () => {
  return (
    <section>
      <div className='singleWave waveAnimation'>
        <Image src={wave}></Image>
      </div>
    </section>
  )
}

export default Waves

/**
 * <Wave className='waveAnimation2'/>
      <Wave className='waveAnimation3'/>
 */