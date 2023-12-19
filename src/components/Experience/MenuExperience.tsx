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
                {items.map((element) => (
                    <motion.div key={element.id} onClick={() => {
                        activeMenu(element.id)
                        setActive(element.id)
                    }}

                        className={`transition border-l-8 border-black font-medium text-[20px] cursor-pointer  px-5 py-2 mx-2 relative`}>

                        {active === element.id && (
                            <motion.div
                                layoutId="experiencebuble"
                                transition={{ type: "spring", bounce: "0.5", duration: 0.6 }}
                                className='z-10 absolute top-0 left-[-8px] w-2 h-full bg-Custom-red rounded-full'></motion.div>)}
                        <motion.span
                            initial={{ color: "#FFFF", opacity: 0.5 }}
                            animate={{ color: active === element.id ? "#F80040" : "#FFFF", opacity: active === element.id ? 1 : 0.5 }}
                            className='relative '>
                            {element.name}
                        </motion.span>
                    </motion.div>
                ))}
            </div>

        </div>
    )
}


// ${active === item.id ? "border-l-4 border-Custom-red" : "border-l-4 border-black"}