import React from 'react'
import { Separator } from '../ui/separator'
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card'

const Principles = () => {
  return (
    <div className='w-full h-full flex items-start xl:py-40    py-20 bg-primary'>
        <div className='flex flex-col gap-10 justify-center md:gap-40 lg:gap-20 px-5 md:px-20 lg:px-40 xl:container xl:mx-auto xl:gap-20'>
            <div className='flex flex-col gap-4'>
                <h1 className='font-mono text-4xl text-white font-normal italic'>Design Principles</h1>
                <Separator className='bg-foundation'/>
            </div>

            <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 w-full'>
                <Card className='flex flex-col w-full lg:w-1/3 items-center justify-center shadow-none border-black border-1 p-6 md:p-8 min-h-[300px] lg:h-[350px]'>
                    <CardTitle className='font-sans font-semibold text-secondary text-2xl md:text-3xl mb-4'>Simplicity</CardTitle>
                    <CardContent className='font-sans font-normal text-lg md:text-xl text-center flex-1 flex items-center'>
                       {` "Volunteering should be as easy and intuitive as booking a class — low-barrier, clear, effortless."`}
                    </CardContent>
                    <CardFooter className='text-sm md:text-base'>
                        Easy · Clear · Accessible
                    </CardFooter>
                </Card>

                <Card className='flex flex-col w-full lg:w-1/3 items-center justify-center shadow-none border-black border-1 p-6 md:p-8 min-h-[300px] lg:h-[350px]'>
                    <CardTitle className='font-sans font-semibold text-secondary text-2xl md:text-3xl mb-4'>Togetherness</CardTitle>
                    <CardContent className='font-sans font-normal text-lg md:text-xl text-center flex-1 flex items-center'>
                       {` "People join not just to help, but to connect — for belonging, friendship, and shared experiences."`}
                    </CardContent>
                    <CardFooter className='text-sm md:text-base'>
                        Social · Inclusive · Belonging
                    </CardFooter>
                </Card>

                <Card className='flex flex-col w-full lg:w-1/3 items-center justify-center shadow-none border-black border-1 p-6 md:p-8 min-h-[300px] lg:h-[350px]'>
                    <CardTitle className='font-sans font-semibold text-secondary text-2xl md:text-3xl mb-4'>Impact</CardTitle>
                    <CardContent className='font-sans font-normal text-lg md:text-xl text-center flex-1 flex items-center'>
                       {` "Small actions add up to real change — make every contribution visible, meaningful, and motivating."`}
                    </CardContent>
                    <CardFooter className='text-sm md:text-base'>
                        Visible · Meaningful · Motivating
                    </CardFooter>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Principles