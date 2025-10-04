import React from 'react'
import { Badge } from '../ui/badge'
import clsx from 'clsx'

interface MyTagsProps {
    children: React.ReactNode
    classname?: string
}

const MyTags = ({ children, classname }: MyTagsProps) => {
  return (
    <Badge className={clsx(`rounded-full  px-8 py-2 border-black `, classname? classname : ' text-white  bg-primary')}>
      <span className='font-sans font-normal'> {children} </span>
    </Badge>
  )
}

export default MyTags