import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import MarketInBasket from './marketInBasket.tsx/marketInBasket';
import './style.css'

interface IMarketCardProps{
    img_url: string;
    title: string;
    price: number;
    id: string
}

export default function MarketCard({img_url, title, price, id}:IMarketCardProps) {
  return (
    <Link href={`/market/${id}`} className='product-card rounded-2xl'>
        <div className='product-img relative h-[250px] rounded-2xl overflow-hidden after:block after:w-full after:h-full after:absolute mb-5'>
            <Image className='w-full object-contain object-center' fill src={img_url} alt='product image' />
        </div>
        <div className=' font-text text-[black] font-semibold mb-1 px-3'>
            {title}
            
        </div> 
        <div className='flex justify-between items-center px-3 pb-2'>
            <div>
                <div className='font-title text-h-grey font-semibold text-[12px]'>
                    Цена
                </div>
                {price ? <div className='font-text text-black font-semibold'>
                    {price}
                    <span>P</span>
                </div> : <div className='font-text text-black font-semibold'>
                    Договорная
                </div>}
            </div>
            <MarketInBasket id={id}/>
        </div>
    </Link>
  )
}
