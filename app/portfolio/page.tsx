'use client'
import React, {useState} from 'react'
import ServiceHero from '../components/serviceHero/serviceHero'
import Carousel from '../components/carousel/carousel'
import Grid from './grid/grid'

const data = [
  {
    title: 'Отправление',
    icon: '/portfolio/box.svg',
    items: [
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
    ]
  },
  {
    title: 'Морские перевозки',
    icon: '/portfolio/ship.svg',
    items: [
      {img_url: '/home/warehouse.png'},
      {img_url: '/home/warehouse.png'},
      {img_url: '/home/warehouse.png'},
      {img_url: '/home/warehouse.png'},
      {img_url: '/home/warehouse.png'},
      {img_url: '/home/warehouse.png'},
      {img_url: '/home/warehouse.png'},
      {img_url: '/home/warehouse.png'},
      {img_url: '/home/warehouse.png'},
      {img_url: '/home/warehouse.png'},
    ]
  },
  {
    title: 'Авиаперевозки',
    icon: '/portfolio/plane.svg',
    items: [
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
    ]
  },
  {
    title: 'Железнодорожные перевозки',
    icon: '/portfolio/train.svg',
    items: [
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
    ]
  },
  {
    title: 'Автомобильные перевозки',
    icon: '/portfolio/car.svg',
    items: [
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
    ]
  },
  {
    title: 'Складские перевозки',
    icon: '/portfolio/store.svg',
    items: [
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
      {img_url: '/home/containers.png'},
    ]
  },
]

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <>
        <ServiceHero  title='Наши работы' routes={[{title:'Главная', href: '/'}, {title: 'Наши работы', href: 'portfolio'}]} className='relative after:absolute after:block bg-[#C4C4C4] after:top-0 after:left-0 after:w-full after:h-full after:z-100 after:bg-[linear-gradient(90deg,rgba(171,53,52,0.5)0%,rgba(255,7,5,0.5)200%)] after:bg-opacity-50'/>
        <section>
            <div className='max-w-c-full mt-[120px] lg:mt-0 mb-6 mx-auto grid grid-cols-[200px,_1fr] lg:grid-cols-[1fr] p-6 lg:px-8 gap-8 relative'>
                <div className=' h-fit sticky lg:static top-20'>
                    <Carousel active={currentIndex} setter={setCurrentIndex} column data={data}/>
                </div>
                <Grid items={data[currentIndex].items} />
            </div>
        </section>
    </>
  )
}
