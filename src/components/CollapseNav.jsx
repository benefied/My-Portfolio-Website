import React from 'react'
import SocialMedia from './SocialMedia'

const CollapseNav = () => {
  return (
    <div className='bg-white'>
        <div className='pt-[4rem] px-3'>
            <h1 className='text-center text-green-600'>Easy Slide</h1>
            <ul className=''>
                <li className='font-bold text-gray-600 text-xl border-b-4'><button className='cursor-pointer'>About</button></li>
                <li className='font-bold text-gray-600 text-xl border-b-4'><button className='cursor-pointer'>Portfolio</button></li>
                <li className='font-bold text-gray-600 text-xl border-b-4'><button className='cursor-pointer'>Skills</button></li>
            </ul>
        </div>
    </div>
  )
}

export default CollapseNav