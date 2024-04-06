import React from 'react'
import ShipmentCard from '../shipmentCard/shipmentCard'

export default function ShipmentCards() {
  return (
    <section className='bg-[#F8F8F8]'>
        <div className='max-w-c-full m-auto p-6 py-[100px] lg:px-8 grid gap-x-[30px] gap-y-[96px] grid-cols-[repeat(auto-fit,_minmax(420px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]'>
            <ShipmentCard 
                left_col={[{title: 'Номер телефона', value: '+7 (995) 885-71-36'}, {title: 'Email :', value: 'hello@cargopro.md'}, {title: 'Адрес:', value: 'ТЦ АВИАПАРК, 1 ЭТАЖ'}]} 
                right_col={[{value: 'Пн-Сб'}, {value: '8:00 - 17:00'}]} 
            />
            <ShipmentCard 
                left_col={[{title: 'Номер телефона', value: '+7 (995) 885-71-36'}, {title: 'Email :', value: 'hello@cargopro.md'}, {title: 'Адрес:', value: 'ТЦ АВИАПАРК, 1 ЭТАЖ'}]} 
                right_col={[{value: 'Пн-Сб'}, {value: '8:00 - 17:00'}]} 
            />
            <ShipmentCard 
                left_col={[{title: 'Номер телефона', value: '+7 (995) 885-71-36'}, {title: 'Email :', value: 'hello@cargopro.md'}, {title: 'Адрес:', value: 'ТЦ АВИАПАРК, 1 ЭТАЖ'}]} 
                right_col={[{value: 'Пн-Сб'}, {value: '8:00 - 17:00'}]} 
            />
            <ShipmentCard 
                left_col={[{title: 'Номер телефона', value: '+7 (995) 885-71-36'}, {title: 'Email :', value: 'hello@cargopro.md'}, {title: 'Адрес:', value: 'ТЦ АВИАПАРК, 1 ЭТАЖ'}]} 
                right_col={[{value: 'Пн-Сб'}, {value: '8:00 - 17:00'}]} 
            />
        </div>
    </section>
  )
}
