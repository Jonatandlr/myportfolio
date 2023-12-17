import Image from 'next/image';
import React from 'react'
import RoundedPhoto from '@/components/RoundedPhoto';

interface InfoPLProps {
  elements: {
    name: string;
    icon: string;
    years: string;
    use: string[];
  }[]
}

export default function InfoPL({ elements }: InfoPLProps) {
  return (
    <div className='grid grid-cols-2  gap-3'>
      {elements.map((item, index) => (
        <div key={index} className='lg:w-[340.59px] lg:h-[131.12px] bg-Custom-blueLight rounded-[20px] flex p-1'>
          <div className='flex flex-col justify-center items-center'>
            <RoundedPhoto icon={item.icon} />
            <div className='flex flex-col  items-center'>
              <div className="text-center w-[92.53px] h-[21.37px] text-white text-base font-semibold font-['Poppins']">{item.name}</div>
              <div className="text-center w-[57.09px] h-[23.31px] text-white text-opacity-50 text-[15px] font-normal font-['Poppins']">{item.years}</div>
            </div>
          </div>
          <div className='w-full'>
            <div className="text-white text-opacity-50 text-[15px] font-normal font-['Poppins']">Use</div>
            <div className="text-white opacity-50 text-sm font-normal font-['Poppins'] ml-3">
              {item.use.map((item, index) => (
                <li key={index} className="list-item">
                {item}
            </li>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}
