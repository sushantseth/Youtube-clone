import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AFTER_DISLIKE_ICON, AFTER_LIKE_ICON, DISLIKE_ICON, LIKE_ICON, USER_ICON, YOUTUBE_VIDEO_COMMENT } from '../utils/constants'
import { formatDate } from '../utils/helper';
import { addComment, addLikedVideos, addSubscriptions } from '../utils/UserActionSlice';
import VideoComments from './VideoComments';
import VideoMycomments from './VideoMycomments';

function VideoInfo({info, comments}) {

    const[showMore, setShowMore] = useState(false)
    const [myComment, setMyComment] = useState("")
    const [submittedComment, setsubmittedComment] = useState([])
    const [submitComment, setSubmitComment] = useState(false)
    const [liked, setLiked] = useState(false)
    const [disliked, setDisLiked] = useState(false)

    let likes = info?.statistics?.likeCount;
    const views = info?.statistics?.viewCount?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    const date = info?.snippet?.publishedAt;
    const description = info?.snippet?.description.substring(0,250);
    const completeDescription = info?.snippet?.description;
    const channelTitle = info?.snippet?.channelTitle
    
   const likeToggle = () => {
    if(liked){
      setLiked(false)
    }else{
      setLiked(true)
      setDisLiked(false)
    }
   }
   const dislikeToggle = () => {
    if(disliked){
      setDisLiked(false)
    }else{
      setDisLiked(true)
      setLiked(false)
    }
   }
        const dispatch = useDispatch()
        const storeComments = useSelector(store => store.userAction.comments)
        const likedVideos = useSelector(store => store.userAction.likedVideos)
        const subscriptions = useSelector(store => store.userAction.subscriptions)
        // console.log("storeComments",storeComments)
        console.log("subscriptions : ",subscriptions)
        let subscriptionExists = subscriptions.filter((sub)=>{
          return sub === channelTitle
        })
    return (
    <div className='w-[950px]'>
        <h1 className='mt-4 font-sans text-xl font-semibold'>{info?.snippet?.title}</h1>
        <div className='flex'>
        <img className='h-12 w-25 mt-3' src = {USER_ICON}/>
       {channelTitle?.length > 20 ? <h1 className='mt-6 ml-3 font-sans text-l font-semibold'>{info?.snippet?.channelTitle?.substring(0,20)}...</h1> :<h1 className='mt-6 ml-3 font-sans text-l font-semibold'>{info?.snippet?.channelTitle}</h1> }
        {subscriptionExists.length > 0 ? <button onClick={()=> dispatch(addSubscriptions(channelTitle))} className=' bg-gray-200 text-gray-500 ml-10 px-3 mt-3 rounded-3xl text-sm'>Unsubscribe</button>  :  <button onClick={()=> dispatch(addSubscriptions(channelTitle))} className='ml-10 bg-black rounded-3xl text-white px-3 mt-3'>Subscribe</button> }
        <button onClick={()=> dispatch((addLikedVideos({[info?.id]:info})))} className='hover:bg-gray-200 ml-96 w-28 bg-gray-100 rounded-l-3xl text-white px-3 mt-3 flex border-r border-r-gray-300'>
           {likedVideos[info?.id] ? <img className='h-6 w-6 mt-2' src = {AFTER_LIKE_ICON} alt="LIKE" />  :  <img className='h-6 w-6 mt-2' src = {LIKE_ICON} alt="LIKE" /> }
          { likes > 1000000 ? <h1 className='text-black font-semibold text-base ml-3 mt-3'> {Math.floor(likes/1000000)} M</h1> : <h1 className='text-black font-semibold text-base ml-3 mt-2'> {Math.floor(likes/1000)} K</h1>}
        </button>
        <button onClick={()=> dislikeToggle()} className='hover:bg-gray-200 w-14 bg-gray-100 rounded-r-3xl text-white px-3 mt-3'>
         {disliked ? <img className='h-6 w-6' src = {AFTER_DISLIKE_ICON} alt="LIKE" /> :  <img className='h-6 w-6' src = {DISLIKE_ICON} alt="LIKE" /> }
        </button>
        </div>
        <div className='bg-gray-100 mt-6 rounded-lg px-5 py-3 w-[950px]'>
        <div className='flex'>
        <h1 className='text-sm font-semibold'>{views} Views</h1>
        <h1 className='text-sm font-semibold ml-4'>{formatDate(date)}</h1>
        </div>
       {!showMore ? <h1 className='mt-4 text-sm font-normal'>{description}...<button onClick={()=> setShowMore(true)} className='font-semibold'>Show more</button></h1>
          :  
          <div>
            <h1 className='mt-4 text-sm font-normal'>{completeDescription}</h1>
            <button onClick={()=> setShowMore(false)} className='font-semibold mt-3'>Show less</button>
            </div> }
        </div>
        <div className='flex my-10'>
        <img className='h-9 w-25 rounded-full' src={USER_ICON} alt = {USER_ICON}/>
        <div>
        <input  className='ml-4 w-[880px] border focus:ring-transparent border-l-white border-r-white border-t-white border-b-black py-2 pl-2'
         placeholder='Add a comment...'
         onChange={(e)=> setMyComment(e.target.value)}
          value = {myComment}
         />
       { myComment === "" ? 
       <button className='mt-4 ml-[800px] bg-gray-200 text-gray-500 py-2 px-3 rounded-3xl text-sm'>Comment</button> 
       :  <button 
          onClick={()=>{
            setSubmitComment(true)
            dispatch(addComment({[info?.id]:[myComment]}))
            setMyComment("")
          } }
          className='mt-4 ml-[800px] bg-blue-600 text-white py-2 px-3 rounded-3xl text-sm'>Comment</button>  }
        </div>
        </div>
        <div>
       { storeComments[info?.id] && 
        storeComments[info?.id].map((comment, index)=>{return <VideoMycomments key = {index} comment = {comment} />})
        }
        </div>
        <div>
        {comments.length > 0 && comments.map((comment)=>{
            return   <VideoComments key = {comment.id} commentInfo = {comment?.snippet?.topLevelComment?.snippet} />
        })}
        </div>
    </div>
  )
}

export default VideoInfo