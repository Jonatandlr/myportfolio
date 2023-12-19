"use client"
import React from 'react'
import MenuSkills from './MenuSkills'
import useMenuSkills from '@/hooks/useMenuSkills'
import useSkillInfo from '@/hooks/useSkillInfo'
import InfoDisplay from './InfoDisplay'

export default function SkillComponent() {
    const MenuS = useMenuSkills()
    const skillInfo = useSkillInfo()
    const [active, setActive] = React.useState(MenuS[0].id)

    const activeMenu =(item:string)=>{
      if (["pL", "Tec", "Mech", "sF"].includes(item)) {
        setActive(item);
      }
    }
  return (
    <div className='lg:w-full w-fit bg-Custom-blueDark rounded-[20px] lg:px-10 lg:py-10  py-0 px-5 pb-3 flex lg:flex-row flex-col items-center'>
        <MenuSkills items={MenuS} activeMenu={activeMenu}/>
        <InfoDisplay active={active as "pL" | "Tec" | "Mech" | "sF"} info={skillInfo}/>
    </div>
  )
}
