import Image from 'next/image'
import React from 'react'
import MyTags from '../myComponents/Tags'
import Section from '../myComponents/Section'

const Contact = () => {
  return (
    <Section id='contact' background="foundation" classname='snap-x scroll-mt-0 lg:scroll-mt-9 relative items-center justify-center flex min-h-screen py-20'>
        <div className='relative flex  flex-col w-full gap-10 h-full items-center z-10 justify-center'>
            <Image
                src={"/thanks.svg"}
                alt="Hero"
                width={350}
                height={350}
                // className='pb-0 xl:pb-10'
            />
             <h3 className='font-mono text-primary italic text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center'>
                Get in touch with us
            </h3>

            {/* Contact */}
             <div className="flex flex-col md:flex-row gap-8 lg:gap-12 xl:gap-16 mt-8 lg:mt-12 xl:mt-16 w-full justify-center">
                <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 xl:gap-10">
                    <div className='w-24 h-24 md:w-40 md:h-40 lg:w-32 lg:h-32 xl:w-60 xl:h-60 relative'>
                        <Image
                            src={"/joseph.png"}
                            alt="Joseph Ikinda"
                            fill
                            className='object-cover rounded-lg'
                        />
                    </div>
                    <MyTags classname='bg-white text-black text-base md:text-lg lg:text-xl xl:text-2xl uppercase px-4 py-2'>
                        Joseph Ikinda
                    </MyTags>
                </div>
                
                <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 xl:gap-10">
                    <div className='w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 relative'>
                        <Image
                            src={"/karo.png"}
                            alt="Karo Braun"
                            fill
                            className='object-cover rounded-lg'
                        />
                    </div>
                    <MyTags classname='bg-white text-black text-base md:text-lg lg:text-xl xl:text-2xl uppercase px-4 py-2'>
                        Karo Braun
                    </MyTags>
                </div>
                
                <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 xl:gap-10">
                    <div className='w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 relative'>
                        <Image
                            src={"/stella.png"}
                            alt="Stella Bartolomee"
                            fill
                            className='object-cover rounded-lg'
                        />
                    </div>
                    <MyTags classname='bg-white text-black text-base md:text-lg lg:text-xl xl:text-2xl uppercase px-4 py-2'>
                        Stella Bartolomee
                    </MyTags>
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
    </Section>
  )
}

export default Contact