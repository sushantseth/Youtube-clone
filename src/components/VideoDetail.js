import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_RELATED_API, YOUTUBE_VIDEO_COMMENT, YOUTUBE_VIDEO_INFO } from '../utils/constants';
import { setMenuFalse } from '../utils/toggleSlice';
import RelatedVideos from './RelatedVideos';
// import DetailPageSideBar from './DetailPageSideBar';
import SidebarMenu from './SidebarMenu'
import VideoFrame from './VideoFrame';
import VideoInfo from './VideoInfo';

function VideoDetail() {

    const [searchParams] = useSearchParams()
    const searchParam = searchParams.get('v')
    const isMenuOpen = useSelector(store => store.toggle.isMenuOpen)
    const dispatch = useDispatch()
    const [related, setRelated] = useState([])
    const [videoInfo, setVideoInfo] = useState({})
    const [comments, setComments] = useState([])
    useEffect(()=>{
        fetch(YOUTUBE_RELATED_API+searchParam).then((response)=> response.json()).then((data)=> setRelated(data.items))
        fetch(YOUTUBE_VIDEO_INFO+searchParam).then((response)=> response.json()).then((data)=> setVideoInfo(data.items[0]))
        fetch(YOUTUBE_VIDEO_COMMENT+searchParam).then((response)=>response.json()).then((data)=> setComments(data.items))
         dispatch(setMenuFalse())
         window.scrollTo(0, 0);
    },[searchParams])
  return (
    <div className='flex'>
    {isMenuOpen && <SidebarMenu />}
    <div className='ml-5 mt-10 z-0 flex flex-row'>
    <div>
    <VideoFrame search = {searchParam} />
    <VideoInfo  info = {videoInfo} comments = {comments}/>
    </div>
    <div>
    { related.length > 0 && related.map((relate)=>{
       return <RelatedVideos videoInfo = {relate} key = {relate?.id?.videoId}/>
    }) }
    </div>
    </div>
  
    
    </div>
  )
}

export default VideoDetail