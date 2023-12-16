"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface MenuSkillsProps {
  items: {
    id: string,
    name: string
  }[]
}

export default function MenuSkills({ items }: MenuSkillsProps) {

  const [active, setActive] = React.useState(items[0].id)
  return (
    <div className='flex items-center bg-Custom-blueLight w-fit rounded-[20px] px-3 py-5'>
      <div className='w-fit h-[150px] flex'>
        {/* <div className='w-3 h-full bg-Custom-blueDark rounded-[20px] mr-2'>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: active === items[0].id ? 0 : 30 }}
            transition={{ duration: 0.5 }}
            className='w-full h-[30px] bg-Custom-red rounded-[20px]'></motion.div>

        </div> */}
        <div className=''>
          {items.map((item, index) => (
            <motion.div
              onClick={() => setActive(item.id)}
              whileTap={{ scale: 0.9 }}
              key={index}
              className='text-left text-white pl-2 pb-3 cursor-pointer flex'>
              {active === item.id &&( 
              <div className=' border-r-4 border-Custom-red'></div>)}
              <h4 className='lg:text-xl font-bold  whitespace-nowrap'>{item.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
