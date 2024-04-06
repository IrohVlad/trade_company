import React from 'react'
import Image from 'next/image'

interface IClientsGridProps{
  img_urls: Array<string>
}

export default function ClientsGrid({img_urls}: IClientsGridProps) {
  return (
    <section>
      <div className='max-w-c-full mt-[120px] lg:mt-0 mx-auto p-6 flex flex-col items-center'>
        <h2 className=' font-bold text-2xl font-title text-black mt-[120xp] mb-20 lg:mb-0  sm:text-xl ss:text-lg'>Наши клиенты</h2>
        <div className=' w-full grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] mb-40 lg:mb-0 gap-x-[150px] gap-y-8 lg:gap-x-[80px] sm:gap-x-[20px] sm:gap-y-4'>
          {img_urls?.length && img_urls.map((value, index)=>{
            return (
              <div key={index} className=' relative h-[150px]'>
                <Image src={value} className='h-full' fill alt='client icon' />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
