import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='relative w-full min-h-screen lg:h-screen flex flex-col items-center justify-center bg-foundation py-10 lg:py-0'>
        <div className='flex flex-col lg:flex-row items-center justify-between w-full px-5 md:px-20 lg:px-40 xl:container xl:mx-auto gap-8 lg:gap-20'>
            
            {/* Colonne de texte */}
            <div className='w-full lg:w-auto flex flex-col items-center lg:items-start gap-6 md:gap-8 z-20 mt-10 lg:mt-0'>
                <div className='w-44 sm:w-64 md:w-80 lg:w-[450px]'>
                    <Image
                        src={"./heromoyo.svg"}
                        alt="Hero"
                        width={500}
                        height={500}
                        priority
                        className='w-full h-auto'
                    />
                </div>
                
                <p className='font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[1.5] text-center lg:text-left max-w-xl lg:max-w-none'>
                    Your easy way to <span className='font-mono italic'>volunteer</span> and <span className='font-mono italic'>connect</span> with others
                </p>
                
                <div className='flex flex-col gap-1 text-center lg:text-left'>
                    <p className='text-primary font-sans font-semibold text-sm sm:text-base'>
                        Stella Bartolomee | Joseph Ikinda | Karolina Braun
                    </p>  
                    <p className='font-sans text-sm sm:text-base'>SPICED Academy 2025</p>  
                </div>  
            </div>
            
            {/* Image prototype */}
            <div className='w-full lg:w-4/5 flex items-center justify-center lg:justify-end z-10 max-w-2xl lg:max-w-none lg:h-[800px]'>
                <Image 
                    src={"/heroprototype.png"}
                    alt="Hero prototype"
                    width={1000}
                    height={1000}
                    priority
                    className='w-full h-auto object-contain'
                />
            </div>
        </div>
        
        {/* Background border */}
        <div className='absolute bottom-0 left-0 right-0 z-0 h-64 md:h-80 lg:h-1/2 w-full'>
            <Image
                src={"/bordergreen.svg"}
                alt="Border"
                fill
                className='object-cover object-top'
            />
        </div>
    </section>
  )
}

export default Hero