import React from 'react'
import Path from '../../components/path/path'
import Map from './map/map'
import CountryCard from '../../components/countryCard/countryCard'

export default function Network() {
  return (
    <>
        <section>
          <div className='max-w-c-full w-full mx-auto p-6 lg:px-8'>
            <Path black routes={[{title:'Главная', href: '/'}, {title:'Оформить отправление', href: '/shipment'}, {title:'Где мы работаем', href: 'network'}]}  />
          </div>
        </section>
        <Map/>
        <section>
          <div className='max-w-c-full w-full mx-auto p-6 lg:px-8 flex justify-center flex-wrap gap-[30px] mb-[100px]'>
            <CountryCard country='Азия' cities={['Южная Корея', 'Китай']} />
            <CountryCard country='Европа' cities={['Турция', 'Россия']} />
            <CountryCard country='Америка' cities={['Мексика', 'Чили', 'Аргентина']} />
          </div>
        </section>
    </>
  )
}
