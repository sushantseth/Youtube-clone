import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HAMBURGER_ICON, SEARCH_ICON, USER_ICON, YOUTUBE_LOGO, YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_AUTOSUGGEST } from "../utils/constants"
import { toggleMenu } from '../utils/toggleSlice'
import SearchDropDown from './SearchDropDown'
import { searchResults } from '../utils/SearchSlice'

const Header = () => {

  const dispatch = useDispatch();
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [dropdown, setDropdown] = useState(false)
  const searchObj = useSelector(store => store.search.searchingObj)

  
  useEffect(()=>{
    if(!searchObj[search]){
    var timer = setTimeout(()=>
    fetch(YOUTUBE_SEARCH_AUTOSUGGEST+search)
    .then((response)=> response.json())
    .then((data)=> {
      console.log("api hit")
      setSearchResult(data[1])
      const obj = {
        [search]:data[1] //Computed property names
      }
      dispatch(searchResults(obj))
    })
    ,300)
  } else{
    setSearchResult(searchObj[search])
  }

    return () => clearTimeout(timer)
  },[search])

  return (
    <>    <div className='flex self-center relative z-0'>
      <button className='hover:bg-gray-200 hover:rounded-full ml-5 mt-4'>
        <img onClick={() => dispatch(toggleMenu())} className='h-7 w-25' src={HAMBURGER_ICON} />
      </button>
      <Link to="/">
        <img className='h-5 w-25 ml-5 mt-6' src={YOUTUBE_LOGO} />
      </Link>
      <input
        onChange={(e)=>setSearch(e.target.value)}
        placeholder='Search'
        onFocus={()=> setDropdown(true)}
        onBlur = {()=>setDropdown(false) }
        className='h-10 w-2/5 border border-gray-300 rounded-l-3xl ml-52 mt-3 pl-3'/>
      <button className='h-10 w-16 border bg-gray-100 rounded-r-3xl mt-3 hover:bg-gray-200'>
        <img className='h-5 w-5 ml-5' src={SEARCH_ICON} /></button>
      <img className='h-9 w-25 mt-3 ml-96' src={USER_ICON} />
    </div>
     <div className=' absolute z-10 ml-[370px] w-2/5 bg-white rounded-xl mt-1 shadow-2xl'>
     {(dropdown && searchResult.length > 0) && searchResult.map((result,index)=>{
         return <SearchDropDown result = {result} key = {index}/>
     })}
     </div>
     </>

  )
}

export default Header



// we enter an input, that keyword is used to hit an yt api.
//we get result and we show that in dd

//we want to store the result and the keyword in key:value format in our slice
//so the next time when user backspace and he gets to the same keyword, api call wont get hit
//instead it will fetch from our slice