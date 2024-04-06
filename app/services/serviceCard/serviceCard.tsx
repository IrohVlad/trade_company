import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IServiceCardProps{
    img_url: string;
    title: string;
    route_url: string;
}

export default function ServiceCard({img_url, title, route_url}: IServiceCardProps) {
  return (
    <Link href={route_url} className="relative p-6 flex flex-col justify-end h-[440px] ss:h-[340px] overflow-hidden bg-black">
        <Image className=" w-full h-full object-cover absolute top-0 left-0 z-0 transition-all duration-500 hover:scale-125 hover:opacity-50" fill src={img_url} alt=""/>
        <div className="flex relative z-10 font-bold text-white text-[22px] pb-3 border-b border-white border-opacity-50"> <div className=" mr-3"><Image className='relative top-2' src="/services/pre.svg" height={21} width={16} alt="Pre"/></div>{title}</div>
    </Link>
  )
}
