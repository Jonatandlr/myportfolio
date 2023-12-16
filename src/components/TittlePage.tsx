import React from 'react'

function TittlePage({ title, index }: { title: string, index: string }) {
    return (
        <div>
            <div className='flex  font-Poppins font-bold mt-6 2xl:text-7xl lg:text-6xl md:text-5xl text-3xl'>
                <h3 className='TitlePage--variantRed'>{index}</h3>
                <h3 className="TitlePage">{title}</h3>
            </div>
        </div>
    )
}

export default TittlePage