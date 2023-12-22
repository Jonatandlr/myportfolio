import React from 'react'
import Image from 'next/image';
import Targets from '../Targets';

interface ProyectComponentProps {
    data: {
        image: string,
        page: string,
        title: string,
        description: string,
        targets: string[],
        github: string
    }
}

export default function ProyectComponent({ data }: ProyectComponentProps) {


    return (
        <div className='xl:w-[538px] xl:h-[528px]   w-full h-full border-4 border-Custom-blueLight rounded-[20px] group hover:scale-105 transition duration-500'>
            <div className='bg-slate-300 w-full h-[200px]  blur-sm group-hover:blur-0 rounded-t-[20px]  relative overflow-hidden'>
                <Image
                    src={data.image}
                    className='object-cover group-hover:scale-110 transition duration-300'
                    fill={true}
                    // width={253}
                    // height={264}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt='image' />
            </div>
            <div className='p-5 relative'>
                <div className='flex items-center justify-between'>
                    <h5 className=' text-white lg:text-[26px] text-[20px] font-semibold border-b-4 border-Custom-red w-fit my-3'>{data.title}</h5>
                    <div className='flex'>
                        {
                            data.page !== "" ? <a
                                href={data.page}
                                target='_blank'
                                rel="noreferrer">
                                <Image src='/images/Icons/RedirectPage.svg'
                                    className='mr-4  hover:cursor-pointer hover:scale-110  transition duration-150  active:scale-95'
                                    width={30}
                                    height={30}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    alt='image' />
                            </a> : null
                        }
                        {
                            data.github !== "" ? <a
                                href={data.github}
                                target='_blank'
                                rel="noreferrer">
                                <Image src='/images/Icons/code.svg'
                                    className='hover:cursor-pointer hover:scale-110 transition duration-150  active:scale-95'
                                    width={41}
                                    height={30}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    alt='image' />
                            </a> : null

                        }
                    </div>
                </div>
                <p className=' text-white text-opacity-50 lg:text-[20px] text-[12px]  font-normal mb-2'>{data.description}</p>
                {/* <p dangerouslySetInnerHTML={{__html:data.description}}/> */}

                <ul className='flex flex-wrap  lg:py-8 py-3'>
                    {
                        data.targets.map((target, index) => {
                            return (
                                <Targets
                                    key={index}
                                    name={target} />
                            )
                        })
                    }
                </ul>


            </div>
        </div>

    )
}
