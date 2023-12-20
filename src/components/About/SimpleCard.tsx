import React from 'react'

import RoundedPhoto from '../RoundedPhoto'

export default function SimpleCard({ icon, name }: { icon: string, name: string }) {
  return (
    <div className="xl:w-[100px] w-[80px] xl:h-[125px] h-[110px]  bg-Custom-blueLight rounded-[15px] flex flex-col justify-center items-center">
      <RoundedPhoto icon={icon} />
      <div className=" text-white md:text-base text-[12px] font-normal my-1">{name}</div>
    </div>
  )
}
