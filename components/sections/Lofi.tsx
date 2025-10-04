import React from 'react'
import { Separator } from '../ui/separator'
import Title from '../myComponents/Title'
import Image from 'next/image'

const Lofi = () => {
  return (
    <div className='h-full min-h-screen py-10 flex-col flex bg-foundation z-10 px-5 md:px-20 lg:px-40  gap-10 md:gap-40 lg:gap-20'>
        <Title title='Low Fidelity Wireframes'/>

        <div className="flex w-full h-full">
            <Image
                src={"/lofiscreens.png"}
                alt="Hero"
                width={1000}
                height={1000}
                priority
                className='w-full'
            />
        </div>
    </div>
  )
}

export default Lofi