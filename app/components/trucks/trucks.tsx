import React from 'react'
import Image from 'next/image'

export default function Trucks() {
  return (
    <section className="bg-[#F8F8F8]">
        <div className=" h-[245px] flex items-center justify-between max-w-c-full m-auto p-6 lg:hidden lg:gap-6" >
            <div className="h-[77px] w-[219px] relative">
                <Image className="h-[100%] w-[100%]" fill src="/services/3@32.png" alt=""/>
            </div>
            <div className="h-[77px] w-[219px] relative">
                <Image className="h-[100%] w-[100%]" fill src="/services/4@32.png" alt=""/>
            </div>
            <div className="h-[77px] w-[219px] relative">
                <Image className="h-[100%] w-[100%]" fill src="/services/5@32.png" alt=""/>
            </div>
            <div className="h-[85px] w-[173px] relative">
                <Image className="h-[100%] w-[100%]" fill src="/services/6@32.png" alt=""/>
            </div>
        </div>
    </section>
  )
}
