import React from 'react'
import { Link } from 'react-router-dom';

function RelatedVideos({videoInfo}) {
    const url = videoInfo?.snippet?.thumbnails?.medium?.url;
    const title = (videoInfo?.snippet?.title).substring(0,50)
    const publishTime = videoInfo?.snippet?.publishTime;
    const channelTitle = videoInfo?.snippet?.channelTitle;

    const givenDate = new Date(publishTime);
    const currentDate = new Date();
    let timeDiffMilliseconds = currentDate - givenDate;
 
  return (
    <>
       <Link to = {"/videoDetail?v="+videoInfo?.id?.videoId} >
        <div className='ml-10 mb-4 w-96 h-24 flex'>
        <img className='w-44 h-24 rounded-xl' src = {url}/>
        <div className='ml-2'>
        <h1 className='text-sm font-semibold'>{title}</h1>
        <div className='mt-4'>
        <h1 className='text-xs font-normal'>{channelTitle}</h1>
        {/* <h1 className='text-xs font-normal'>{Math.floor(timeDiffMilliseconds)} {publishUnit} ago</h1> */}
        </div>
        </div>
        </div>
        </Link>
    </>
  )
}

export default RelatedVideos