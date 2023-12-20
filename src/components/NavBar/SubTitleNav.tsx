import React from 'react'

function SubTitleNav({ index, title,href,click}: { index: string, title: string,href:string,click?:()=>void }) {
    return (
        <a 
        onClick={click}
        href={href}
        className="font-semibold flex  flex-nowrap justify-center items-center 2xl:text-2xl xl:text-xl lg:text-base  text-xl hover:text-Custom-red transition duration-300">
            <span
                className='text-Custom-red pt-0.5'
            >{index}</span>
            {title}
        </a>
    )
}

export default SubTitleNav