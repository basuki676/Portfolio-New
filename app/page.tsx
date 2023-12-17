import Image from 'next/image'
import Hero from '@/components/main/Hero'
import Skills from '@/components/main/Skills'
import Projects from '@/components/main/Project'
import Sertifikat from '@/components/main/Sertifikat'

export default function Home() {
  return (
  <main className='h-full w-full'>
    <div className='flex flex-col gap-20'>
     <Hero />
     <Skills />
     <Projects />
     <Sertifikat />
    </div>
  </main>
  )
}
