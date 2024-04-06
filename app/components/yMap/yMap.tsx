'use client'
import React from 'react'
import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function YMap() {
  return (
    <section className='h-[790px]'>
        <YMaps>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 14 }} className='h-[790px]'/>
        </YMaps>
        </section>
  )
}
