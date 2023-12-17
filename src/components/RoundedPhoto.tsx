import React from 'react'
import Image from 'next/image';


function RoundedPhoto({icon}:{icon:string}) {
  return (
    <div className='h-20 w-20 p-0 relative  inline-block  rounded-full  bg-white overflow-hidden'>
        <Image
            className='object-cover scale-105'
            fill={true}
            src={icon}
            referrerPolicy="no-referrer"
            alt="Image" />
    </div>
  )
}

export default RoundedPhoto