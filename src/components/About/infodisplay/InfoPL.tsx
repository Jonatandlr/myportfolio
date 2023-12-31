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
    <div className='lg:px-3 px-1 grid md:grid-cols-2 grid-cols-1 gap-3 xl:gap-8 2xl:gap-14 '>
      {elements.map((item, index) => (
        <div key={index} className='w-full h-[131.12px]  bg-Custom-blueLight rounded-[20px] flex py-1 px-2'>
          <div className='flex flex-col justify-center items-center'>
            <RoundedPhoto icon={item.icon} />
            <div className='flex flex-col  items-center'>
              <div className="text-center w-[92.53px] h-[21.37px] text-white xl:text-base text-sm font-semibold font-['Poppins']">{item.name}</div>
              <div className="text-center w-fit h-[23.31px] text-white text-opacity-50 xl:text-[15px] text-[12px] font-normal font-['Poppins']">{item.years}</div>
            </div>
          </div>

          <div className='w-full flex  item-center'>
            {/* <div className="text-white text-opacity-50 text-[15px] font-normal font-['Poppins']">Use</div> */}
            <div className="text-white opacity-50 xl:text-[14px] lg:text-[12px] text-[12px] font-normal ml-1 flex flex-col justify-center items-start">
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
