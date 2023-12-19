"use client"
import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function TittlePage({ title, index,variant}: { title: string, index: string,variant:string}) {

    const [ref, inView] = useInView({
        triggerOnce: false, // true: solo se ejecuta una vez, false se ejecuta cada vez que este a la vista
        threshold: 0.5, // Se considerará en vista cuando el 50% del elemento sea visible
    });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
            transition={{ duration: 1 }}
        >
            {
                variant === 'gray' ?
                    <div className='flex font-Poppins font-bold mt-6 2xl:text-7xl lg:text-6xl md:text-5xl text-4xl w-full'>
                        <h3 className='TitlePage--variantRed'>{index}</h3>
                        <h3 className="TitlePage">{title}</h3>
                    </div>
                    :
                    <div className='flex font-Poppins font-bold mt-6 2xl:text-7xl lg:text-6xl md:text-5xl text-4xl w-full'>
                        <h3 className='TitlePage--variantRed'>{index}</h3>
                        <h3 className="TitlePageVariant">{title}</h3>
                    </div>
            }
        </motion.div>
    )
}

export default TittlePage