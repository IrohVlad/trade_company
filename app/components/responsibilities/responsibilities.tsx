import React from 'react'
import Image from 'next/image'

export default function Responsibilities() {
  return (
    <>
        <h3 className="font-bold text-[28px] mt-[80px] text-black ss:text-lg">
                    Мы отвечаем за:
                </h3>
                <p className="my-[36px] text-[16px] text-[#6C6C6C] leading-[26px]">Вы можете воспользоваться всеми преимуществами услуги таможенного оформления, включая оперативное реагирование на изменения в таможенных регуляциях, процедурах и лицензиях, которые влияют на ваш бизнес.</p>
                <div className="mt-[60px] mb-8 text-black">
                    <div className="flex lg:flex-col lg:gap-y-8 items-start pb-6 border-b border-opacity-20 gap-x-[85px]">
                        <div className="w-[326px] md:w-fit flex items-center">
                            <div className="mr-4"><Image height={32} width={32} src="/services/import.svg" alt=""/></div>
                            <div className="font-semibold text-[22px]">Импорт :</div>
                        </div>
                        <ul>
                            <li className=" mb-2 before:w-2 before:h-2 before:bg-red before:rounded-full flex items-center before:mr-3">Уплата пошлин</li> 
                            <li className=" mb-2 before:w-2 before:h-2 before:bg-red before:rounded-full flex items-center before:mr-3">Заполнение деклараций</li>
                            <li className=" mb-2 before:w-2 before:h-2 before:bg-red before:rounded-full flex items-center before:mr-3">Проверка соответствия документации</li>
                            <li className=" before:w-2 before:h-2 before:bg-red before:rounded-full flex items-center before:mr-3">Точное оформление деклараций по импорту</li>
                        </ul>
                    </div>
                    <div className="flex lg:flex-col lg:gap-y-8 mt-8 items-start pb-6 border-b border-opacity-20 gap-x-[85px]">
                        <div className="w-[326px] md:w-fit flex items-center">
                            <div className="mr-4"><Image height={32} width={32} src="/services/export.svg" alt=""/></div>
                            <div className="font-semibold text-[22px]">Экспорт :</div>
                        </div>
                        <ul>
                            <li className=" mb-2 before:w-2 before:h-2 before:bg-red before:rounded-full flex items-center before:mr-3">Оформление экспортных деклараций</li> 
                            <li className=" mb-2 before:w-2 before:h-2 before:bg-red before:rounded-full flex items-center before:mr-3">Управление происхождением товара</li>
                            <li className=" mb-2 before:w-2 before:h-2 before:bg-red before:rounded-full flex items-center before:mr-3">Управление лицензиями на товары</li>
                            <li className=" before:w-2 before:h-2 before:bg-red before:rounded-full flex items-center before:mr-3">Проверка соответствия документации</li>
                        </ul>
                    </div>
                    <div className="flex lg:flex-col lg:gap-y-8 mt-8 items-start pb-6 border-b border-opacity-20 gap-x-[85px]">
                        <div className="w-[326px] md:w-fit flex items-center">
                            <div className="mr-4"><Image height={32} width={32} src="/services/transit.svg" alt=""/></div>
                            <div className="font-semibold text-[22px]">Транзит :</div>
                        </div>
                        <ul>
                            <li className=" mb-2 before:w-2 before:h-2 before:bg-red before:rounded-full flex items-center before:mr-3">Оформление деклараций</li> 
                            <li className=" mb-2 before:w-2 before:h-2 before:bg-red before:rounded-full flex items-center before:mr-3">Управление дальнейшим перемещением</li>
                            <li className=" mb-2 before:w-2 before:h-2 before:bg-red before:rounded-full flex items-center before:mr-3">Своевременная поставка товара</li>
                            <li className=" before:w-2 before:h-2 before:bg-red before:rounded-full flex items-center before:mr-3">Минимизация задержек в пути</li>
                        </ul>
                    </div>
                </div>
    </>
  )
}
