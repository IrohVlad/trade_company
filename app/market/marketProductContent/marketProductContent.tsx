'use client'
import React from 'react'
import Carousel from '@/app/components/carousel/carousel'

const data = [
    {
      title: 'Описание',
      content: ''
    },
    {
      title: 'Оплата',
      content: ''
    },
    {
      title: 'Доставка',
      content: ''
    }
  ]

export default function MarketProductContent({description}: any) {
    const [index, setIndex] = React.useState(0)
  return (
    <>
        <div>
            <Carousel data={data} active={index} setter={setIndex} className="w-[50%] text-lg" />
        </div>
        <div id='stats' className='text-black font-text pt-7'>
            {index == 0 && description}
        </div>
    </>
  )
}
