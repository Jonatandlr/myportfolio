"use client"
import React from 'react'
import TypeWriter from '@/components/Home/TypeWriter'
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import {motion } from 'framer-motion';


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
            transition={{ duration: 1.5 }}
            className='bg-Homebg bg-no-repeat text-white bg-cover bg-center h-screen flex flex-col justify-center items-center'>
            <motion.h1
                variants={inicioElements}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.5 }}
                className=' text-Custom-red font-bold text-8xl text-center'>
                Jonatan David <br /> De La Rosa Patlan</motion.h1>
            <motion.span
                variants={inicioElements}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.5 }}
                className='font-bold  text-center flex text-6xl'
                >
                I'm<span className='text-transparent'>/</span><TypeWriter />
            </motion.span>
            
        </motion.div>
    )
}
