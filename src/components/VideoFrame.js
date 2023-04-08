import React from 'react'
import VideoInfo from './VideoInfo'

function VideoFrame({search}) {
  
  return (
    <>
    <iframe 
       width="950" 
       height="515" 
       margin = "50"
       src={"https://www.youtube.com/embed/"+search} 
       title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowFullScreen>
       </iframe>
    </>
  )
}

export default VideoFrame