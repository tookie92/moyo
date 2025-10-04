import React from 'react'
import { Card, CardContent, CardTitle } from './card'
import clsx from 'clsx'

interface MyCardProps  {
    title: string,
    content: string,
    className?: string
}
const MyCard = ({ title, content, className }: MyCardProps) => {
  return (
    <Card className={clsx('border-1 border-black flex h-[250px] justify-center shadow-none items-center px-8 hover:bg-primary group', className)}>
      <CardTitle className='text-primary font-sans font-semibold text-7xl group-hover:text-white'> 
          {title} 
      </CardTitle>
      <CardContent className='text-black font-mono italic text-xl group-hover:text-white'> 
          {content} 
      </CardContent>
    </Card>
  )
}

export default MyCard