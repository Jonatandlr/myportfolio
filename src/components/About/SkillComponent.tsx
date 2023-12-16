import React from 'react'
import MenuSkills from './MenuSkills'
import useMenuSkills from '@/hooks/useMenuSkills'

export default function SkillComponent() {
    const MenuS = useMenuSkills()
  return (
    <div className='w-full bg-Custom-blueDark rounded-[20px] p-10'>
        <MenuSkills items={MenuS}/>
    </div>
  )
}
