import React from 'react'
import Slider from '@/app/components/slider/slider'
import Image from 'next/image'
import ServiceHero from '@/app/components/serviceHero/serviceHero'
import Button from '@/app/components/button/button'
import PageWithSidebar from '@/app/components/pageWithSidebar/pageWithSidebar'
import Trucks from '@/app/components/trucks/trucks'

export default function Railway() {
  return (
    <>
      <ServiceHero routes={[{title:'Главная', href: '/'}, {title:'Услуги', href: '/services'}, {title:'Железнодорожные перевозки', href: 'railway'}]} title="Железнодорожные перевозки" img_url='/services/home-delivery-service-and-working-service-mind.png'/>
      <PageWithSidebar>
      <h2 className=" text-[44px] font-bold max-w-[550px] mb-[40px] text-black sm:text-xl ss:text-[25px]">Железнодорожные  перевозки</h2>
                <p className="mb-[36px] text-[16px] text-[#6C6C6C] leading-[26px]">Наши услуги по грузоперевозкам быстры, эффективны и надежны, даже в этих сложных условиях. Мы доставляем товары вовремя, минуя пробки на границах, и работаем со своими собственными службами доставки в 20 разных странах. Мы можем увеличивать свои возможности в соответствии с потребностями клиентов.</p>
                <Slider img_urls={["/services/bg.png", "/services/bg.png"]}/>
                <h3 className="font-bold text-[28px] mt-[60px] text-black ss:text-lg">
                    Наши преимущества
                </h3>
                <p className="mb-[36px] text-[16px] text-[#6C6C6C] leading-[26px]">Мы всегда остаемся одной из транспортно-логистических компаний, к которой клиенты обращаются с ожиданием надежной доставки своих отправлений.</p>
                <div className="mb-[40px] h-[560px] grid grid-cols-[1fr_1fr] gap-[12px] grid-rows-[274px_274px]">
                    <div className='relative'><Image className="h-[100%] w-[100%] object-cover" fill src="/services/unsplash_sNY6B9NsPP8 (1).png" alt=""/></div>
                    <div className="row-span-2 relative"><Image className="h-[100%] w-[100%] object-cover" fill src="/services/unsplash_sNY6B9NsPP8.png" alt=""/></div>
                    <div className='relative'><Image className="h-[100%] w-[100%] object-cover" fill src="/services/unsplash__VwkL9LVa-M (1).png" alt=""/></div>
                </div>
                <p className="mb-[36px] text-[16px] text-[#6C6C6C] leading-[26px]">Благодаря нашим увлеченным сотрудникам, которые гарантируют, что все товары достигают места назначения быстро и безопасно, мы делаем все возможное, чтобы отправления добирались до своих пунктов назначения. Гибкие и экологичные железнодорожные услуги обеспечивают надежные и заранее определенные отправления по расписанию.</p>
                <ul className="mb-[40px] grid grid-cols-[repeat(auto-fit,_300px)] lg:grid-cols-[repeat(auto-fit,_200px)] gap-x-[48px] gap-y-[32px] text-[20px] font-semibold text-black">
                    <li className="flex items-center"> <div className="mr-3"><Image src="/services/icon.svg" width={40} height={40} alt=""/></div> Конкурентоспособные цены</li>
                    <li className="flex items-center"> <div className="mr-3"><Image src="/services/icon1.svg" width={40} height={40} alt=""/></div>Всегда вовремя</li>
                    <li className="flex items-center"> <div className="mr-3"><Image src="/services/icon2.svg" width={40} height={40} alt=""/></div>Передовая технология</li>
                    <li className="flex items-center"> <div className="mr-3"><Image src="/services/icon3.svg" width={40} height={40} alt=""/></div>Быстрый и надежный</li>
                    <li className="flex items-center"> <div className="mr-3"><Image src="/services/icon4.svg" width={40} height={40} alt=""/></div>24/7 поддержка</li>
                    <li className="flex items-center"> <div className="mr-3"><Image src="/services/icon5.svg" width={40} height={40} alt=""/></div>Безопасная упаковка</li>
                </ul>
                <p className="mb-[80px] text-[16px] text-[#6C6C6C] leading-[26px]">Мы гордимся тем, что обслуживаем более 3,000 клиентов, и являемся самым экологичным способом наземного транспортирования.</p>
                <Button className="mb-[150px] px-4 py-[15px]" ><div className=" text-white w-fit font-semibold">Загрузить брошуру с нашими услугами</div></Button>
      </PageWithSidebar>
      <Trucks/>
    </>
  )
}
