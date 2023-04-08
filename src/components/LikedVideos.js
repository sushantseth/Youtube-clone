import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMenuTrue } from '../utils/toggleSlice'
import LikedVideoCard from './LikedVideoCard'
import SidebarMenu from './SidebarMenu'

function LikedVideos() {

    const dispatch = useDispatch()
    const likedVideosObj = useSelector(store => store.userAction.likedVideos)
    const likedVideosArray = Object.values(likedVideosObj)
    useEffect(()=>{
        dispatch(setMenuTrue())
    },[])


  return (
    <div className='flex'>
      <SidebarMenu />
      <div>
        {likedVideosArray.length > 0 ? likedVideosArray.map((vid)=>{
           return <LikedVideoCard vid  = {vid} key = {vid?.id}/>
        }) 
        : <h1 className='ml-[470px] font-thin font-sans text-3xl mt-48'>No Liked Videos</h1>}
      </div>
    </div>
  )
}

export default LikedVideos