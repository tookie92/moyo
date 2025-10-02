import React from 'react'
import MyTags from '../myComponents/Tags'

const Statistics = () => {
  return (
    <div className='min-h-screen flex-col flex bg-tertiary z-10 py-20 md:py-40 px-5 md:px-20 lg:px-40 gap-10 md:gap-20'>
        {/* Titre avec statistiques */}
        <p className='font-sans w-full text-foundation text-3xl md:text-4xl lg:text-5xl leading-[1.5]'>
            While <span className='font-mono text-secondary italic'>84%</span> of young adults have volunteered, <span className='font-mono italic'>few</span> manage to do it <span className='font-mono italic'>consistently.</span>
        </p>
        
        {/* Grille de citations */}
        <div className="relative w-full flex-1 min-h-[500px]">
            {/* Citation 1 - En haut à gauche */}
            <div className='absolute top-0 left-0 max-w-md'>
                <MyTags classname='border-2 border-secondary text-black text-xl md:text-2xl lg:text-3xl px-8 py-4 bg-foundation rounded-full shadow-lg'>
                    {`"It's complicated to join a project."`}
                </MyTags>
            </div>
            
            {/* Citation 2 - En haut à droite */}
            <div className='absolute top-16 md:top-20 right-8 max-w-lg'>
               <MyTags classname='border-2 border-secondary text-black text-xl md:text-2xl lg:text-3xl px-8 py-4 bg-foundation rounded-full shadow-lg'>
                    {`"Wish I could meet people through this."`}
                </MyTags>
            </div>
            
            {/* Citation 3 - En bas à gauche */}
            <div className='absolute bottom-20 md:bottom-32 left-8 md:left-16 max-w-md'>
               <MyTags classname='border-2 border-secondary text-black text-xl md:text-2xl lg:text-3xl px-8 py-4 bg-foundation rounded-full shadow-lg'>
                    {`"I don't know where to start."`}
                </MyTags>
            </div>
            
            {/* Citation 4 - En bas à droite */}
            <div className='absolute bottom-5 right-0 md:right-10 max-w-lg'>
            <MyTags classname='border-2 border-secondary text-black text-xl md:text-2xl lg:text-3xl px-8 py-4 bg-foundation rounded-full shadow-lg'>
                {`"Why can't it be quick and fun?"`}
            </MyTags>
            </div>
        </div>
    </div>
  )
}

export default Statistics