"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const HeroContent = () => {
  return (
      <motion.div
      initial="hidden"
      animate="visible"
      className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
      >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
            <span>
            My Name,
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Muhamad Basuki Raharjo </span>
            <br />Web & Game Developer
            </span>
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
            Hello, My name Is Muhamad Basuki Raharjo I&apos;m a Web & Game Developer From Bogor, West Java 
        </motion.p>
        </div>
        <div className='hidden md:flex'>
        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
        >
            <Image
                src="/mainIcons.svg"
                alt="work icons"
                height={650}
                width={650}
            />
        </motion.div>
        </div>
    </motion.div>
  )
}

export default HeroContent