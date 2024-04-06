import React from 'react'
import ServiceListCard from '../serviceListCard/serviceListCard'

export default function serviceList() {
  return (
    <section className="w-full relative">
        <div className='max-w-c-full m-auto h-fit flex items-center justify-center py-16 p-6 lg:px-10'>
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-x-[10px] gap-y-9'>
                <div className=' col-span-2 1.5xl:col-span-3 lg:col-span-2 ss:col-auto pt-8 pr-[80px]'>
                    <h2 className='font-title font-bold text-2xl sm:text-xl ss:text-lg text-[black]'>Ведущая компания в сфере транспортировки и логистики</h2>
                    <p className='font-text text-[#6C6C6C] mt-9'>Мы предоставляем высококачественные комплексные услуги и всегда учитываем потребности наших клиентов.</p>
                </div>

                <ServiceListCard title='Морские перевозки' text='Мы предлагаем морские грузоперевозки из страны и в страну' icon_url='/ship-icon.svg'/>
                <ServiceListCard title='Авиаперевозки' text='Мы являемся агентом крупных и надежных авиакомпаний с высокой частотой рейсов.' icon_url='/plane.svg'/>
                <ServiceListCard title='Железнодорожные перевозки' text='Безопасные, надежные и экологичные решения' icon_url='/train.svg'/>
                <ServiceListCard title='Автомобильные перевозки' text='Мы предоставляем высококачественные и надежные услуги по дорожной перевозке грузов.' icon_url='/car.svg'/>
                <ServiceListCard title='Складские услуги' text='У нас есть возможности для эффективного управления вашей логистической цепью, на начальном этапе или на месте назначения.' icon_url='/house.svg'/>
                <ServiceListCard title='Таможенное оформление' text='Мы поможем вам с оформлением груза в таможне без лишних сложностей.' icon_url='/paper.svg'/>
            </div>
        </div>
    </section>
  )
}
