'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Checkbox, Form, Input, ConfigProvider, Select } from 'antd';
import './styles.css'

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

export default function ShipmentForm() {

  return (
    <section className='sh-form'>
        <div className='max-w-c-full m-auto py-[100px] p-6 lg:px-8'>
          <h2 className='max-w-[520px] text-xl text-black font-title font-bold mb-5'>Заполните форму и мы с вами свяжемся</h2>
          <p className='text-title text-black font-semibold text-lg mb-[60px]'>Перед заполнением формы ознакомьтесь с тем, <Link href={'/shipment/network'} className=' text-red hover:text-light-red transition-colors duration-300'>где мы работаем <svg className='ml-2 inline-block relative bottom-[2px]' width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5164 6.53033C17.8093 6.23744 17.8093 5.76256 17.5164 5.46967L12.7434 0.696699C12.4505 0.403806 11.9756 0.403806 11.6827 0.696699C11.3899 0.989593 11.3899 1.46447 11.6827 1.75736L15.9254 6L11.6827 10.2426C11.3899 10.5355 11.3899 11.0104 11.6827 11.3033C11.9756 11.5962 12.4505 11.5962 12.7434 11.3033L17.5164 6.53033ZM0 6.75H16.986V5.25H0V6.75Z" fill="currentColor"/></svg></Link></p>
          <ul className='flex gap-[60px] pb-9 border-b-[1px] border-[#00000030] mb-[25px] lg:flex-col'>
            <li className='flex font-title text-black font-semibold text-lg items-center'>
              <div className='h-14 w-14 min-w-14 min-h-14 border-[#EDEDED] border-[1px] flex items-center justify-center rounded-full mr-4'>
                <Image src='/shipment/box.svg' height={28} width={28} alt='box' />
              </div>
              Быстро и легко
            </li>
            <li className='flex font-title text-black font-semibold text-lg items-center'>
              <div className='h-14 w-14 min-w-14 min-h-14 border-[#EDEDED] border-[1px] flex items-center justify-center rounded-full mr-4'>
                <Image src='/shipment/hand.svg' height={28} width={28} alt='box' />
              </div>
              Безопасно
            </li>
            <li className='flex font-title text-black font-semibold text-lg items-center'>
              <div className='h-14 w-14 min-w-14 min-h-14 border-[#EDEDED] border-[1px] flex items-center justify-center rounded-full mr-4'>
                <Image src='/shipment/24.svg' height={28} width={28} alt='box' />
              </div>
              Мы вернемся к вам в течении 24 часов
            </li>
          </ul>
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
            <Form
              name="shipment"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <h3 className=' text-[28px] font-bold text-black font-title mb-10'>Информация об отправлении</h3>
              <div className='flex gap-x-[80px] gap-y-10 mb-[60px] md:flex-col'>
                <div className='flex-1 min-w-[200px] md:flex-col'>
                  <div className='mb-10'>
                    <Form.Item
                      name="where"
                      rules={[{required: true, message: 'Пожалуйста укажите где забрать'}]}
                    >
                      <Input placeholder='Где забрать отправление' className=' rounded-none border-l-0 border-r-0 border-t-0 font-title font-medium' style={{ boxShadow: 'none' }}/>
                    </Form.Item>
                  </div>
                  <div className='mb-10'>
                    <Form.Item
                      name="product"
                      rules={[{required: true, message: 'Пожалуйста выберите товар'}]}
                    >
                      <Select placeholder="Товар" className=' rounded-none border-l-0 border-r-0 border-t-0 font-title font-medium' style={{ border: 'none' }}>
                        <Select.Option value="1">
                          Товар1
                        </Select.Option>
                        <Select.Option value="2">
                          Товар2
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      name="weight"
                      rules={[{required: true, message: 'Пожалуйста укажите вес'}]}
                    >
                      <Input placeholder='Вес' className=' rounded-none border-l-0 border-r-0 border-t-0 font-title font-medium' style={{ boxShadow: 'none' }}/>
                    </Form.Item>
                  </div>
                </div>
                <div className='flex-1 min-w-[200px]'>
                  <div className='mb-10'>
                    <Form.Item
                      name="point"
                      rules={[{required: true, message: 'Пожалуйста укажите пункт назначения'}]}
                    >
                      <Input placeholder='Пункт назначения' className=' rounded-none border-l-0 border-r-0 border-t-0 font-title font-medium' style={{ boxShadow: 'none' }}/>
                    </Form.Item>
                  </div>
                  <div className='mb-10'>
                    <Form.Item
                      name="service"
                      rules={[{required: true, message: 'Пожалуйста выберите услугу'}]}
                    >
                      <Select placeholder="Услуга" className=' rounded-none border-l-0 border-r-0 border-t-0 font-title font-medium' style={{ border: 'none' }}>
                        <Select.Option value="1">
                          Услуга1
                        </Select.Option>
                        <Select.Option value="2">
                        Услуга2
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      name="sizes"
                      rules={[{required: true, message: 'Пожалуйста укажите размеры'}]}
                    >
                      <Input placeholder='Размеры' className=' rounded-none border-l-0 border-r-0 border-t-0 font-title font-medium' style={{ boxShadow: 'none' }}/>
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className='flex gap-12 mb-[60px] sm:flex-col'>
                <Form.Item
                  name='insurance'
                  valuePropName='checked'
                >
                  <Checkbox className='font-title font-semibold text-sm'>Страхование</Checkbox>
                </Form.Item>
                <Form.Item
                  name='package'
                  valuePropName='checked'
                >
                  <Checkbox className='font-title font-semibold text-sm'>Упаковка</Checkbox>
                </Form.Item>
                <Form.Item
                  name='fast'
                  valuePropName='checked'
                >
                  <Checkbox className='font-title font-semibold text-sm'>Быстрая доставка</Checkbox>
                </Form.Item>
              </div>
              <h3 className=' text-[28px] font-bold text-black font-title mb-10'>Информация об отправителе</h3>
              <div className='flex gap-x-[80px] gap-y-10 mb-[60px] md:flex-col'>
                <div className='flex-1 min-w-[200px]'>
                    <div className='mb-10'>
                      <Form.Item
                        name="name"
                        rules={[{required: true, message: 'Пожалуйста укажите ваше имя'}]}
                      >
                        <Input placeholder='Имя' className=' rounded-none border-l-0 border-r-0 border-t-0 font-title font-medium' style={{ boxShadow: 'none' }}/>
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item
                        name="phone"
                        rules={[{required: true, message: 'Пожалуйста укажите ваш номер телефона'}]}
                      >
                        <Input placeholder='Ваш номер телефона' className=' rounded-none border-l-0 border-r-0 border-t-0 font-title font-medium' style={{ boxShadow: 'none' }}/>
                      </Form.Item>
                    </div>
                </div>
                <div className='flex-1 min-w-[200px]'>
                    <div className='mb-10'>
                      <Form.Item
                        name="email"
                        rules={[{required: true, message: 'Пожалуйста укажите ваш Email', type: 'email'}]}
                      >
                        <Input  placeholder='Ваш email' className=' rounded-none border-l-0 border-r-0 border-t-0 font-title font-medium' style={{ boxShadow: 'none' }}/>
                      </Form.Item>
                    </div>
                </div>
              </div>
              <Form.Item>
                    <Button type="primary" htmlType="submit" className=' bg-red px-6 py-4 h-fit w-fit'>
                      <div className="flex font-semibold text-[white]"><Image className="mr-3" src="/send.svg"
                                                                                      width={16} height={15}
                                                                                      alt="Send"/> Отправить
                              </div>
                    </Button>
              </Form.Item>
            </Form>
          </ConfigProvider>
        </div>
    </section>
  )
}
