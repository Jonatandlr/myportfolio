"use client"
import React, { use } from 'react'
import TittlePage from '@/components/TittlePage'
import MenuExperience from '../Experience/MenuExperience'
import useMenuExperience from '@/hooks/useMenuExperience'

export default function ExperiencePage() {
  const menuExp = useMenuExperience()
  const [active, setActive] = React.useState("RoBorregos")


  const activeMenu =(item:string)=>{
    if (["RB"].includes(item)) {
      setActive(item);
    }
  }
  return (
    <div id='Experience' className='h-screen bg-Custom-blueDark lg:px-28 py-5 md:px-10 px-5 '>
      <div className='lg:my-10 my-4 w-full'>
        <TittlePage title='Experience' index='03.' variant='Dark'/>
      </div>

      <div className='lg:px-10'>
        <MenuExperience items={menuExp} activeMenu={activeMenu} />
      </div>



    </div>
  )
}
