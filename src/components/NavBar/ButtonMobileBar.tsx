import React from 'react'

function ButtonMobileBar() {
    return (
        <div className='font-semibold flex items-center hover:cursor-pointer group'>
            <span className='mr-1 text-lg'>MENU</span>
            <div className='flex flex-col justify-center w-[40px] h-[40px]'>
                <div className='w-full h-[3px] bg-white my-[4.5px] group-hover:bg-Custom-red group-hover:w-3/4 ease-in duration-200'></div>
                <div className='w-1/2 h-[3px] bg-white my-[4.5px] group-hover:bg-Custom-red group-hover:w-full ease-in duration-200'></div>
                <div className='w-full h-[3px] bg-white my-[4.5px] group-hover:bg-Custom-red group-hover:w-3/4 ease-in duration-200'></div>
            </div>
        </div>
    )
}

export default ButtonMobileBar