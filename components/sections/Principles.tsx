import React from 'react'
import { Separator } from '../ui/separator'
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card'

const Principles = () => {
  return (
    <div className='h-full min-h-screen py-20 flex-col flex bg-primary z-10 px-5 md:px-20 lg:px-40  gap-10 md:gap-40 lg:gap-20'>
       
            <div className=' flex flex-col gap-4 '>
                <h1 className='font-mono text-4xl text-white font-normal italic'> Design Principles </h1>
                <Separator className='bg-foundation'/>
            </div>
            <div className='flex h-[350px]  gap-10 w-full'>
                <Card className='flex w-1/3 items-center justify-center shadow-none border-black border-1 p-8 '>
                    <CardTitle className='font-sans font-semibold text-secondary text-3xl'> Simplicity </CardTitle>
                    <CardContent className='font-sans font-normal text-xl text-center'>
                        “Volunteering should be as easy and intuitive as booking a class – low-barrier, clear, effortless.”
                    </CardContent>
                    <CardFooter>
                        Easy · Clear · Accessible
                    </CardFooter>
                </Card>
                <Card className='flex w-1/3 items-center justify-center shadow-none border-black border-1 p-8 '>
                    <CardTitle className='font-sans font-semibold text-secondary text-3xl'> Togetherness </CardTitle>
                    <CardContent className='font-sans font-normal text-xl text-center'>
                       “People join not just to help, but to connect – for belonging, friendship, and shared experiences.”
                    </CardContent>
                    <CardFooter>
                        Social · Inclusive · Belonging
                    </CardFooter>
                </Card>
                <Card className='flex w-1/3 items-center justify-center shadow-none border-black border-1 p-8 '>
                    <CardTitle className='font-sans font-semibold text-secondary text-3xl'> Impact </CardTitle>
                    <CardContent className='font-sans font-normal text-xl text-center'>
                        “Small actions add up to real change – make every contribution visible, meaningful, and motivating.”
                    </CardContent>
                    <CardFooter>
                        Visible · Meaningful · Motivating
                    </CardFooter>
                </Card>
            </div>
    </div>
  )
}

export default Principles