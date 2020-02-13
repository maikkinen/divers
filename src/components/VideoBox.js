import React from 'react'
import { ResponsiveEmbed } from 'react-bootstrap'

// eslint-disable-next-line react/prop-types
const VideoBox = ({ video, style }) => {
  return (
    <div>
      <ResponsiveEmbed>
        <embed src={video} style={style} />
      </ResponsiveEmbed>
    </div>
  )
}

export default VideoBox