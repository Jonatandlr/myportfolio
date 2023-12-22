"use client"
import React from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Home from '@/components/Pages/Home'
import AboutPage from '@/components/Pages/AboutPage'
import ExperiencePage from '@/components/Pages/ExperiencePage'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ProyectsPage from '@/components/Pages/ProyectsPage'

export default function Principal() {
  const [animationComplete, setAnimationComplete] = useState(false)
  return (
    <div className='font-Poppins bg-Custom-blueDark'>
      {!animationComplete && (<div className='bg-[#242424] flex justify-center items-center h-screen'>

        <motion.div className='absolute w-[100px] h-[100px] bg-Custom-red rounded-[20px]'
          animate={{
            opacity: [0, 1, 1, 1, 1, 0],
            scale: [0, 1, 1.5, 1.5, 1],
            rotate: [45, 45, 270, 45],
            borderRadius: ["20%", '20%', '50%', '20%'],
          }}
          transition={{
            duration: 1.5
          }}
          onAnimationComplete={() => { setAnimationComplete(true) }}
        ></motion.div>
      </div>)}

      {animationComplete && (<>
        <NavBar />
        <Home />
        <AboutPage />
        <ExperiencePage />
        <ProyectsPage />
      </>)}

    </div>
  )
}
