import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_POPULAR_VIDEO_LIST } from '../utils/constants'
import { setMenuTrue } from '../utils/toggleSlice'
import SidebarMenu from './SidebarMenu'
import VideoCard from './VideoCard'

const HomeVideos = () => {

    const [popularVideos, setPopularVideos] = useState([])
    const isMenuOpen = useSelector(store => store.toggle.isMenuOpen)
    const dispatch = useDispatch()
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        // user has reached the bottom of the page, fetch more items
        fetch(YOUTUBE_POPULAR_VIDEO_LIST).then((response)=> response.json()).then((data)=> setPopularVideos(prev => [...prev, ...data?.items]))
      }
    };

    
    useEffect(()=> {
        fetch(YOUTUBE_POPULAR_VIDEO_LIST).then((response)=> response.json()).then((data)=> setPopularVideos(prev => [...prev, ...data?.items]))
        dispatch(setMenuTrue())
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    },[])
  return (
    <div className='flex'>
        <SidebarMenu />
       { isMenuOpen ? <div className='flex flex-wrap'>
        { popularVideos.length > 0 && popularVideos.map((video)=>{
           return  <VideoCard video = {video} key = {video?.id}/>
        })}
         
</div> : <div className='flex flex-wrap ml-10'>
        { popularVideos.length > 0 && popularVideos.map((video)=>{
           return  <VideoCard video = {video} key = {video?.id}/>
        })}
         
</div> }
    </div>
  )
}

export default HomeVideos