"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface MenuExperienceProps {
    items: {
        id: string,
        name: string,
    }[],
    activeMenu: (item: string) => void
}

export default function MenuExperience({ items, activeMenu }: MenuExperienceProps) {

    const [active, setActive] = React.useState(items[0].id)
    return (
        <div >
            <div className='w-fit flex flex-col'>
                {items.map((item) => (
                    <motion.div key={item.id} onClick={() => {
                        activeMenu(item.id)
                        setActive(item.id)
                    }}

                        className={`transition border-l-8 border-black text-white font-medium text-[24px] cursor-pointer  px-5 py-2 mx-2 relative`}>

                        {active === item.id && (
                            <motion.div
                                layoutId="bubble"
                                transition={{ type: "spring", bounce: "0.5", duration: 0.6 }}
                                className='z-10 absolute top-0 left-[-8px] w-2 h-full bg-Custom-red rounded-full'></motion.div>)}
                        <motion.span
                            layoutId="bubble"

                            animate={{ color: active === item.id ? "#F80040" : "#fff", opacity: active === item.id ? 1 : 0.2 }}
                            className='relative '>
                            {item.name}
                        </motion.span>
                    </motion.div>
                ))}
            </div>

        </div>
    )
}


// ${active === item.id ? "border-l-4 border-Custom-red" : "border-l-4 border-black"}