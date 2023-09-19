import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
    const langSelected = useSelector(store => store.config.lang);
    const langFilter = lang[langSelected];
  return (
    <div className='pt-20 '>
        <form onSubmit={(e)=>e.preventDefault()} className='flex bg-white bg-opacity-80 shadow-md overflow-hidden justify-center mx-auto items-center w-1/4 rounded-full border-4 border-black'>
            <input type="text" className='w-full px-4 focus:outline-none py-2 bg-transparent placeholder-black text-sm' placeholder={langFilter.gpt_placeholder} />
            <button className='font-semibold pl-4 pr-6 py-2 text-white text-sm rounded-r-full border-l-2 border-red-900 bg-red-600'>{langFilter.search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar 