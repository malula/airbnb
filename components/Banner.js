import React from 'react'
import Image from 'next/image'
function Banner() {
  return (
    <div className='relative h-75 sm:h-100 lg:h-125 xl:h-150 2xl:h-175  '>

        <Image
        src="/banner.webp"
        layout="fill"
        alt="banner"
        objectFit='cover'
        />
      <div className='absolute top-1/2 w-full text-center '>
        <p className='text-sm lg:text-lg font-bold'>Not sure where to go? Perfect</p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button> 
        
      </div>
    </div>
  )
}

export default Banner