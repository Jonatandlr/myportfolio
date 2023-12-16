import React from 'react'

export default function SimpleCard({icon,name}:{icon:string,name:string}) {
  return (
    <div className="xl:w-[100px] w-[80px] xl:h-[125px] h-[105]  bg-Custom-blueLight rounded-[15px] flex flex-col justify-center items-center">
      <div className="xl:w-20 w-16 xl:h-20 h-16 bg-white rounded-[50px] overflow-hidden">
        <img className="w-full h-full object-cover"src={icon} alt="" />
      </div>
      <div className=" text-white text-base font-normal ">{name}</div>
    </div>
  )
}
