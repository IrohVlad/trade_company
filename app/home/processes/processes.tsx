"use client"
import React, {useState} from 'react'
import Carousel from '../../components/carousel/carousel'
import ProcessesContent from '../../components/carousel/processesContent/processesContent'

export default function Processes() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const data = [
    {
      title: 'Перед отправкой',
      img_url: '/home/warehouse.png',
      description: 'Мы гарантируем строгое соблюдение всех процедур до, во время и после перевозки.',
      button: 'Читать дальше',
      list: [
        'Стандартные операционные процедуры по обслуживанию транспортных средств',
        'План управления транспортировкой',
        'Стандартные операционные процедуры для погрузки.'
      ]
    },
    {
      title: 'Во время отправки',
      img_url: '/home/on-rails-man.png',
      description: 'Не мы гарантируем строгое соблюдение всех процедур до, во время и после перевозки.',
      button: 'О нас',
      list: [
        'Стандартные операционные процедуры по обслуживанию транспортных средств',
        'Стандартные операционные процедуры для погрузки.'
      ]
    },
    {
      title: 'После отправки',
      img_url: '/home/containers.png',
      description: 'Мы гарантируем строгое соблюдение всех процедур до, во время и после перевозки.',
      button: 'Читать дальше',
      list: [
        'План управления транспортировкой',
        'Стандартные операционные процедуры для погрузки.'
      ]
    },
  ]
  return (
    <section className='w-full relative'>
        <div className='max-w-c-full m-auto h-fit lg:h-fit flex flex-col justify-center px-6 py-16 lg:px-10'>
            <h2 className='font-title text-2xl text-[black] font-bold sm:text-xl ss:text-lg'>
                Наши процессы
            </h2>
            <Carousel data={data} setter={setCurrentIndex} active={currentIndex} />
            <ProcessesContent list={data[currentIndex].list} description={data[currentIndex].description} button={data[currentIndex].button} img_url={data[currentIndex].img_url}/>
        </div>
    </section>
  )
}
