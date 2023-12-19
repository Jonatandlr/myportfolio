import GridSimpleCard from '@/components/About/GridSimpleCard'
import TittlePage from '@/components/TittlePage'
import useCurrentTecnologies from '@/hooks/useCurrentTecnologies'
import React from 'react'
import SkillComponent from '../About/SkillComponent'

export default function AboutPage() {
    const currentTec = useCurrentTecnologies()
    return (
        <div id="About" className='lg:px-28 py-5 md:px-10 px-5 flex flex-col items-center'>
            <div className='lg:my-10 my-1 w-full'>
                <TittlePage title='About Me' index='02.' variant='gray' />
            </div>
            <div className='font-bold text-5xl lg:flex lg:flex-row flex-col lg:justify-evenly items-center lg:mb-10'>
                <div className='mr-3 mb-5 flex flex-col '>
                    <div className='lg:mb-5 my-1 font-semibold 2xl:text-5xl lg:text-4xl md:text-3xl text-2xl' >
                        <h4>Hi<span className="text-Custom-red">!</span> Im <span className='text-Custom-red'>Jonatan</span></h4>
                    </div>
                    <p className='md:w-[588px] w-fit text-black 2xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm font-normal'>
                        Mechatronics Engineering student at Tecnológico de Monterrey with a passion for robotics and
                        especially programming which has led me to acquire various skillsin both front-end and back-end
                        modules as well as other skills in mechanical design in
                        programs such as SolidWorks.
                    </p>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='  bg-Custom-blueDark rounded-[20px] lg:p-5 p-4 w-fit lg:mb-0 mb-2 text-center'>
                        <h4 className=' text-white 2xl:text-2xl xl:text-xl lg:text-base  md:text-base text-sm font-normal' >Some of the technologies I have been working:</h4>
                        <div className='lg:py-5 pt-2'>
                            <GridSimpleCard items={currentTec} />
                        </div>
                    </div>
                </div>
            </div>


            <SkillComponent />


        </div>
    )
}
