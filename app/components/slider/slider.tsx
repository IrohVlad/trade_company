'use client'
import React, {useRef, useState} from 'react'
import Image from 'next/image'

interface ISliderProps{
    img_urls: Array<string>;
    className?: string;
}

export default function Slider({img_urls, className}: ISliderProps) {
    const [index, setIndex] = useState(0)

    const increase = () =>{
        if(index == img_urls.length - 1){
            return
        } else {
            setIndex((prevIndex) => prevIndex + 1)
        }
    }
    const decrease = () =>{
        if(index == 0){
            return
        } else {
            setIndex((prevIndex) => prevIndex - 1)
        }
    }

  return (
    <div className={"h-[538px] md:h-[320px] relative overflow-hidden " + className}>
        <div style={{transform: 'translateX('+ index * -100 +'%)'}} className="flex h-[100%] w-full transition-transform duration-300 relative">
            {img_urls.map((value, index)=>{
                return  <div key={index} className='w-full min-w-full h-full relative'>
                            <Image className="w-full h-full object-cover object-center" fill src={value} alt="Slider image"/>
                        </div>
           })}
        </div>
        <div className="flex absolute p-6 top-0 left-0 items-center justify-between h-[100%] w-[100%] z-20">
            <div onClick={decrease} className={index == 0 ? 'w-8 h-8 rounded-full bg-black bg-opacity-50 flex items-center justify-center' : 'w-8 h-8 rounded-full bg-red flex items-center justify-center cursor-pointer'}><Image height={13} width={7} className=" rotate-180" src="/small_Arrow.svg" alt="" /></div>
            <div onClick={increase} className={img_urls.length && index == img_urls.length - 1 ? 'w-8 h-8 rounded-full bg-black bg-opacity-50 flex items-center justify-center' : 'w-8 h-8 rounded-full bg-red flex items-center justify-center cursor-pointer'}><Image height={13} width={7} src="/small_Arrow.svg" alt="" /></div>
        </div>
        <div className="flex absolute p-6 top-0 left-0 items-end justify-center h-[100%] w-[100%] z-10">
           {img_urls.map((_, i)=>{
                return  <div key={i} className={ i == index ? 'mx-[3px] h-2 w-2 rounded-full bg-white' : 'mx-[3px] h-2 w-2 rounded-full bg-[#FFFFFF] bg-opacity-50'}></div>
           })}
        </div>
    </div>
  )
}
