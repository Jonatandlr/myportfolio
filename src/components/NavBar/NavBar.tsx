import React from 'react'
import TittleNav from './TittleNav'
import SubTitleNav from './SubTitleNav'
import ButtonResume from './ButtonResume'
export default function NavBar() {
    return (
        <div className='font-Poppins fixed w-screen text-white bg-black bg-opacity-30 lg:px-20 md:px-10 px-1 py-3 flex justify-between items-center'>

            <TittleNav title={"JonatanDLR"} />
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-4 gap-3 pr-2'>
                    <SubTitleNav index="01." title=" Home" href='#'/>
                    <SubTitleNav index="02." title=" About Me" href='#About'/>
                    <SubTitleNav index="03." title=" Experience" href='#' />
                    <SubTitleNav index="04." title=" Proyects" href='#'/>
                </div>
                <ButtonResume />
            </div>
        </div>
    )
}
