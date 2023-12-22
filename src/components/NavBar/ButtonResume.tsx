import React from 'react'

function ButtonResume() {
    return (
        <a
            target='_blank'
            rel="noreferrer"
            href='/archivos/CV.pdf/'
           >
            <button  className='bg-Custom-blueDark rounded-3xl px-3 h-[40px] hover:scale-110 active:scale-90 transition ease-in-out'>

            <div className=' text-Custom-red  md:font-semibold  md:text-[25px] text[25px] font-medium'>Resume</div>
            </button>
        </a>
    )
}

export default ButtonResume