import React from 'react'
import './style.css'

interface IItem {
    img_url: string
}

interface IGridProps{
    items: Array<IItem>;
}

export default function Grid({items}: IGridProps) {
  return (
    <div className='min-h-screen h-fit grid grid-cols-[1fr_1fr] md:grid-cols-[1fr] gap-5'>
        {items?.length && items.map((value, index)=>{
            return (
                <div key={index} className='h-[300px] bg-cover bg-center bg-no-repeat transition-opacity duration-700 hover:opacity-45 will-change-transform opacity-0' style={{backgroundImage: `url(${value.img_url})`, animationName: 'imgMount', animationFillMode: 'forwards', animationDuration: '.3s', animationDelay: index * 0.1 +'s', animationTimingFunction: 'ease-in-out'}}>
                    
                </div>
            )
        })}
    </div>
  )
}
