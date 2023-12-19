import React from 'react'

export default function Targets({ name }: { name: string }) {
    return (
        <div className='w-fit flex justify-center items-start bg-Custom-blueLight rounded-[20px] px-2 py-1 mx-1'>
            <div className='border-l-2 border-Custom-red pl-0.5 text-white text-opacity-50 text-sm font-normal'>{name}</div>
        </div>

    )
}
