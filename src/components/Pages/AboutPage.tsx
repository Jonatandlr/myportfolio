import GridSimpleCard from '@/components/About/GridSimpleCard'
import TittlePage from '@/components/TittlePage'
import useCurrentTecnologies from '@/hooks/useCurrentTecnologies'
import React from 'react'
import SkillComponent from '../About/SkillComponent'

export default function AboutPage() {
    const currentTec = useCurrentTecnologies()
    return (
        <div id="About" className=' 2xl:px-60 xl:px-40 lg:px-28 py-5 md:px-24  px-10 flex flex-col  2xl:items-center bg-white'>
            <div className='max-w-[1280px] flex flex-col items-center'>
                <div className='lg:my-10 my-1 w-full'>
                    <TittlePage title='About Me' index='02.' variant='gray' />
                </div>

                <div className='w-full font-bold text-5xl lg:flex lg:flex-row flex-col lg:justify-evenly items-center lg:mb-10'>
                    <div className='mr-3 mb-5 flex flex-col '>
                        <div className='lg:mb-5 my-1 font-semibold 2xl:text-5xl lg:text-4xl md:text-3xl text-2xl' >
                            <h4>Hi<span className="text-Custom-red">!</span> Im <span className='text-Custom-red'>Jonatan</span></h4>
                        </div>
                        <p className='md:max-w-[550px] max-w-fit text-black 2xl:text-2xl lg:text-xl md:text-lg text-lg  font-normal'>
                            <span className="text-black font-semibold">Mechatronics</span> Engineering student at Tecnológico de Monterrey with a
                            <span className='text-black font-semibold'> passion</span> for robotics and
                            especially <span className='text-black font-semibold'> programming</span> which has led me to acquire various skills in both <span className='text-black font-semibold border-b-4 border-Custom-red whitespace-nowrap'> front-end </span>
                            and <span className='text-black font-semibold border-b-4 border-Custom-red whitespace-nowrap'>back-end </span>
                            modules as well as other skills in mechanical design in
                            programs such as SolidWorks.
                        </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='max-w-[400px] bg-Custom-blueDark rounded-[20px] lg:p-5 p-4 w-fit lg:mb-0 mb-2 text-center'>
                            <h4 className=' text-white 2xl:text-2xl xl:text-xl lg:text-base  md:text-base text-sm font-normal' >Some of the technologies I have been working:</h4>
                            <div className='lg:pt-2 flex justify-center h-fit'>
                                <GridSimpleCard items={currentTec} />
                            </div>
                        </div>
                    </div>
                </div>


                <SkillComponent />

            </div>



        </div>
    )
}
