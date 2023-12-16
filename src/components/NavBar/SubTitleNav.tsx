import React from 'react'

function SubTitleNav({ index, title }: { index: string, title: string }) {
    return (
        <button className="font-normal flex justify-center items-center 2xl:text-3xl xl:visible xl:text-2xl  invisible hover:text-Custom-red">
            <span
                className='text-Custom-red pt-0.5'
            >{index}</span>
            {title}
        </button>
    )
}

export default SubTitleNav