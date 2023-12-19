import React from 'react'
import Image from 'next/image';


function RoundedPhoto({icon}:{icon:string}) {
  return (
    <div className='xl:h-20 xl:w-20 h-16 w-16 p-0 relative  inline-block  rounded-full  bg-white overflow-hidden'>
        <Image
            className='object-cover scale-110'
            fill={true}
            src={icon}
            referrerPolicy="no-referrer"
            alt="Image" />
    </div>
  )
}

export default RoundedPhoto