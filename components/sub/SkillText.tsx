"use client"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[35px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            The Programing Language I Use to create the Web & Game   
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            I use this Programing Languege 
        </motion.div>
    </div>
  )
}

export default SkillText