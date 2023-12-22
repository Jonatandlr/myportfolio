import React from 'react'
import TittlePage from '@/components/TittlePage'
import ProyectsComponent from '@/components/Proyects/ProyectComponent'
import useProjects from '@/hooks/useProjects'

export default function ProyectsPage() {
    const proyects = useProjects()
    return (
        <div
            id='Proyects'
            className='bg-Custom-blueDark 2xl:px-60 xl:px-40 lg:px-28  md:px-24  px-10 py-10 flex lg:justify-start 2xl:justify-center'>
            <div className=' max-w-[1280px] w-full'>
                <div className='w-full'>
                    <TittlePage title='Projects' index='04.' variant='Dark' />
                </div>
                <div className='md:my-10 my-5 grid md:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        proyects.map((proyect, index) => {
                            return (
                                <div key={index} className='flex justify-center w-full '>
                                    <ProyectsComponent data={proyect} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
