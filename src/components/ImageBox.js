import React from 'react'
import { Image } from 'react-bootstrap'

// eslint-disable-next-line react/prop-types
const ImageBox = ({ image, style }) => {
  return (
    <Image src={image} style={style} />
  )
}

export default ImageBox