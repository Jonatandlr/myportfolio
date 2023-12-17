"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface MenuSkillsProps {
  items: {
    id: string,
    name: string
  }[]
  activeMenu: (item: string) => void
}

export default function MenuSkills({ items, activeMenu }: MenuSkillsProps) {

  const [active, setActive] = React.useState(items[0].id)
  return (
    <div className='flex items-center bg-Custom-blueLight w-fit rounded-[20px] px-5 py-5'>
      <div className='w-fit h-[150px] '>
        {items.map((item, index) => (
          <motion.div
            onClick={() => {
              setActive(item.id)
              activeMenu(item.id)
            }
            }
            // whileTap={{ scale: 0.9 }}
            key={index}
            className=' text-left text-white pb-3 cursor-pointer flex'>
            {active === item.id && (
              <motion.div
                layoutId="bubble"
                transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
                className='mr-2 border-r-4 border-Custom-red'></motion.div>)}
            <h4 className="lg:text-xl font-bold  whitespace-nowrap">{item.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
