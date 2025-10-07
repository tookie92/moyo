import Image from 'next/image'
import React from 'react'

const Break = () => {
  return (
    <div className='relative w-full xl:h-1/2 py-10 xl:py-20 h-screen bg-foundation overflow-hidden'>
        <div className='flex flex-col px-5 md:px-20 lg:px-40 xl:container xl:mx-auto h-full justify-center relative z-20'>
            <div className='relative w-full max-w-4xl mx-auto'>
                <Image
                    src={"/PictureSecond.png"}
                    alt="Hero"
                    width={1000}
                    height={1000}
                    priority
                    className='w-full h-auto'
                />
            </div>
        </div>
        
        {/* Background tertiary qui commence au milieu */}
        <div className='absolute bottom-0 left-0 right-0 bg-tertiary h-1/2 z-10' />
    </div>
  )
}

export default Break