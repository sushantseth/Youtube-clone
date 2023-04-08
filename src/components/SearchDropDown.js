import React from 'react'
import { Link } from 'react-router-dom'
import { SEARCH_ICON } from '../utils/constants'

function SearchDropDown({result}) {
  return (
    <>
    <Link to= "/searchVideoList">
    <div className='flex py-2 hover:bg-gray-200 cursor-pointer'>
    <img className='ml-3 h-4 w-4 mt-3' src={SEARCH_ICON}/>
    <h1 className='mt-2 ml-3'>{result}</h1>
    </div>
    </Link>
    </>
  )
}

export default SearchDropDown