import React from 'react'
import Image from 'next/image'

export default function Offers() {
  return (
    <>
        <h3 className="font-bold text-[28px] mt-[80px] text-black ss:text-lg">
                    Что мы можем для вас сделать :
                </h3>
                <div className="mt-[60px] text-black">
                    <div className="flex mb-[40px]">
                        <div className="mr-4 relative top-2"><Image width={36} height={36} src="/services/count.svg" alt="Our doings"/></div>
                        <div>
                            <div className="font-semibold text-[20px] max-w-[358px] mb-4">Адаптация под ваши потребности</div>
                            <div className="text-[#6C6C6C]">Мы можем адаптировать наши услуги в зависимости от объема товаров, который вы хотите хранить.</div>
                        </div>
                    </div>
                    <div className="flex mb-[40px]">
                        <div className="mr-4 relative top-2"><Image width={36} height={36} src="/services/depression.svg" alt="Our doings"/></div>
                        <div>
                            <div className="font-semibold text-[20px] max-w-[358px] mb-4">Сократите ваши расходы</div>
                            <div className="text-[#6C6C6C]">Вам не придется инвестировать в строительство и эксплуатацию частного склада.</div>
                        </div>
                    </div>
                    <div className="flex mb-[40px]">
                        <div className="mr-4 relative top-2"><Image width={36} height={36} src="/services/time.svg" alt="Our doings"/></div>
                        <div>
                            <div className="font-semibold text-[20px] max-w-[358px] mb-4">Экономим ваше время</div>
                            <div className="text-[#6C6C6C]">Сокращение времени цикла - это преимущество, которое складская служба предоставляет бизнесу.</div>
                        </div>
                    </div>
                    <div className="flex mb-[40px]">
                        <div className="mr-4 relative top-2"><Image width={36} height={36} src="/services/effect.svg" alt="Our doings"/></div>
                        <div>
                            <div className="font-semibold text-[20px] max-w-[358px] mb-4">Повышение эффективности операций</div>
                            <div className="text-[#6C6C6C]">Складские услуги помогают снизить затраты и сэкономить ваше время.</div>
                        </div>
                    </div>
                </div>
    </>
  )
}
