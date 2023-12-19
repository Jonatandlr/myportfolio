import React from 'react'

export default function TittleNav({ title }: { title: string }) {
    return (
        <div>
            <h2
                className='lg:text-[30px] md:text-4xl text-2xl  font-semibold py-3'
            ><span
                className='text-Custom-red font-semibold'
            >/</span>{title}</h2>
        </div>
    )
}
