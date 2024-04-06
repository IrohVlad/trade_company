'use client'
import React from 'react'
import Link from 'next/link'
import Button from '../button/button'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

export default function ServiceSidebar() {

  const pathname = usePathname()
  return (
    <div className=" sticky top-20 border-r border-[#00000020] mb-8 lg:border-r-0 lg:border-b lg:pb-3 ">
                <div className=" text-black font-semibold text-[22px] border-b border-[#00000040] max-w-[252px] pb-4 mb-12 lg:max-w-none" >Наши услуги</div>
                <nav className="mb-[66px] lg:mb-4">
                    <ul className="max-w-[306px] lg:max-w-none">
                        <li><Link active-class="before:!bg-[#495AB4] before:w-[3px] before:h-8 text-black" className={`mb-6 text-lg text-[#6C6C6C] transition-colors duration-300 hover:text-black font-semibold flex items-center gap-6 before:bg-[#EBF1E4] before:w-[3px] before:h-8 ${pathname.split('/')[2] === 'auto' ? 'before:!bg-red before:w-[3px] before:h-8 text-black' : ''} `} href="auto">Автомобильные перевозки</Link></li>
                        <li><Link active-class="before:!bg-[#495AB4] before:w-[3px] before:h-8 text-black" className={`mb-6 text-lg text-[#6C6C6C] transition-colors duration-300 hover:text-black font-semibold flex items-center gap-6 before:bg-[#EBF1E4] before:w-[3px] before:h-8 ${pathname.split('/')[2] === 'railway' ? 'before:!bg-red before:w-[3px] before:h-8 text-black' : ''} `} href="railway">Железнодорожные перевозки</Link></li>
                        <li><Link active-class="before:!bg-[#495AB4] before:w-[3px] before:h-8 text-black" className={`mb-6 text-lg text-[#6C6C6C] transition-colors duration-300 hover:text-black font-semibold flex items-center gap-6 before:bg-[#EBF1E4] before:w-[3px] before:h-8 ${pathname.split('/')[2] === 'sea' ? 'before:!bg-red before:w-[3px] before:h-8 text-black' : ''} `} href="sea">Морские перевозки</Link></li>
                        <li><Link active-class="before:!bg-[#495AB4] before:w-[3px] before:h-8 text-black" className={`mb-6 text-lg text-[#6C6C6C] transition-colors duration-300 hover:text-black font-semibold flex items-center gap-6 before:bg-[#EBF1E4] before:w-[3px] before:h-8 ${pathname.split('/')[2] === 'storage' ? 'before:!bg-red before:w-[3px] before:h-8 text-black' : ''} `} href="storage">Складские услуги</Link></li>
                        <li><Link active-class="before:!bg-[#495AB4] before:w-[3px] before:h-8 text-black" className={`mb-6 text-lg text-[#6C6C6C] transition-colors duration-300 hover:text-black font-semibold flex items-center gap-6 before:bg-[#EBF1E4] before:w-[3px] before:h-8 ${pathname.split('/')[2] === 'customs' ? 'before:!bg-red before:w-[3px] before:h-8 text-black' : ''} `} href="customs">Таможенное оформление</Link></li>
                    </ul>
                </nav>
                <div className="px-[29px] max-w-[306px] lg:max-w-none lg:flex lg:items-center lg:gap-x-10 lg:gap-y-4  flex-wrap">
                    <div className=" text-[28px] font-bold mb-5 text-black w-fit md:text-lg">Нужна помощь?</div>
                    <Button className='px-5 py-[15px] rounded-none h-fit w-fit" lg:px-2 lg:py-2 text-nowrap'><div className="text-white font-bold text-[18px] w-fit flex items-center"> <div className="mr-[10px]"><Image height={16} width={16} className='min-w-4 min-h-4' src="/call.svg" alt=""/></div> <div>Связаться с нами</div></div></Button>
                </div>
    </div>
  )
}