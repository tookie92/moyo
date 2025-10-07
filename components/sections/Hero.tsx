import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='relative pb-[10vh] lg:pb-0 lg:h-screen flex flex-col lg:flex-row items-center justify-center w-full bg-foundation'>
        <div className='lg:container flex flex-col lg:flex-row items-center justify-between w-full px-5 md:px-20 lg:px-40 gap-10 lg:gap-20'>
        <div className='py-16 lg:py-0 w-full lg:w-[450px] gap-y-8 h-auto flex flex-col items-center lg:items-start'>
            <Image
                src={"./heromoyo.svg"}
                alt="Hero"
                width={500}
                height={500}
                priority
            />
            
            <p className='font-sans text-3xl lg:text-3xl leading-[1.5] text-center lg:text-left'>
                Your easy way to <span className='font-mono italic'>volunteer</span> and <span className='font-mono italic'>connect</span> with others
            </p>
            
            <div className='flex flex-col gap-1 text-center lg:text-left'>
                <p className='text-primary font-sans font-semibold'>Stella Bartolomee | Joseph Ikinda | Karolina Braun</p>  
                <p className='font-sans'>SPICED Academy 2025</p>  
            </div>  
        </div>
        
        <div className='w-full lg:w-4/5 xl:z-10 flex items-center lg:h-[800px]'>
            <Image 
                src={"/heroprototype.png"}
                alt="Hero prototype"
                width={1000}
                height={1000}
                className='w-full h-auto'
            />
        </div>
        
        {/* Background border */}
        <div className='absolute bottom-0 left-0 right-0 z-0 h-1/2 w-full'>
            <Image
                src={"/bordergreen.svg"}
                alt="Border"
                fill
                className='object-cover object-top-left'
            />
        </div>
        </div>
    </section>
  )
}

export default Hero