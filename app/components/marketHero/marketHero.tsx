import React from 'react'

type Props = {
  image_url?: string;
  children?: React.ReactElement
}

export default function MarketHero({image_url, children}: Props) {
  return (
    <section className='py-6 lg:py-8 lg:pb-0'>
        <div className='px-6 lg:px-8 max-w-c-full m-auto'>
          <div className='relative px-20 py-[70px] lg:px-8 lg:py-9 bg-center bg-cover rounded-[10px] overflow-hidden after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#00000030] after:z-[3]' style={{ backgroundImage: `url('${image_url}')`}}>
            <div className='relative z-[4]'>
            {children}
            </div>
          </div>
        </div>
    </section>
  )
}