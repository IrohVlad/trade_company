import React from 'react'
import ServiceHero from '../components/serviceHero/serviceHero'
import ServicesCards from './serviceCards/servicesCards'
import Advantages from '../components/advantages/advantages'
import FormSection from './formSection/formSection'

export default function Services() {
  return (
    <main className=" flex flex-col flex-auto text-white">
        <ServiceHero title='Услуги' routes={[{title:'Главная', href: '/'}, {title:'Услуги', href: '/services'}]} img_url='/services/home-delivery-service-and-working-service-mind.png' />
        <ServicesCards/>
        <Advantages className=' border-b-2 border-b-[#ebebeb]'/>
        <FormSection/>
    </main>
  )
}
