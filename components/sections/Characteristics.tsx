import React from 'react'
import MyTags from '../myComponents/Tags'
import { Separator } from '../ui/separator'

const Characteristics = () => {
  return (
    <section id='spec' className='w-full h-full py-40 bg-secondary'>
        <div className='flex flex-col gap-10 md:gap-20 lg:gap-20 px-5 md:px-20 lg:px-40 xl:container xl:mx-auto'>
            <div className="flex gap-10">
                <MyTags>UX/UI</MyTags>
                <MyTags>Research</MyTags>
                <MyTags>Prototype</MyTags>
                <MyTags>Design System</MyTags>
            </div>
            
            <div className='flex flex-col md:flex-row w-full gap-8'>
                <div className='flex flex-col gap-4 w-full md:w-1/3'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-sans font-semibold'>Project</p>
                        <p className='font-sans'>Mobile App Design</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-sans font-semibold'>Tools</p> 
                        <p className='font-sans'>Figma, Illustrator, Rive</p>
                    </div>
                </div>
                
                <div className='flex flex-col w-full md:w-1/3 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-sans font-semibold'>Duration</p>
                        <p className='font-sans'>Design Sprint of 4 weeks</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-sans font-semibold'>Mentors</p>
                        <p className='font-sans'>Vieri Fidanza | Camila Jatahy | Leo Rieß</p>
                    </div>
                </div>
                
                <div className='w-full md:w-1/3'/>
            </div>
            
            {/* About */}
            <div id='about' className='snap-x scroll-mt-9 xl:scroll-mt-28 flex flex-col w-full gap-10 mt-10'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-mono text-4xl font-normal italic'>about</h1>
                    <Separator className='bg-black'/>
                </div>
                
                <div className='flex flex-col lg:flex-row gap-10 lg:gap-40'>
                    <div className='flex flex-col w-full lg:w-1/2 gap-2'>
                        <p className='font-sans font-semibold'>Project Overview</p>
                        <Separator className='bg-black'/>
                        <p className='font-sans'>A social app designed to make volunteering simple, social, and rewarding. MOYO lets young adults discover opportunities nearby, join with one tap, and feel impact through purpose and connection</p>
                    </div>
                    
                    <div className='flex flex-col w-full lg:w-1/2 gap-2'>
                        <p className='font-sans font-semibold'>Problem Statement</p>
                        <Separator className='bg-black'/>
                        <p className='font-sans'>Young adults want to contribute through volunteering — but current platforms make the experience overwhelming. Opportunities feel hard to discover and the process lacks social connection.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Characteristics