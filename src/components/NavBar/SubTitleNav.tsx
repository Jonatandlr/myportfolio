import React from 'react'

function SubTitleNav({ index, title,href }: { index: string, title: string,href:string }) {
    return (
        <a 
        href={href}
        className="font-normal flex  flex-nowrap justify-center items-center 2xl:text-2xl lg:visible xl:text-xl lg:text-base invisible hover:text-Custom-red">
            <span
                className='text-Custom-red pt-0.5'
            >{index}</span>
            {title}
        </a>
    )
}

export default SubTitleNav