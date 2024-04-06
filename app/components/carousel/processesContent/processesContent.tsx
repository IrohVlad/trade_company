"use client"
import React, {useState, useRef} from 'react'
import {Transition, TransitionGroup} from "react-transition-group"
import Image from 'next/image'
import Button from '../../button/button'

const duration = 300;

interface TransitionStyles {
  entering: React.CSSProperties;
  entered: React.CSSProperties;
  exiting: React.CSSProperties;
  exited: React.CSSProperties;
  unmounted: React.CSSProperties;
}
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles: TransitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0, position: 'absolute', top: 0, left: 0 },
  exited:  { opacity: 0, position: 'absolute' },
  unmounted:  { opacity: 0, position: 'absolute' },
};

interface IProcessesContentProps{
  img_url?: string,
  description: string,
  list: Array<string>,
  button: string
}

export default function ProcessesContent({img_url, description, list, button}: IProcessesContentProps) {
  const nodeRef = useRef(null);
  return (
    <TransitionGroup className=" relative">
    <Transition key={img_url} nodeRef={nodeRef} timeout={duration}>
      {(state) => (<div ref={nodeRef} className={'flex justify-between items-center gap-[45px] mt-[60px] w-full lg:block'} style={{...defaultStyle, ...transitionStyles[state]}}>
              <div className='max-w-[504px] min-h-[474px] lg:mb-5'>
                <div className=' font-text text-[#6C6C6C]'>
                  {description}
                </div>
                <ul className='text-[black] font-semibold font-title text-[18px] mt-10'>
                  {list?.map((value, index)=>{
                    return <li key={value} className='flex items-center before:rotate-45 before:rounded-[2px] before:mr-3 before:min-h-[8px] before:min-w-[8px] before:h-[8px] before:w-[8px] before:bg-red mt-6'>{value}</li>
                  })}
                </ul>
                <div className='mt-20 flex'>
                  <Button className='px-4 py-3 mr-[30px] min-w-[100px]'><div className=' font-title font-semibold text-center'>{button}</div></Button>
                  <Image src='/red-arrow.svg' alt='Red Arrow' width={33} height={10}/>
                </div>
              </div>
              {img_url && <div className='h-[474px] lg:w-auto flex-1 relative ss:h-[274px]'>
                <Image src={img_url} alt="Warehouse" fill  className='w-full h-full object-cover object-center relative' />
              </div>}
        </div>)}
    </Transition>
    </TransitionGroup>
  )
}
