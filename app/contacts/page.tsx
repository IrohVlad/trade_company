import React from 'react'
import ServiceHero from '../components/serviceHero/serviceHero'
import Form from '../components/form/form'
import ShipmentCards from '../components/shipmentCards/shipmentCards'
import YMap from '../components/yMap/yMap'

export default function Contacts() {

  return (
    <>
        <ServiceHero title='Контакты' routes={[{title:'Главная', href: '/'}, {title:'Контакты', href: 'contacts'}]} img_url='/contacts/young-asian-women-using-smartphone-contacted-a-cus-2022-11-05-03-23-21-utc1.png' />
        <section>
            <div className='max-w-c-full w-full mx-auto py-[120px] px-6'>
                <Form/>
            </div>
        </section>
        <ShipmentCards/>
        <YMap/>
    </>
  )
}
