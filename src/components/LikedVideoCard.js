import React from 'react'
import { Link } from 'react-router-dom'

function LikedVideoCard({vid}) {
    const imageurl = vid?.snippet?.thumbnails?.medium?.url
    const title = vid?.snippet?.title
    const channelTitle = vid?.snippet?.channelTitle
    const views = vid?.statistics?.viewCount;
    const description = vid?.snippet?.description.substring(0,150);
    const id = vid?.id
  
    let kViews = 0
    let milViews = 0
    if(views > 1000000){
        milViews = views/1000000
    }else{
        kViews = views/1000
    }
  return (
    <>
              <Link to = {"/videoDetail?v="+id} >
        <div className='m-10 w-[70rem] h-52 flex hover:bg-gray-200 rounded-xl'>
        <img className='w-96 h-52 rounded-xl' src = {imageurl}/>
        <div className='ml-2'>
        <h1 className='text-base font-semibold'>{title}</h1>
        {milViews!= 0 ? <h1 className='font-light text-xs mt-4'>{Math.floor(milViews)}M views</h1> :  <h1 className='font-light text-xs mt-4'>{Math.floor(kViews)}k views</h1> }
        <h1 className='text-xs font-normal'>{channelTitle}</h1>
        <h1 className='mt-4 text-sm font-normal'>{description}...</h1>
        </div>
        </div>
        </Link>
    </>
  )
}

export default LikedVideoCard