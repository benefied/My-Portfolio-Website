import React from 'react'

const Whatido = () => {
  return (
    <div className='pt-[3rem]'>
        <div className='text-center pb-3'>
          <h1 className=' font-normal text-5xl italic text-gray-600'>What I do</h1>
        </div>
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-3'>
                <div className='bg-green-100 px-4 py-9 shadow-xl'>
                    <div className='text-left'>
                    <h1 className=' font-bold text-lg shadow-md text-gray-800 tracking-widest underline underline-offset-4'>Create frontend Interfaces That:</h1>
                    </div>
                    <div>
                        <ul className='text-left px-3 text-gray-600 font-medium'>
                            <li className=''>- Interact with APIs</li>
                            <li>- Interact with ABI's(Smart Contracts)</li>
                            <li>- Implement React Usabilities</li>
                        </ul>
                    </div>
                </div>
                <div className=' bg-green-100 px-4 py-9 shadow-xl'>
                    <div className='text-left'>
                    <h1 className=' font-bold text-lg shadow-md text-gray-800 tracking-widest underline underline-offset-4'>Create attractive Interfaces Using:</h1>
                    </div>
                    <div>
                        <ul className='text-left px-3 text-gray-600 font-medium'>
                            <li className=''>- Packages including tailwindCSS and other styling packages</li>
                            <li>- Creative SVG using adobe tools</li>
                            <li>- Animations in both code and outside codes </li>
                        </ul>
                    </div>
                </div>
                <div className=' bg-green-100 px-4 py-9 shadow-xl'>
                    <div className='text-left'>
                        <h1 className=' font-bold text-lg shadow-md text-gray-800 tracking-widest underline underline-offset-4'>Work with teams by:</h1>
                    </div>
                    <div>
                        <ul className='text-left px-3 text-gray-600 font-medium'>
                            <li className=''>- Able to work remotely</li>
                            <li>- Discuss responsive designs and implementing</li>
                            <li>- Speak and communicate fluently</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whatido