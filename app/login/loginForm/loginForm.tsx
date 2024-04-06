'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Form, Input, Button, ConfigProvider, Checkbox } from 'antd'
import './style.css'

export default function LoginForm() {

    const router = useRouter()

  const onFinish = (values: any) => {
    console.log(values)
    router.push('/')
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
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
    name='registration form' 
    layout='vertical'
    autoComplete="off"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    className=' border-[#D9D9D9] border-[1px] px-16 pt-[70px] pb-14 bg-white rounded-2xl w-[600px] flex flex-col items-center my-16 md:w-full md:rounded-none md:border-0 md:my-0 sm:px-5'>
      <h2 className=' font-title text-black font-bold text-[30px] mb-11'>
        Войти
      </h2>
      <Form.Item
        label='Ваша почта'
        name='email'
        rules={[{type: 'email', message: 'Введите ваш адрес электронной почты'},({getFieldValue})=>({
            validator(_, value){
                if(!value && !getFieldValue('phone')){
                    return Promise.reject(new Error('Введите ваш адрес электронной почты'))
                } else if(value && getFieldValue('phone')){
                    return Promise.reject(new Error('Введите только один набор данных'))
                } else {
                    return Promise.resolve()
                }
            }
        })]}
        className='w-full'
        dependencies={['phone', 'password']}
      >
        <Input placeholder='Email адрес' className='bg-[#F4F4F4]' style={{boxShadow: 'none'}}/>
      </Form.Item>
      <div className='w-full relative my-4'><hr className='text-[#0000002d]'/> <div className='absolute top-[-14px] left-[50%] text-[#313131ce] translate-x-[-13px] bg-white p-1'>Или</div></div>
      <Form.Item
        label='Номер телефона'
        name='phone'
        rules={[({getFieldValue})=>({
            validator(_, value){
                if(!value && !getFieldValue('email')){
                    return Promise.reject(new Error('Введите ваш номер телефона'))
                } else if(value && getFieldValue('email')){
                    return Promise.reject(new Error('Введите только один набор данных'))
                } else {
                    return Promise.resolve()
                }
            }
        })]}
        className='w-full'
        dependencies={['email', 'password']}
      >
        <Input placeholder='Ваш номер телефона' className='bg-[#F4F4F4]' style={{boxShadow: 'none'}}/>
      </Form.Item>
      <Form.Item
        label='Пароль'
        name='password'
        rules={[({getFieldValue})=>({
            validator(_, value){
                if(!value){
                    return Promise.reject(new Error('Введите ваш пароль'))
                } else {
                    return Promise.resolve()
                }
            }
        })]}
        className='w-full'
        dependencies={['email', 'phone']}
      >
        <Input.Password placeholder='Введите ваш пароль' className='bg-[#F4F4F4]' style={{boxShadow: 'none'}}/>
      </Form.Item>
      
      <Form.Item
        name='client-agreement'
        valuePropName="checked"
        className='w-full'
      >
        <Checkbox>
        Запомнить меня
        </Checkbox>
      </Form.Item>
      <Form.Item
      className='w-full'
      >
      <Button type="primary" htmlType="submit" className=' bg-red px-6 py-4 h-fit w-full'>
                                <div className="flex justify-center font-semibold text-[white] w-full"> Войти
                                        </div>
                                </Button>
      </Form.Item>
      <div className=' font-light text-sm mb-2 w-full'>
        Либо воспользуйтесь сторонними сервисами:
      </div>
      <div className='flex items-center gap-5 w-full mb-7'>
        <div className=' border-[1px] border-[#00000030] py-4 flex-1 flex justify-center rounded-xl font-title font-bold cursor-pointer'>
          <Image className='mr-2' src='/registration/Google.svg' height={20} width={20} alt='icon' />
          Vk
        </div>
        <div className=' border-[1px] border-[#00000030] py-4 flex-1 flex justify-center rounded-xl font-title font-bold cursor-pointer'>
            <Image className='mr-2' src='/registration/Google.svg' height={20} width={20} alt='icon' />
            Tinkoff
        </div>
      </div>
      <div className='font-title font-medium text-center'>У вас еще нет аккаунта? <Link href='/registration' className=' text-[#3891E3]'>Зарегистрироваться</Link></div>
    </Form>
    </ConfigProvider>
  )
}
