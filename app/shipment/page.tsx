import React from 'react'
import ServiceHero from '../components/serviceHero/serviceHero'
import ShipmentForm from './shipmentForm/shipmentForm'
import ShipmentCards from '../components/shipmentCards/shipmentCards'
import Trucks from '../components/trucks/trucks'

export default function Shipment() {
  return (
    <>
        <ServiceHero routes={[{title:'Главная', href: '/'}, {title:'Оформить отправление', href:'shipment'}]} title='Оформить отправление' img_url='/shipment/paper-box-delivery-man-in-uniform-is-indoors-with-2021-12-27-22-09-39-utc1.png' />
        <ShipmentForm/>
        <ShipmentCards/>
        <Trucks/>
    </>
  )
}
