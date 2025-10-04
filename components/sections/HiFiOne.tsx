import React from 'react'
import Title from '../myComponents/Title'
import { Separator } from '../ui/separator'
import Image from 'next/image'

const HiFiOne = () => {
  return (
    <div className='h-full min-h-screen mt-44 py-10 flex-col flex bg-foundation z-10 px-5 md:px-20 lg:px-40  gap-10 md:gap-40 lg:gap-10'>
        <Title title='High Fidelity Wireframes'/>
        <div className="flex flex-col gap-20 w-full h-full">
            <div className='flex flex-col w-1/2 gap-2 '>
                    <p className='font-sans font-semibold '> Flow 1 </p>
                    <Separator className='bg-black'/>
                    <p className='font-sans '> “As a person interested in volunteering, I want to quickly discover an event that matches my time and location, so I can easily join without feeling overwhelmed.”</p>
                </div>
            <div className='w-full h-full flex'>
                <Image
                    src={"/flowfirst.png"}
                    alt="Hero"
                    width={1000}
                    height={1000}
                    priority
                    className='w-full h-full object-contain'
                />
            </div>
        </div>
    </div>
  )
}

export default HiFiOne