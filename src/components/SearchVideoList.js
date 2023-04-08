import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_VIDEOS_LIST } from '../utils/constants'

function SearchVideoList() {
    const [searchParams] = useSearchParams()
    const searchParam = searchParams.get('v')

    useEffect(()=>{
        fetch(YOUTUBE_SEARCH_VIDEOS_LIST+searchParam).then((response)=> response.json()).then((data)=> console.log(data))
    })
  return (
    <div>
        <h1>searchParam</h1>
    </div>
  )
}

export default SearchVideoList