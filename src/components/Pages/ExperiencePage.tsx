"use client"
import React from 'react'
import TittlePage from '@/components/TittlePage'
import MenuExperience from '../Experience/MenuExperience'
import ExperienceDisplay from '../Experience/ExperienceDisplay'
import useMenuExperience from '@/hooks/useMenuExperience'
import useExperience from '@/hooks/useExperience'

export default function ExperiencePage() {
  const menuExp = useMenuExperience()
  const infoExp = useExperience()
  const [activeExp, setActiveExp] = React.useState(menuExp[0].id)


  const activeExpMenu = (item: string) => {
    console.log(item)
    setActiveExp(item);

  }
  return (
    <div id='Experience' className='bg-Custom-blueDark 2xl:px-60 xl:px-40 lg:px-28  md:px-24  px-10 py-10 flex lg:justify-start 2xl:justify-center'>
      <div className='max-w-[1280px]'>
        <div className='lg:mt-10 my-6 w-full'>
          <TittlePage title='Experience' index='03.' variant='Dark' />
        </div>

        <div className='lg:px-10 flex md:flex-row flex-col '>
          <MenuExperience items={menuExp} activeMenu={activeExpMenu} />
          <ExperienceDisplay select={activeExp as "RB" | "PR"} info={infoExp} />
        </div>
      </div>
    </div>
  )
}
