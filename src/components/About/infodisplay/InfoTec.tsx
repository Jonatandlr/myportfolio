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
    <div className='grid lg:grid-cols-5  grid-cols-3 xl:gap-4 gap-3'>
         {elements.map((item, index) => (
            <div key={index}>
                <SimpleCard name={item.name} icon={item.icon} />
                
            </div>
         ))}
    </div>
  )
}
