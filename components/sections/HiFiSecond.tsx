import React from 'react'
import Title from '../myComponents/Title'
import { Separator } from '../ui/separator'
import Image from 'next/image'

const HiFiSecond = () => {
  return (
    <div className='h-full min-h-screen  py-10 flex-col flex bg-tertiary z-10 px-5 md:px-20 lg:px-40  gap-10 md:gap-40 lg:gap-10 text-foundation'>
        <Title color title='High Fidelity Wireframes'/>
        <div className="flex flex-col gap-20 w-full h-full">
            <div className='flex flex-col w-1/2 gap-2 '>
                    <p className='font-sans font-semibold '> Flow 2 </p>
                    <Separator className='bg-white'/>
                    <p className='font-sans '> As a person interested in volunteering, I want to connect with others after the event, so I feel motivated to come back.</p>
                </div>
            <div className='w-full h-full flex'>
                <Image
                    src={"/flowsecond.png"}
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

export default HiFiSecond