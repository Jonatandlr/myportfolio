"use client"
import React from 'react'
import TypeWriter from '@/components/Home/TypeWriter'
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import useRedes from '@/hooks/useRedes';

import { motion } from 'framer-motion';


const inicioElements = {
    hidden: { opacity: 0, translateY: 100 },
    visible: {
        opacity: 1,
        translateY: 0,
    },
}

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ease:'linear', duration:1}}
            className='bg-Homebg bg-no-repeat text-white bg-cover bg-center h-screen flex flex-col justify-center items-center'
        >
            <motion.h1
                variants={inicioElements}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.5 }}
                className=' text-Custom-red font-bold  text-center 2xl:text-8xl lg:text-7xl md:text-6xl text-5xl  my-4'>
                Jonatan David <br /> De La Rosa Patlan
            </motion.h1>
            <motion.span
                variants={inicioElements}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.8 }}
                className='font-bold  text-center flex 2xl:text-6xl lg:text-5xl md:text-4xl text-3xl'
            >
                {"I'm"}<span className='invisible'>/</span><TypeWriter />
            </motion.span>
            <motion.div
                variants={inicioElements}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 1 }}
                className='grid grid-cols-4 gap-5 2xl:text-6xl lg:text-6xl md:text-5xl text-4xl mt-10'
            >
                <a href={useRedes().gitHub} target='_blank' rel="noreferrer"><FaGithub className='hover:text-Custom-red hover:scale-110' /></a>
                <a href={useRedes().instagram} target='_blank' rel="noreferrer"><FaInstagram className='hover:text-Custom-red hover:scale-110' /></a>
                <a href={useRedes().linkedin} target='_blank' rel="noreferrer"><FaLinkedin className='hover:text-Custom-red hover:scale-110' /></a>
                <a href={useRedes().correo} target='_blank' rel="noreferrer"><FaEnvelope className='hover:text-Custom-red hover:scale-110' /></a>

            </motion.div>



        </motion.div>
    )
}
