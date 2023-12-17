import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'
    id="about-me">
        <video 
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-320px] left-0 z-[1] w-full h-full object-cover md:top-[-240px]'
        >
            <source src='/blackhole.webm' type='video/webm' />
        </video>
        <HeroContent />
    </div>
  )
}

export default Hero