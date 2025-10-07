import clsx from 'clsx'
import React from 'react'

interface Props {
  children: React.ReactNode,
  background?: string,
  classname?: string,
  id?: string
}
const Section = ({ children, background, classname, id }: Props) => {
  return (
    <div id={id} className={clsx('w-full h-full py-0', 
        background && `bg-${background}` , classname
    )}>
        <div className='flex flex-col gap-10 md:gap-20 lg:gap-10 px-5 md:px-20 lg:px-40 xl:container xl:mx-auto'>
            {children}
        </div>
    </div>
  )
}

export default Section