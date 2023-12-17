import React from 'react'
import InfoPL from './infodisplay/InfoPL'


interface InfoDisplayProps {
    active: "pL" | "Tec" | "Mech" | "sF";
    info: {
        pL: {
            name: string;
            icon: string;
            years: string;
            use: string[];
        }[];
        Tec: {
            icon: string;
            name: string;
        }[];
        Mech: {
            icon: string;
            name: string;
            description: string[];
            targets: string[];
        }[];
        sF: {};
    };
}


export default function InfoDisplay({ active, info }: InfoDisplayProps) {
    const elements=info[active];
    
    return (
        <div className='flex justify-center items-center w-full'>
            {active === "pL" && (<div>
                <InfoPL elements={elements as {
                name: string;
                icon: string;
                years: string;
                use: string[];
            }[]} />
            </div>)}
            {active === "Tec" && (<div></div>)}
            {active === "Mech" && (<div></div>)}
            {active === "sF" && (<div></div>)}
        </div>
    )
}
