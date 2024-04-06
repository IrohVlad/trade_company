import React from 'react'
import BlogCard from '../blogCard/blogCard'

export default function Blog() {
  return (
    <section className='w-full relative bg-[#F8F8F8]'>
        <div className='max-w-c-full m-auto h-fit p-6 lg:px-10'>
            <div className='font-title text-2xl text-[black] font-bold flex justify-between items-center' >
                <h2 className='sm:text-xl ss:text-lg'>Блог</h2>
                <div className='flex'>  
                    <div className='h-10 w-10 flex items-center justify-center bg-[white]'>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.417 15.8334L7.58366 10.0001L13.417 4.16675" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className='h-10 w-10 flex items-center justify-center bg-red text-[white] hover:bg-light-red transition-colors duration-300 cursor-pointer'>
                        <svg className=' rotate-180' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.417 15.8334L7.58366 10.0001L13.417 4.16675" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] mt-20 gap-[30px]'>
                <BlogCard title='Стоимость перевозки контейнеров' description='Сталкиваетесь с проблемами стоимости и прогнозирования? Нужны решения?' tag='Транспортировка' img_url='/home/container.png' date='16, Авг. 2021' />
                <BlogCard title='Управление цепочкой поставок' description='Управление цепочкой поставок - важная и незаменимая часть большинства бизнесов.' tag='Цепочки поставок' img_url='/home/containers.png' date='16, Авг. 2021' />
                <BlogCard title='Ваши логистические проблемы' description='Глобальные цепочки поставок, на которые опирается множество розничных продавцов, нарушены на длительный срок.' tag='Логистика' img_url='/home/container.png' date='16, Авг. 2021' />
            </div>
        </div>
    </section>
  )
}
