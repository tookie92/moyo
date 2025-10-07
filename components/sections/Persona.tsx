import React from 'react'
import { Separator } from '../ui/separator'
import Image from 'next/image'
import MyTags from '../myComponents/Tags'
import Mood from '../myComponents/Mood'

const Persona = () => {
  return (
    <div id='persona' className='w-full h-full py-10 bg-secondary'>
        <div className='flex flex-col gap-10 md:gap-20 lg:gap-10 px-5 md:px-20 lg:px-40 xl:container xl:mx-auto'>
            <div className='flex flex-col gap-4'>
                <h1 className='font-mono text-4xl font-normal italic'>User Persona</h1>
                <Separator className='bg-black'/>
            </div>

            <div className='flex flex-col lg:flex-row gap-6 lg:gap-4'>
                <div className='w-full lg:w-1/3 flex justify-center lg:justify-start'>
                    <Image
                        src={"/sophie.svg"}
                        alt="Hero"
                        width={400}
                        height={400}
                        priority
                        className='w-full max-w-[400px] h-auto'
                    />
                </div>
                <div className='flex flex-col gap-4 w-full lg:w-2/3 p-4 md:p-8'>
                    <h3 className='font-sans text-2xl md:text-3xl font-semibold'>Sophie Social</h3>
                    <p className='font-sans text-lg md:text-xl'>
                        {`"I want volunteering to feel`} <span className='text-primary font-mono italic'>simple, social, and meaningful</span>{` — not like another project on my to-do list."`}
                    </p>
                    <div className='flex gap-3 md:gap-4 flex-wrap mt-4'>
                        <MyTags classname='bg-white text-black text-base md:text-xl'>29 years</MyTags>
                        <MyTags classname='bg-white text-black text-base md:text-xl'>Berlin</MyTags>
                        <MyTags classname='bg-white text-black text-base md:text-xl'>Project Manager</MyTags>
                        <MyTags classname='bg-white text-black text-base md:text-xl'>Empathic</MyTags>
                        <MyTags classname='bg-white text-black text-base md:text-xl'>curious</MyTags>
                        <MyTags classname='bg-white text-black text-base md:text-xl'>social</MyTags>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 w-full overflow-x-auto overflow-y-hidden'>
                <div className='w-full min-w-[800px] h-[300px] md:min-w-full md:h-[427px]'>
                    <Mood className="w-full h-full" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Persona