import Image from 'next/image'
import React from 'react'
import MyTags from '../myComponents/Tags'

const Contact = () => {
  return (
    <div className=' relative h-svh py-28 flex-col flex  bg-foundation z-10 px-5 md:px-20 lg:px-40  gap-10 md:gap-40 lg:gap-20'>
        <div className=' relative flex flex-col w-full gap-10 h-full items-center justify-center'>
            <Image
                src={"/thanks.svg"}
                alt="Hero"
                width={350}
                height={350}
            />
            <h3 className='font-mono text-primary italic text-5xl'>Get in touch with us</h3>
            <div className="flex gap-10 mt-10">
                <div className="flex flex-col items-center justify-center gap-10">
                    <Image
                        src={"/joseph.png"}
                        alt="Hero"
                        width={150}
                        height={150}
                    />
                    <MyTags classname='bg-white text-black text-lg uppercase'>Joseph Ikinda</MyTags>
                </div>
                <div className="flex flex-col items-center justify-center gap-10">
                    <Image
                        src={"/karo.png"}
                        alt="Hero"
                        width={150}
                        height={150}
                    />
                    <MyTags classname='bg-white text-black text-lg uppercase'>Karo Braun</MyTags>
                </div>
                <div className="flex flex-col items-center justify-center gap-10">
                    <Image
                        src={"/stella.png"}
                        alt="Hero"
                        width={150}
                        height={150}
                    />
                    <MyTags classname='bg-white text-black text-lg uppercase'>Stella Bartolomee</MyTags>
                </div>
            </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 z-0 h-64 w-full'>
            <Image
                src={"/herz.svg"}
                alt="Hero"
                width={370}
                height={370}
                className='object-cover object-top '
            />
        </div>
    </div>
  )
}

export default Contact