import React from 'react'
import PageWithSidebar from '@/app/components/pageWithSidebar/pageWithSidebar'
import ServiceHero from '@/app/components/serviceHero/serviceHero'
import Slider from '@/app/components/slider/slider'
import Button from '@/app/components/button/button'
import Image from 'next/image'
import Offers from '@/app/components/offers/offers'
import Trucks from '@/app/components/trucks/trucks'

export default function Storage() {
  return (
    <>
        <ServiceHero title='Складские услуги' routes={[{title:'Главная', href: '/'}, {title:'Услуги', href: '/services'}, {title:'Складские услуги', href: 'storage'}]} img_url='/services/young-warehouse-workers-working-together-2022-03-30-20-23-36-utc2.png' />
        <PageWithSidebar>
        <h2 className=" text-[44px] font-bold max-w-[550px] mb-[40px] text-black sm:text-xl ss:text-[25px]">Складские услуги</h2>
                <p className="mb-[36px] text-[16px] text-[#6C6C6C] leading-[26px]">С мировой сетью и современными объектами, наша служба складского хранения готова работать с вашей логистической цепью, будь то на начальном этапе или при доставке. Воспользовавшись нашими услугами по складированию и распределению, вы уменьшите сложность процессов и получите быстроту, контроль и видимость. Это также позволит вам снизить стоимость доставки.</p>
                <Slider img_urls={['/services/unsplash_CfKV0CecnU8.png', '/services/unsplash_CfKV0CecnU8.png']}/>
                <div className="mt-[52px] text-black">
                    <div className="flex lg:flex-col lg:items-start gap-8 items-center border-b border-black border-opacity-20 pb-[20px]">
                        <div className="w-[185px] min-w-[185px] lg:w-auto lg:font-bold flex items-center text-[20px] font-semibold before:mr-4 before:w-[10px] before:min-w-[10px] before:h-[10px] before:bg-red before:rounded-full">Расположение:</div>
                        <div className="text-[20px]">Guangyuan (Guangzhou) Warehousing and Logistics Co., Ltd. ADDRESS:No. 29, Jinti Avenue, Timian Town, Huadu District, Guangzhou</div>
                    </div>
                    <div className="flex lg:flex-col lg:items-start gap-8 items-center border-b border-black border-opacity-20 pb-[20px]">
                        <div className="w-[185px] min-w-[185px] lg:w-auto lg:font-bold flex items-center text-[20px] font-semibold before:mr-4 before:w-[10px] before:min-w-[10px] before:h-[10px] before:bg-red before:rounded-full">Соответствие :</div>
                        <div className="text-[20px]">ISO9001:2008, FTZ, TS16949:2002, FDA Regulation</div>
                    </div>
                    <div className="flex lg:flex-col lg:items-start gap-8 items-center border-b border-black border-opacity-20 pb-[20px]">
                        <div className="w-[185px] min-w-[185px] lg:w-auto lg:font-bold flex items-center text-[20px] font-semibold before:mr-4 before:w-[10px] before:min-w-[10px] before:h-[10px] before:bg-red before:rounded-full">Размеры :</div>
                        <div className="text-[20px]">Length 250 M, Width 80 M, 12 Meter </div>
                    </div>
                    <div className="flex lg:flex-col lg:items-start gap-8 items-center border-b border-black border-opacity-20 pb-[20px]">
                        <div className="w-[185px] min-w-[185px] lg:w-auto lg:font-bold flex items-center text-[20px] font-semibold before:mr-4 before:w-[10px] before:min-w-[10px] before:h-[10px] before:bg-red before:rounded-full">Уклон крыши:</div>
                        <div className="text-[20px]">1:10</div>
                    </div>
                    <div className="flex lg:flex-col lg:items-start gap-8 items-center">
                        <div className="w-[185px] min-w-[185px] lg:w-auto lg:font-bold flex items-center text-[20px] font-semibold before:mr-4 before:w-[10px] before:min-w-[10px] before:h-[10px] before:bg-red before:rounded-full">Крановые системы :</div>
                        <div className="text-[20px]">Имеются</div>
                    </div>
                </div>
                <p className="my-[36px] text-[16px] text-[#6C6C6C] leading-[26px]">Многие из наших объектов идеально расположены вблизи ключевых морских портов основных транспортных маршрутов, что позволяет быстрее обрабатывать ваш груз. Мы предлагаем различные услуги в зависимости от происхождения вашего груза - мы можем напрямую перегружать или направлять грузы прямо в распределительный центр.</p>
                <p className="mb-[36px] text-[16px] text-[#6C6C6C] leading-[26px]">В конце концов, мы комбинируем наши складские услуги с различными формами транспортировки: внутренние перевозки – дорожные, железнодорожные, морские и воздушные, чтобы обеспечить бесперебойное движение вашего груза.</p>
                <Offers/>
                <h3 className="font-bold text-[28px] mt-[80px] text-black ss:text-lg">
                    Наши решения:
                </h3>
                <div className="grid grid-cols-[1fr_1fr_1fr] 2lg:grid-cols-[1fr] gap-3 mt-[30px] mb-[38px] text-black">
                    <div className=" h-[221px] lg:w-full shadow-lg flex flex-col items-center justify-center px-[28px]">
                        <div><Image height={44} width={44} className="mb-8" src="/services/box.svg" alt="Card icon"/></div>
                        <div className=" text-center text-[18px] font-medium">Краткосрочное хранение</div>
                    </div>
                    <div className=" h-[221px] lg:w-full shadow-lg flex flex-col items-center justify-center px-[28px]">
                        <div><Image height={44} width={44} className="mb-8" src="/services/store.svg" alt="Card icon"/></div>
                        <div className=" text-center text-[18px] font-medium">Совместное использование склада</div>
                    </div>
                    <div className=" h-[221px] lg:w-full shadow-lg flex flex-col items-center justify-center px-[28px]">
                        <div><Image height={44} width={44} className="mb-8" src="/services/net.svg" alt="Card icon"/></div>
                        <div className=" text-center text-[18px] font-medium">Аренда склада с самостоятельным управлением</div>
                    </div>
                </div>
                <Button className="mb-[150px] px-4 py-[15px] " ><div className=" text-white w-fit font-semibold flex"> <Image className="mr-3" width={24} height={24} src="/services/download.svg" alt="Download"/> Загрузить брошуру с нашими услугами</div></Button>
        </PageWithSidebar>
        <Trucks/>
    </>
  )
}
