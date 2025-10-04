import Image from 'next/image'
import React from 'react'
import SplitText from '../SplitText'

const Hero = () => {
  return (
    <div className=' flex  relative h-screen py-8 bg-foundation  '>
        <div className=' relative z-10  flex  items-center  mx-auto  justify-around  px-5 md:px-20 lg:px-40  gap-10 md:gap-20 lg:gap-40  '>
            <div className='flex flex-col gap-3 justify-center'>
                <Image
                    src={"./heromoyo.svg"}
                    alt="Hero"
                    width={500}
                    height={500}
                    priority
                />
               
                <div className='flex flex-col gap-8 mt-8'>
                    <p className='font-sans text-4xl leading-[1.5]'>
                        Your easy way to <span className='font-mono italic'>volunteer</span> and<span className='font-mono italic'> connect</span> with others
                    </p>
                    <div className='flex flex-col gap-1'>
                    <p className='flex text-primary font-sans font-semibold'> Stella Bartolomee | Joseph Ikinda | Karolina Braun</p>  
                    <p className='flex font-sans '> SPICED Academy 2025</p>  
                    </div>  
                </div>  
            </div>
            <div className='flex    w-full h-full'>-
                <Image
                    src={"/heroprototype.png"}
                    alt="Heroprotoype"
                    width={1000}
                    height={1000}
                    className='w-full h-full object-cover'
                />  
            </div> 
        </div>
            {/* Background border - déborde en bas */}
            <div className='absolute bottom-0 left-0 right-0 z-0 h-1/2 w-full'>
                <Image
                    src={"/bordergreen.svg"}
                    alt="Hero"
                    fill
                    className='object-cover object-top-left '
                />
            </div>
    </div>
  )
}

export default Hero