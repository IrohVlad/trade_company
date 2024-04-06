"use client"
import React from 'react'
import Image from 'next/image'
import { Button, Form as Antform, Input, ConfigProvider } from 'antd';
import './styles.css'

const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

export default function Form() {


    return (
        <>
            <h2 className="text-[black] text-[44px] font-bold w-full mb-9 sm:text-xl ss:text-lg ">Оставайтесь на
                связи</h2>
            <div className='flex items-center justify-between text-[black] 2lg:flex-col 2lg:gap-16'>
                <div className="max-w-[50%] 2lg:max-w-[100%]">
                    <p className="text-[#6C6C6C] mb-[75px] 2lg:w-3/4 sm:w-full">Свяжитесь с нами напрямую по телефону
                        или заполните форму, чтобы получить бесплатную консультацию от нашего персонала.</p>
                    <ul className='2lg:flex 2lg:justify-between sm:flex-col sm:justify-start'>
                        <li className=" mb-7 2lg:mb-0 sm:mb-5">
                            <div className="flex items-center mb-3 sm:mb-1">
                                <div className="mr-4">
                                    <div><Image src="/tel.svg" width={24} height={24} alt="Tel"/></div>
                                </div>
                                <div className="text-[#6C6C6C] text-lg text-semibold">Номер телефона</div>
                            </div>
                            <div className=" font-bold 2lg:font-semibold 2xl:text-[18px] text-[28px]">

                                (995) 885-71-36
                            </div>
                        </li>
                        <li className=" mb-7 2lg:mb-0 sm:mb-5">
                            <div className="flex items-center mb-3 sm:mb-1">
                                <div className="mr-4">
                                    <div><Image src="/mail.svg" width={24} height={24} alt="Mail"/></div>
                                </div>
                                <div className="text-[#6C6C6C] text-lg text-semibold">Email</div>
                            </div>
                            <div className=" font-semibold text-[18px]">
                                hello@asiafy.ru
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center mb-3 sm:mb-1">
                                <div className="mr-4">
                                    <div><Image src="/point.svg" width={24} height={24} alt="Point"/></div>
                                </div>
                                <div className="text-[#6C6C6C] text-lg text-semibold">Адрес</div>
                            </div>
                            <div className=" font-semibold text-[18px]">
                                ТРЦ АВИАПАРК, 1 ЭТАЖ
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='2lg:w-full'>
                    <div className="flex items-center mb-[60px] sm:mb-7">
                        <div className="mr-3"><Image src="/mail2.svg" width={34} height={34} alt="Mail"/></div>
                        <div className="font-bold text-[22px] ss:text-lg">Напишите нам</div>
                    </div>
                    <ConfigProvider
                        theme={{
                        token: {
                            // Seed Token
                            // colorPrimary: 'gray'
                            colorPrimary: '#AB3534'
                        },
                        components: {
                            Select: {
                            borderRadius: 0,
                            },
                            Checkbox: {
                            colorPrimary: '#AB3534'
                            }
                        }
                        }}
                    >
                    <Antform name='form' onFinish={onFinish} onFinishFailed={onFinishFailed} className="w-[520px] 2lg:w-full" action="">
                        <div className="mb-9 sm:mb-5">
                            <Antform.Item name="name" rules={[{required: true, message: 'Пожалуйста укажите ваше имя'}]}>
                                <Input type='text' className="rounded-none border-l-0 border-r-0 border-t-0 font-title font-medium caret-red" style={{ boxShadow: 'none' }} placeholder="Полное имя"/>
                            </Antform.Item>
                        </div>
                        <div className="mb-9 sm:mb-5">
                            <Antform.Item name="phone" rules={[{required: true, message: 'Пожалуйста укажите ваш номер телефона'}]}>
                                <Input type='text' className="rounded-none border-l-0 border-r-0 border-t-0 font-title font-medium caret-red" style={{ boxShadow: 'none' }} placeholder="Номер телефона"/>
                            </Antform.Item>
                        </div>
                        <div className="mb-9 sm:mb-5">
                            <Antform.Item name="email" rules={[{required: true, message: 'Пожалуйста укажите ваш адрес электронной почты', type: 'email'}]}>
                                <Input type='text' className="rounded-none border-l-0 border-r-0 border-t-0 font-title font-medium caret-red" style={{ boxShadow: 'none' }} placeholder="Email адрес"/>
                            </Antform.Item>
                        </div>
                        <div className="mb-[60px] sm:mb-10">
                            <Antform.Item name="message" rules={[{required: true, message: 'Пожалуйста укажите сообщение', min: 5}]}>
                                <Input.TextArea rows={2} className="rounded-none border-l-0 border-r-0 border-t-0 font-title h-20 max-h-20 text-start font-medium caret-red" style={{ boxShadow: 'none', resize: 'none' }} placeholder="Сообщение"/>
                            </Antform.Item>
                        </div>
                        <Antform.Item>
                                <Button type="primary" htmlType="submit" className=' bg-red px-6 py-4 h-fit w-fit'>
                                <div className="flex font-semibold text-[white]"><Image className="mr-3" src="/send.svg"
                                                                                                width={16} height={15}
                                                                                                alt="Send"/> Отправить
                                        </div>
                                </Button>
                        </Antform.Item>
                    </Antform>
                    </ConfigProvider>
                </div>
            </div>
        </>
    )
}
