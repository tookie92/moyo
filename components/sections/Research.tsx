import React from 'react'
import { Separator } from '../ui/separator'
import MyCard from '../ui/myCard'
import Image from 'next/image'
import { Card, CardContent } from '../ui/card'
import { ChartRadialText } from '../ui/ChartRadial'
import FirstChart from '../myComponents/Chartfirst'
import SecondChart from '../myComponents/SecondCart'
import Pot from '../myComponents/Pot'
import ChillWorld from '../myComponents/Chillworld'

const Research = () => {
  return (
    <div id='research' className='snap-x scroll-mt-32 xl:scroll-mt-32 relative w-full h-full py-40 bg-foundation'>
        <div className='flex flex-col gap-10 md:gap-20 lg:gap-30 px-5 md:px-20 lg:px-40 xl:container xl:mx-auto'>
            <div className='flex flex-col w-full gap-10 md:gap-20 lg:gap-30 relative'>
                
                <div className='flex flex-col gap-4 w-full'>
                    <h1 className='font-mono font-normal italic text-4xl'>research</h1>
                    <Separator className='bg-black'/>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-6 md:gap-10 lg:gap-10">
                    <MyCard title='7' content='Competitors Scans' className='w-full md:w-1/4' />
                    <MyCard title='52' content='Survey Responses' className='w-full md:w-1/4' />
                    <MyCard title='4' content='User Interviews' className='w-full md:w-1/4' />
                    <MyCard title='1' content='Expert interview' className='w-full md:w-1/4' />
                </div>
            </div>

            {/* Research Insights */}
            <div id='insights' className='snap-x scroll-mt-32 xl:scroll-mt-32 flex flex-col gap-10 mb-22'>
                <div className='flex flex-col gap-4 w-full'>
                    <h1 className='font-sans font-semibold text-lg uppercase'>research insights</h1>
                    <Separator className='bg-black'/>
                </div>
                
                {/* Research Insights - 1 */}
                <div  className=" flex flex-col">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex items-center gap-4 w-full md:w-1/2">
                            <Image
                                src={"./arrow.svg"}
                                alt="Arrow"
                                width={50}
                                height={50}
                                className='object-cover object-top-left'
                            />
                            <h2 className='font-mono italic font-semibold text-3xl'>barrier</h2>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                            <h3 className='font-sans font-semibold text-lg'>Overwhelming start</h3>
                            <p>Young adults face too many options and unclear processes, which stops them before they even sign up.</p>
                        </div>
                    </div>
                </div>
                <Separator className='bg-black'/>

                {/* Research Insights - 2 */}
                <div className="flex flex-col mt-5">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex items-center gap-4 w-full md:w-1/2">
                            <Image
                                src={"./arrow.svg"}
                                alt="Arrow"
                                width={50}
                                height={50}
                                className='object-cover object-top-left'
                            />
                            <h2 className='font-mono italic font-semibold text-3xl'>simplicity</h2>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                            <h3 className='font-sans font-semibold text-lg'>Quick Wins Matter</h3>
                            <p>A fast, low-pressure sign-up for the volunteering event makes participation feel doable and increases motivation.</p>
                        </div>
                    </div>
                </div>
                <Separator className='bg-black'/>

                {/* Research Insights - 3 */}
                <div className="flex flex-col mt-5">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex items-center gap-4 w-full md:w-1/2">
                            <Image
                                src={"./arrow.svg"}
                                alt="Arrow"
                                width={50}
                                height={50}
                                className='object-cover object-top-left'
                            />
                            <h2 className='font-mono italic font-semibold text-3xl'>social</h2>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                            <h3 className='font-sans font-semibold text-lg'>Connection Builds Confidence</h3>
                            <p>Knowing who else is attending, or being able to connect in advance, makes volunteering feel safe and welcoming.</p>
                        </div>
                    </div>
                </div>
                <Separator className='bg-black'/>

                {/* Research Insights - 4 */}
                <div className="flex flex-col mt-5">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex items-center gap-4 w-full md:w-1/2">
                            <Image
                                src={"./arrow.svg"}
                                alt="Arrow"
                                width={50}
                                height={50}
                                className='object-cover object-top-left'
                            />
                            <h2 className='font-mono italic font-semibold text-3xl'>purpose</h2>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                            <h3 className='font-sans font-semibold text-lg'>Meaning Over Duration</h3>
                            <p>Even short volunteering activities create a sense of usefulness and belonging — impact is more important than hours.</p>
                        </div>
                    </div>
                </div>

                {/* Card Insights */}
                <div className='flex flex-col gap-10 mb-44'>
                    <Card className='mt-5 border-1 border-black flex justify-center shadow-none items-center px-4 md:px-8'>
                        <CardContent className='flex flex-col md:flex-row h-full justify-center items-center w-full py-6'>
                            <div className='w-full md:w-1/2 flex p-4 md:p-8 items-center justify-center'>
                                <div className='h-64 w-64 items-center flex justify-center'>
                                    <FirstChart/>
                                </div>
                            </div>
                            <div className='w-full md:w-1/2'>
                                <p className='font-sans font-normal text-2xl md:text-3xl'>
                                    find volunteering platforms <span className='text-primary italic font-mono'>confusing</span> and <span className='text-primary italic font-mono'>hard to use.</span>  
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='mt-5 border-1 border-black flex justify-center shadow-none items-center px-4 md:px-8'>
                        <CardContent className='flex flex-col md:flex-row h-full justify-center items-center w-full py-6'>
                            <div className='w-full md:w-1/2 flex p-4 md:p-8 items-center justify-center'>
                                <div className='h-64 w-64 items-center flex justify-center'>
                                    <SecondChart/>
                                </div>
                            </div>
                            <div className='w-full md:w-1/2'>
                                <p className='font-sans font-normal text-2xl md:text-3xl'>
                                    are held back by a <span className='text-primary italic font-mono'>lack of time</span> or an <span className='text-primary italic font-mono'>unclear entry</span>  
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='mt-5 border-1 border-black flex justify-center shadow-none items-center px-4 md:px-8'>
                        <CardContent className='flex flex-col md:flex-row h-auto md:h-96 justify-center items-center w-full py-6'>
                            <div className='w-full md:w-1/2 flex p-4 md:p-8 items-center flex-col gap-4 justify-center'>
                                <div className='h-64 w-64 items-center flex justify-center'>
                                    <Pot/>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-1'>
                                    <p className='text-4xl md:text-5xl font-sans'>Connection</p>
                                    <p className='font-mono italic text-primary text-3xl md:text-4xl'>matters</p>
                                </div>
                            </div>
                            
                            <Separator orientation='vertical' className='hidden md:block h-full bg-black'/>
                            <Separator className='md:hidden w-full bg-black my-6'/>
                            
                            <div className='w-full md:w-1/2 flex p-4 md:p-8 items-center flex-col gap-5 justify-center'>
                                <div className='h-64 w-64 items-center flex justify-center'>
                                    <div className='mt-[54px]'>
                                        <ChillWorld />
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-1'>
                                    <p className='text-4xl md:text-5xl font-sans'>Simplicity</p>
                                    <p className='font-mono italic text-primary text-3xl md:text-4xl'>is key</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 z-0 h-64 w-full'>
            <Image
                src={"/bordersecond.svg"}
                alt="Hero"
                fill
                className='object-cover object-top'
            />
        </div>
    </div>
  )
}

export default Research