import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { setMenuFalse } from '../utils/toggleSlice';
// import { Image, Shimmer } from 'react-shimmer'


const VideoCard = ({video}) => {

    const dispatch = useDispatch()
    const src = video?.snippet?.thumbnails?.medium?.url;
    const title = (video?.snippet?.title).substring(0,90);
    const channelTitle = video?.snippet?.channelTitle;
    const views = video?.statistics?.viewCount;
  
    let kViews = 0
    let milViews = 0
    if(views > 1000000){
        milViews = views/1000000
    }else{
        kViews = views/1000
    }
  return (
    <div className='mx-3 my-20 h-52 w-96'>
      <Link to = {"/videoDetail?v="+video?.id} >
        <img className='h-52 w-96 rounded-lg' src = {src} />
        <h1 className='font-semibold text-sm mt-2'>{title}</h1>
        <h1 className='font-light text-xs mt-2'>{channelTitle}</h1>
      {milViews!= 0 ? <h1 className='font-light text-xs'>{Math.floor(milViews)}M views</h1> :  <h1 className='font-light text-xs'>{Math.floor(kViews)}k views</h1> }
      </Link>
    </div>
  )
}

export default VideoCard


// video?.snippet?.thumbnails?.medium?.url