import React from 'react'
import Image from 'next/image'
import Button from '../../components/button/button'

export default function Panoram() {
  return (
    <section className='w-full relative'>
        <div className=' h-fit m-auto max-w-c-full mshort:h-fit lg:h-fit flex items-centers xl:grid-cols-[1fr_1fr] gap-5 lg:grid-cols-[1fr] py-[45px] px-6'>
            <div className='relative self-end lg:hidden'>
                <div className='flex flex-col h-full justify-end z-10 relative'>
                    <div className=' font-medium text-[18px] font-title'>Железнодорожные перевозки</div>
                    <div className='font-bold text-[28px] font-title mt-[10px]'>Надежный сервис железнодорожных грузоперевозок.</div>
                </div>
            </div>
            <div className='bg-[#181818] px-[80px] py-16 ss:px-[40px] h-full flex flex-col justify-center lg:m-6 z-10 rounded-xl bg-opacity-45'>
                <div className='max-w-[410px] w-[410px] lg:w-auto'>
                    <h2 className=' font-title font-semibold text-2xl sm:text-xl ss:text-lg'>Транспорт</h2>
                    <p className=' font-text pt-9'>Услуги по транспортировке гарантируют быстрое и своевременное прохождение грузов через границы.</p>
                    <div className='flex justify-between gap-10px mt-[72px] sm:flex-col sm:justify-start sm:gap-8'>
                        <div>
                            <div className='flex items-center font-title text-[18px] font-semibold'>
                                <Image src='/Quality.svg' alt='Quality icon' width={28} height={28} className='mr-4' />
                                По морю
                            </div>
                            <div className='flex items-center font-title text-[18px] font-semibold mt-8'>
                                <Image src='/Quality.svg' alt='Quality icon' width={28} height={28} className='mr-4' />
                                По Ж/Д
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center font-title text-[18px] font-semibold'>
                                <Image src='/Quality.svg' alt='Quality icon' width={28} height={28} className='mr-4' />
                                По воздуху
                            </div>
                            <div className='flex items-center font-title text-[18px] font-semibold mt-8'>
                                <Image src='/Quality.svg' alt='Quality icon' width={28} height={28} className='mr-4' />
                                Наземная перевозка
                            </div>
                        </div>
                    </div>
                </div>
                <Button className='mt-[80px] px-4 py-3 ss:px-3 ss:py-2'>
                    <div className='flex items-center font-title font-semibold ss:text-[12px] gap-3 ss:gap-1'>Больше наших сервисов <Image src="/Arrow.svg" alt='Arrow' width={16} height={8}/></div>
                </Button>
            </div>
            <div className='h-full w-full absolute left-0 top-0'>
                    <Image src='/home/on-rails-man.png' alt='' fill={true} objectFit='cover' objectPosition='center' />
                </div>  
                <div className='bg-[#333333] opacity-35 h-full w-full absolute top-0 left-0'>

                </div>
        </div>
    </section>
  )
}
