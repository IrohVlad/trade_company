import React from 'react'
import Image from 'next/image';

interface IClientCardProps{
    name: string;
    subname: string;
    description: string;
    icon_url: string
}

export default function ClientCard({name, subname, description, icon_url}:IClientCardProps) {
  return (
    <article className=' shadow-lg p-6 bg-white'>
                        <div className='flex items-center gap-5 pb-6 border-b-[1px] border-[#00000050] ss:flex-col'>
                            <Image src={icon_url} height={100} width={100} className='rounded-full sm:h-[60px] sm:w-[60px]' alt='client icon' />
                            <div className='text-black'>
                                <div className=' font-semibold font-title text-lg before:w-[10px] gap-2 flex items-center before:block before:h-[3px] before:rounded-sm before:bg-red uppercase sm:text-plus'>{name}</div>
                                <div className='font-text'>{subname}</div>
                            </div>
                        </div>
                        <p className='font-text mt-6 text-h-grey md:text-sm'>
                            {description}
                        </p>
    </article>
  )
}
