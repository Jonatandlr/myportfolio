import React from 'react'

export default function Targets({ name }: { name: string }) {
    return (
        <div className='w-fit flex justify-center items-start bg-Custom-blueLight rounded-[20px] px-2 py-1 m-1'>
            <div className='border-l-2 pl-1 border-Custom-red text-white text-opacity-50 text-sm font-normal'>{name}</div>
        </div>

    )
}
