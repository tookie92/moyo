import React from 'react'
import { Separator } from '../ui/separator'
import Image from 'next/image'
import MyTags from '../myComponents/Tags'
import Mood from '../myComponents/Mood'

const Persona = () => {
  return (
    <div className='h-full py-10 flex-col flex bg-secondary z-10 px-5 md:px-20 lg:px-40  gap-10 md:gap-20 lg:gap-10'>
       <div className=' flex flex-col gap-4 '>
                <h1 className='font-mono text-4xl font-normal italic'> User Persona </h1>
                <Separator className='bg-black'/>
            </div>

            <div className='flex gap-4 '>
               
                <Image
                    src={"/sophie.svg"}
                    alt="Hero"
                    width={400}
                    height={400}
                    priority
                    className='flex-1'
                />
                 <div className='flex flex-col gap-4 w-2/3 p-8'>
                    <h3 className='font-sans text-3xl font-semibold'>Sophie Social</h3>
                    <p className=' font-sans text-xl'>{`“I want volunteering to feel`} <span className=' text-primary font-mono italic'> simple, social, and meaningful</span>  — {`not like another project on my to-do list.”`}</p>
                    <div className='flex gap-4 w-[650px] flex-wrap mt-4'>
                        <MyTags classname='bg-white text-black text-xl'> 29 years </MyTags>
                        <MyTags classname='bg-white text-black text-xl'> Berlin </MyTags>
                        <MyTags classname='bg-white text-black text-xl'> Project Manager </MyTags>
                        <MyTags classname='bg-white text-black text-xl'> Empathic </MyTags>
                        <MyTags classname='bg-white text-black text-xl'> curious </MyTags>
                        <MyTags classname='bg-white text-black text-xl'> social </MyTags>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full h-[427px] overflow-hidden'>
                <div className='w-full h-full scale-95'> {/* Ajustez l'échelle si nécessaire */}
                    <Mood className="w-full h-full" />
                </div>
            </div>
    </div>
  )
}

export default Persona