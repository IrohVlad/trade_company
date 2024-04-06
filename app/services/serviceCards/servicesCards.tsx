import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ServiceCard from '../serviceCard/serviceCard'

export default function ServicesCards() {
  return (
    <section className=" relative">
        <div className="max-w-c-full m-auto relative z-[3] px-6 py-16 lg:px-10">
            <div className="flex items-center justify-between mb-[100px] lg:flex-col lg:items-start">
                <h2 className=" font-title font-bold text-2xl sm:text-xl text-[black]">Что мы предлогаем</h2>
                <div className=" text-[#6C6C6C] leading-[26px] max-w-[520px] lg:max-w-none lg:mt-[30px] font-open">Предоставляем высококачественные комплексные логистические услуги по транспортировке по минимальной стоимости.</div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(390px,_1fr))] ss:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-x-[30px] gap-y-[40px] pb-[120px]">
                <ServiceCard title='Автомобильные перевозки' img_url='/services/cargo-truck-on-the-mountain-truck-on-road-cargo-2021-08-26-16-36-15-utc 1.png' route_url='/services/auto' />
                <ServiceCard title='Железнодорожные перевозки' img_url='/services/unsplash__VwkL9LVa-M.png' route_url='/services/railway' />
                <ServiceCard title='Морские перевозки' img_url='/services/cargo-ship-floating-in-sea-2021-10-15-22-53-43-utc 1.png' route_url='/services/sea' />
                <ServiceCard title='Складские услуги' img_url='/services/unsplash_CfKV0CecnU8.png' route_url='/services/storage' />
                <ServiceCard title='Таможенное оформление' img_url='/services/unsplash_DEMrRuvJvqo (1).png' route_url='/services/customs' />
            </div>
        </div>
        <div className=" bg-[#F8F8F8] h-[809px] absolute bottom-0 z-[2] w-full"></div>
    </section>
  )
}
