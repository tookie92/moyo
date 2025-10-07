import React from 'react'
import { Separator } from '../ui/separator'
import Title from '../myComponents/Title'
import Image from 'next/image'
import Section from '../myComponents/Section'

const Lofi = () => {
  return (
    <Section id='lofi' background='foundation' classname='py-20 scroll-mt-32 xl:scroll-mt-32'>
          <Title title='Low Fidelity Wireframes'/>
          <div className="flex w-full h-full">
              <Image
                  src={"/lofiscreens.png"}
                  alt="Hero"
                  width={1000}
                  height={1000}
                  priority
                  className='w-full'
              />
          </div>
    </Section>
   
  )
}

export default Lofi