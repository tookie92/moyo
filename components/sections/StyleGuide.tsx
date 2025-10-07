import React from 'react'
import { Separator } from '../ui/separator'
import Image from 'next/image'


const StyleGuide = () => {
  return (
    <div id='style' className='snap-x scroll-mt-9 xl:scroll-mt-28 w-full h-full py-10 bg-foundation'>
        <div className='flex flex-col gap-10 md:gap-20 lg:gap-10 px-5 md:px-20 lg:px-40 xl:container xl:mx-auto'>
        <div className=' flex flex-col gap-4 '>
                <h1 className='font-mono text-4xl font-normal italic'> Style Guide </h1>
                <Separator className='bg-black'/>
        </div>
        <div className=' flex '>
          <Image
              src={"/colors.png"}
              alt="Hero"
              width={1000}
              height={1000}
              priority
              className='w-full'
          />
        </div>
        <div className='w-full flex-col gap-30 flex'>
          <div className='flex w-full gap-20'> 
            {/* Poppins */}
            <div className='w-1/2 flex-col flex gap-20'> 
             <div className=' flex flex-col  gap-4 '>
                <h1 className='font-sans text-4xl font-normal'> Poppins </h1>
                <Separator className='bg-black'/>
              </div>
                  <div className='flex flex-col  gap-4'>
                  <span className='font-sans text-8xl font-normal'>Aa</span>
                  <div className='flex-1'>
                    <p className='font-sans text-lg leading-relaxed'>
                      The quick brown fox jumps over the lazy dog.
                    </p>
                    <p className='font-sans text-lg mt-2'>0123456789</p>
                  </div>
                </div>
              </div>
            {/* Poppins */}
            <div className='w-1/2 flex-col flex gap-20'> 
             <div className=' flex flex-col  gap-4 '>
                <h1 className='font-mono  text-4xl font-normal'> Georgia </h1>
                <Separator className='bg-black'/>
              </div>
                  <div className='flex flex-col  gap-4'>
                  <span className='font-mono  text-8xl font-normal'>Aa</span>
                  <div className='flex-1'>
                    <p className='font-mono  text-lg leading-relaxed'>
                      The quick brown fox jumps over the lazy dog.
                    </p>
                    <p className='font-mono  text-lg mt-2'>0123456789</p>
                  </div>
                </div>
              </div>

           
          </div>
          
          <div className='w-full mt-0 p-0'> {/* mt-0 et p-0 */}
            <Image
              src={"/Illustrations.svg"}
              alt="Typography"
              width={1000}
              height={1000}
              className='w-full h-auto'
            />
          </div>
        </div>
    </div>
    </div>
  )
}

export default StyleGuide