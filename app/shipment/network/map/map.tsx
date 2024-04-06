import React from 'react'
import Image from 'next/image'

export default function Map() {
  return (
    <section>
        <div className='max-w-c-full m-auto px-6 relative mb-[75px]'>
            <Image src='/network/map.svg' fill alt='Map' className='w-full h-full !static' />
        </div>
    </section>
  )
}
