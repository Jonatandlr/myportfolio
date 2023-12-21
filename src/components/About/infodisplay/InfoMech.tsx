import Targets from '@/components/Targets';
import React from 'react'
import Image from 'next/image';
interface InfoMechProps {
    elements: {
        icon: string;
        name: string;
        description: string[];
        targets: string[];
    }[];
}

export default function InfoMech({ elements }: InfoMechProps) {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
            {elements.map((element, index) => (
                <div key={index} className='w-[258px] h-[203px]  rounded-[20px] p-5'>
                    <div className='flex border-b-4 border-Custom-red w-fit justify-center items-center'>
                        <div className="relative w-[24px] h-[24px] mr-1 ">
                            <Image
                                className='mr-1'
                                fill={true}
                                src={element.icon}
                                referrerPolicy="no-referrer"
                                alt="Image" />
                        </div>
                        <div className=" text-white text-opacity-50 text-2xl font-normal font-['Poppins'] whitespace-nowrap">{element.name}</div>
                    </div>

                    <ul className='list-disc list-outside pb-1'>
                        {element.description.map((description, index) => (
                            <li key={index} className="text-white text-sm font-normalmb-1">{description}</li>
                        ))}
                    </ul>

                    <div className='flex'>
                        {element.targets.map((target, index) => (
                            <Targets key={index} name={target} />
                        ))}
                    </div>
                </div>
            ))}
        </div>


    )
}
