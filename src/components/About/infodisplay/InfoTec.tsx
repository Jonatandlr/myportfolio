import React from 'react'
import SimpleCard from '../SimpleCard';
interface InfoTecProps {
    elements: {
        icon: string;
        name: string;
    }[];
}

export default function InfoTec({elements}: InfoTecProps) {
  return (
    <div className='grid  md:grid-cols-6  grid-cols-3 xl:gap-1 gap-3'>
         {elements.map((item, index) => (
            <div key={index}>
                <SimpleCard name={item.name} icon={item.icon} />
                
            </div>
         ))}
    </div>
  )
}
