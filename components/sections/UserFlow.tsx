import React from 'react'
import Image from 'next/image'
import { Separator } from '../ui/separator'

const UserFlow = () => {
  return (
    <div className='h-full py-40 flex-col flex pb-44 bg-foundation z-10 px-5 md:px-20 lg:px-40  gap-10 md:gap-40 lg:gap-20'>
        <div className='w-full h-full   '>
            <Image
                src={"/PictureOne.jpg"}
                alt="Hero"
                width={1000}
                height={1000}
                priority
                className=' w-full'
            />
        </div>

            <div className=' flex flex-col gap-4 '>
                <h1 className='font-mono text-4xl font-normal italic'> UserFlow </h1>
                <Separator className='bg-black'/>
            </div>
        <div className=' w-full flex flex-col gap-20 '>
            <div className='flex flex-col w-1/2 gap-2 '>
                <p className='font-sans font-semibold '> Flow 1 </p>
                <Separator className='bg-black'/>
                <p className='font-sans'> “<b>As</b> a person interested in volunteering, <b>I want to</b> quickly discover an event that matches my time and location, <b>so I can</b> easily join without feeling overwhelmed.”</p>
            </div>

            <div className='w-full h-full'>
                <Image
                    src={"/userflow.png"}
                    alt="Hero"
                    width={1000}
                    height={1000}
                    priority
                    className='w-full h-full'
                />
            </div>
        </div>
    </div>
  )
}

export default UserFlow