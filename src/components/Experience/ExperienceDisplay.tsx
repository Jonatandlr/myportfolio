import React from 'react'
import Targets from '../Targets';
import Image from 'next/image';

interface ExperienceDisplayProps {
    select: "RB" | "PR";
    info: {
        [key: string]: ExperienceInfo
    }
}
interface ExperienceInfo {
    title: string;
    position: string;
    date: string;
    description: string;
    targets: string[];
    images: string[];
}


export default function ExperienceDisplay({ select, info }: ExperienceDisplayProps) {
    const data = info[select]

    return (
        <div className='text-white md:ml-6 ml-2 font-normal lg:w-[600px] w-fit h-[504px]'>
            {/* <button onClick={()=>{console.log(data.title)}}>dasd</button> */}
            <h5 className='font-normal lg:text-[48px] md:text-[40px] text-[30px] border-b-4 border-Custom-red w-fit'>{data.title}</h5>
            <div className='flex'>
                <h6 className='font-semibold text-[16px] mr-3 text-Custom-red'>{data.position}</h6>
                <h6 className=' opacity-50'>{data.date}</h6>
            </div>

            <p className='lg:text-xl text-lg my-2'>{data.description}</p>
            <div className='flex flex-wrap mb-3  '>
                {data.targets.map((item, index) => (
                    <Targets key={index} name={item} />
                )
                )}
            </div>
            <div className='flex flex-wrap justify-start '>
                {data.images.map((item, index) => (
                    <div
                        key={index}
                        className='lg:w-[253px] lg:h-[177px] md:w-[200px] md:h-[124px] w-[140px] h-[100px] rounded-[20px] relative flex lg:flex-row flex-col overflow-hidden mr-2 mb-2'>
                        <Image
                            className='object-cover'
                            fill={true}
                            src={item}
                            referrerPolicy="no-referrer"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt="Image" />
                    </div>
                )
                )}
            </div>

        </div>
    )
}
