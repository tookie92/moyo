import React from 'react'
import { Separator } from '../ui/separator'
import clsx from 'clsx'

interface TitleProps {
  title: string
  color?: boolean
}

const Title = ({ title, color = false }: TitleProps) => {
  return (
    <div className=' flex flex-col gap-4 '>
                <h1 className='font-mono text-4xl font-normal italic'> {title} </h1>
                <Separator className={clsx( color ? 'bg-white' : 'bg-black')}/>
        </div>
  )
}

export default Title