import React from 'react'
import { DISLIKE_ICON, LIKE_ICON, USER_ICON } from '../utils/constants'

function VideoComments({commentInfo}) {
  return (
    <div className='flex mt-6'>
        <img className='h-9 w-25 rounded-full' src={USER_ICON} alt = {USER_ICON}/>
        <div className='ml-4'>
        <h1 className='text-sm font-semibold'>{commentInfo?.authorDisplayName}</h1>
        <h1 className='text-sm mt-2'>{commentInfo?.textOriginal}</h1>
        <div className='flex'>
        <button><img className='h-6 w-6 mt-3 ' src = {LIKE_ICON}/></button>
        <h1 className='h-8 w-8 mt-5 mx-2'>{commentInfo?.likeCount}</h1>
        <button><img className='h-6 w-6 mt-3 ml-1' src = {DISLIKE_ICON}/></button>
        </div>
        </div>
    </div>
  )
}

export default VideoComments