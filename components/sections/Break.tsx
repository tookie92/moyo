import Image from 'next/image'
import React from 'react'

const Break = () => {
  return (
    <div className='h-svh mt-44 relative w-full flex-col flex bg-foundation z-0 px-5 md:px-20 lg:px-40  gap-10 md:gap-40 lg:gap-20'>
        <div className='relative w-full h-full z-20'>
            <Image
                src={"/PictureSecond.png"}
                alt="Hero"
                width={1000}
                height={1000}
                priority
                className='w-full'
            />
        </div>
        <div className='absolute top-84 left-0 bg-tertiary h-full w-full' />
    </div>
  )
}

export default Break    