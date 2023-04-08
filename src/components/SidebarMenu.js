import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HISTORY_ICON, HOME_ICON, LIBRARY_ICON, SHORTS_ICON, SUBSCRIPTION_ICON, WATCH_LATER_ICON, YOUR_VIDEO_ICON } from '../utils/constants'

const SidebarMenu = () => {
    
    const show = useSelector(store => store.toggle.isMenuOpen)
    const subscriptions = useSelector(store => store.userAction.subscriptions)
  return (
    <>    { show ?
    <div className='m-5 space-y-6 '>
        
        <div className='flex hover:bg-gray-200 pr-4 py-1 rounded-md'>
       <img className='h-6 w-6 mr-4' src={HOME_ICON} /> <Link to="/">Home</Link>
       </div>
       <div className='flex hover:bg-gray-200 pr-4 py-1 rounded-md'>
       <img className='h-5 w-5 mr-4' src={SHORTS_ICON} /><Link to="/">Shorts</Link>
       </div>
       <div className='flex hover:bg-gray-200 pr-4 py-1 rounded-md'>
       <img className='h-5 w-5 mr-4' src={SUBSCRIPTION_ICON} /> <Link to="/">Subscription</Link>
       </div>
        <hr className='w-36' />
        <div className='flex hover:bg-gray-200 pr-4 py-1 rounded-md'>
       <img className='h-5 w-5 mr-4' src={LIBRARY_ICON} /> <Link to="/">Library</Link>
       </div>
       <div className='flex hover:bg-gray-200 pr-4 py-1 rounded-md'>
       <img className='h-5 w-5 mr-4' src={HISTORY_ICON} /> <Link to="/">History</Link>
       </div>
      
       <div className='flex hover:bg-gray-200 pr-2 py-1 rounded-md'>
        
       <img className='h-5 w-5 mr-4' src={YOUR_VIDEO_ICON} /> <Link to="/likedVideos">Liked Videos</Link>
       </div>
      
       <div className='flex hover:bg-gray-200 pr-4 py-1 rounded-md'>
       <img className='h-5 w-5 mr-4' src={WATCH_LATER_ICON} /> <Link to="/">Watch Later</Link>
       </div>
       { subscriptions.length > 0 && <div>
       <hr className='w-36' />
       <h1 className='mt-5 font-bold'>Subscriptions</h1>
       {subscriptions.length > 0 && subscriptions.map((sub)=>{
          return   <h1 className='mt-6 '>{sub}</h1>
       })}
       </div> }
    </div> :
      <div className='m-5 space-y-6'>
    <img className='h-7 w-7 mr-10' src={HOME_ICON} />
    <img className='h-7 w-7 mr-10' src={SHORTS_ICON} />
    <img className='h-7 w-7 mr-10' src={SUBSCRIPTION_ICON} />
    <img className='h-7 w-7 mr-10' src={LIBRARY_ICON} /> 
   
    </div> }
    </>

  )
}

export default SidebarMenu