import React from 'react'
import ServiceHero from '../components/serviceHero/serviceHero'
import ClientsGrid from './clientsGrid/clientsGrid'
import ClientCard from './clientCard/clientCard'

const imgs = [
    '/clients/Group 104.svg',
    '/clients/Group 104.svg',
    '/clients/Group 104.svg',
    '/clients/Group 104.svg',
    '/clients/Group 104.svg',
    '/clients/Group 104.svg',
    '/clients/Group 104.svg',
    '/clients/Group 104.svg',
    '/clients/Group 104.svg',
    '/clients/Group 104.svg',
    '/clients/Group 104.svg',
    '/clients/Group 104.svg',
]
const clients = [
    {
        name: 'Name',
        subname: 'SUBName',
        icon_url: '/home/container.png',
        description: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
    },
    {
        name: 'Name',
        subname: 'SUBName',
        icon_url: '/home/container.png',
        description: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
    },
    {
        name: 'Name',
        subname: 'SUBName',
        icon_url: '/home/container.png',
        description: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
    },
    {
        name: 'Name',
        subname: 'SUBName',
        icon_url: '/home/container.png',
        description: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
    },
    {
        name: 'Name',
        subname: 'SUBName',
        icon_url: '/home/container.png',
        description: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
    },
    {
        name: 'Name',
        subname: 'SUBName',
        icon_url: '/home/container.png',
        description: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
    },
    {
        name: 'Name',
        subname: 'SUBName',
        icon_url: '/home/container.png',
        description: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
    },
    {
        name: 'Name',
        subname: 'SUBName',
        icon_url: '/home/container.png',
        description: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
    },
]

export default function Clients() {
  return (
    <>
        <ServiceHero title='Клиенты' routes={[{title:'Главная', href: '/'}, {title:'Клиенты', href: 'clients'}]} className='relative after:absolute after:block bg-[#C4C4C4] after:top-0 after:left-0 after:w-full after:h-full after:z-100 after:bg-[linear-gradient(90deg,rgba(171,53,52,0.5)0%,rgba(255,7,5,0.5)200%)] after:bg-opacity-50'/>
        <section className=' relative'>
            <div className='max-w-c-full mt-[120px] lg:mt-0 mb-6 mx-auto grid grid-cols-[410px_1fr] lg:grid-cols-[1fr] gap-x-[52px] p-6 lg:px-10'>
                <h2 className=' font-title text-black font-bold text-2xl sm:text-xl ss:text-lg lg:mb-[80px]'>
                    Мы рады, что вы выбрали именно нас
                </h2>
                <div className=' h-screen md:h-[500px] px-[58px] md:px-[30px] border-l-[1px] border-[#00000050] flex flex-col gap-[30px] overflow-auto z-10 lg:border-0'>
                    {clients?.length && clients.map((value, index)=>{
                        return (
                            <ClientCard key={index} name={value.name} subname={value.subname} icon_url={value.icon_url} description={value.description} />
                        )
                    })}
                </div>
            </div>
            <div className=' absolute bottom-0 left-0 h-[40%] w-full bg-[linear-gradient(0deg,rgba(196,196,196,1)0%,rgba(255,255,255,0)100%)]'>
                
            </div>
        </section>
        <ClientsGrid img_urls={imgs}/>
    </>
  )
}
