'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MyButton from '@/app/components/button/button'
import { Form, Input, Button, AutoComplete, ConfigProvider, Checkbox, DatePicker } from 'antd'
import './style.css'


const options = [
  { value: 'Burns Bay Road' },
  { value: 'Downing Street' },
  { value: 'Wall Street' },
];

export default function RegistrationForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({email: '', phone: '', password: '', name: '', date: '', city: '', address: '', code: ''})

  const onFinish1 = (values: any) => {
    setData({ ...data, email: values.email, phone: values.phone, password: values.password,})
    setStep(1)
  };
  const onFinishFailed1 = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish2 = (values: any) => {
    setData({ ...data, name: values.name, date: values.date, city: values.city, address: values.address, code: values.code})
    setStep(3)
  };
  const onFinishFailed2 = (errorInfo: any) => {
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
    {step == 0 && <Form
    name='registration form' 
    layout='vertical'
    autoComplete="off"
    onFinish={onFinish1}
    onFinishFailed={onFinishFailed1}
    initialValues={{email: data.email, phone: data.phone, password: data.password, }}
    className=' border-[#D9D9D9] border-[1px] px-16 pt-[70px] pb-14 bg-white rounded-2xl w-[600px] flex flex-col items-center my-16 md:w-full md:rounded-none md:border-0 md:my-0 sm:px-5'>
      <h2 className=' font-title text-black font-bold text-[30px] mb-11'>
        Регистрация
      </h2>
      <Form.Item
        label='Ваша почта'
        name='email'
        rules={[{required: true, message: 'Введите адрес электронной почты', type: 'email'}]}
        className='w-full'
      >
        <Input placeholder='Email адрес' className='bg-[#F4F4F4]' style={{boxShadow: 'none'}}/>
      </Form.Item>
      <Form.Item
        label='Номер телефона'
        name='phone'
        rules={[{required: true, message: 'Введите ваш номер телефона'}]}
        className='w-full'
      >
        <Input placeholder='Ваш номер телефона' className='bg-[#F4F4F4]' style={{boxShadow: 'none'}}/>
      </Form.Item>
      <Form.Item
        label='Пароль'
        name='password'
        rules={[{required: true, message: 'Введите ваш пароль'}]}
        className='w-full'
      >
        <Input.Password placeholder='Введите ваш пароль' className='bg-[#F4F4F4]' style={{boxShadow: 'none'}}/>
      </Form.Item>
      <Form.Item
        label='Повторите пароль'
        name='password-repeat'
        dependencies={['password']}
        rules={[{required: true, message: 'Введите ваш пароль'}, ({getFieldValue})=>({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('Введенные пароли не совпадают'));
          }
        })]}
        className='w-full'
      >
        <Input.Password placeholder='Введите ваш пароль еще раз' className='bg-[#F4F4F4]' style={{boxShadow: 'none'}}/>
      </Form.Item>
      <Form.Item
        name='policy'
        valuePropName="checked"
        className='w-full mb-0'
        rules={[{
          validator(_, value) {
            if(value){
              return Promise.resolve()
            } else {
              return Promise.reject(new Error('Подтвердите согласие с политикой конфиденциальности'))
            }
        },
        }]}
      >
        <Checkbox >
        Политика конфиденциальности
        </Checkbox>
      </Form.Item>
      <Form.Item
        name='client-agreement'
        valuePropName="checked"
        className='w-full'
        rules={[{
          validator(_, value) {
            if(value){
              return Promise.resolve()
            } else {
              return Promise.reject(new Error('Подтвердите согласие с клиентским соглашением'))
            }
        },
        }]}
      >
        <Checkbox>
        Политика конфиденциальности
        </Checkbox>
      </Form.Item>
      <Form.Item
      className='w-full'
      >
      <Button type="primary" htmlType="submit" className=' bg-red px-6 py-4 h-fit w-full'>
                                <div className="flex justify-center font-semibold text-[white] w-full"> Далее
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
      <div className='font-title font-medium text-center'>У вас уже есть аккаунт? <Link href='/login' className=' text-[#3891E3]'>Войти</Link></div>
    </Form>}
    { step == 1 && <Form
    name='registration form' 
    layout='vertical'
    autoComplete="off"
    onFinish={onFinish2}
    onFinishFailed={onFinishFailed2}
    initialValues={{name: data.name, date: data.date, city: data.city, address: data.address, code: data.code }}
    className=' border-[#D9D9D9] border-[1px] px-16 pt-[70px] pb-14 bg-white rounded-2xl w-[600px] flex flex-col items-center my-16 md:w-full md:rounded-none md:border-0 md:my-0 sm:px-5'>
      <svg className='absolute left-10 top-8 rotate-180 cursor-pointer' onClick={()=>{setStep(0)}} width="34" height="26" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5303 7.03033C16.8232 6.73744 16.8232 6.26256 16.5303 5.96967L11.7574 1.1967C11.4645 0.903805 10.9896 0.903805 10.6967 1.1967C10.4038 1.48959 10.4038 1.96447 10.6967 2.25736L14.9393 6.5L10.6967 10.7426C10.4038 11.0355 10.4038 11.5104 10.6967 11.8033C10.9896 12.0962 11.4645 12.0962 11.7574 11.8033L16.5303 7.03033ZM6.55671e-08 7.25L16 7.25L16 5.75L-6.55671e-08 5.75L6.55671e-08 7.25Z" fill="black"/>
      </svg>
      <h2 className=' font-title text-black font-bold text-[30px] mb-11'>
        Регистрация
      </h2>
      <Form.Item
        label='Ваше имя'
        name='name'
        rules={[{required: true, message: 'Введите ваше имя'}]}
        className='w-full'
      >
        <Input placeholder='Укажите ваше ФИО' className='bg-[#F4F4F4]' style={{boxShadow: 'none'}}/>
      </Form.Item>
      <Form.Item
        label='Дата рождения'
        name='date'
        rules={[{required: true, message: 'Введите дату рождения'}]}
        className='w-full'
      >
        <DatePicker placeholder='Ваша дата рождения' className='bg-[#F4F4F4] w-full' style={{boxShadow: 'none'}}/>
      </Form.Item>
      <Form.Item
        label='Город'
        name='city'
        rules={[{required: true, message: 'Введите ваш город'}]}
        className='w-full'
      >
        <AutoComplete 
        className=' !bg-[#F4F4F4] w-full' style={{boxShadow: 'none'}}
        options={options}
        filterOption={(inputValue, option) =>
          option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        } placeholder='Начните вводить город'/>
      </Form.Item>
      <Form.Item
        label='Адрес'
        name='address'
        rules={[{required: true, message: 'Введите ваш адрес'}]}
        className='w-full'
      >
        <Input placeholder='Укажите ваш адрес, например, для доставки' className='bg-[#F4F4F4]' style={{boxShadow: 'none'}}/>
      </Form.Item>
      <Form.Item
        label='Код приглашения'
        name='code'
        className='w-full mb-20'
      >
        <Input placeholder='Если у вас есть код, укажите его' className='bg-[#F4F4F4]' style={{boxShadow: 'none'}}/>
      </Form.Item>
      <Form.Item
      className='w-full'
      >
      <Button type="primary" htmlType="submit" className=' bg-red px-6 py-4 h-fit w-full'>
                                <div className="flex justify-center font-semibold text-[white] w-full"> Далее
                                        </div>
                                </Button>
      </Form.Item>

      <div className='font-title font-medium text-center'>У вас уже есть аккаунт? <Link href='/login' className=' text-[#3891E3]'>Войти</Link></div>
    </Form>}
    { step == 3 && <div
  className=' border-[#D9D9D9] border-[1px] px-16 pt-[70px] pb-14 bg-white rounded-2xl w-[600px] flex flex-col items-center my-16 md:w-full md:rounded-none md:border-0 md:my-0 sm:px-5'>
      <h2 className=' font-title text-black font-bold text-[30px] mb-11'>
      Спасибо!
      </h2>
      <p className=' text-lg font-title mb-20 text-black'>
      Спасибо за регистрацию на нашем сайте! Ваш аккаунт был успешно создан. Теперь вы можете войти на сайт и наслаждаться всеми преимуществами, которые мы предоставляем нашим пользователям. Если у вас возникнут какие-либо вопросы или проблемы, пожалуйста, свяжитесь с нашей службой поддержки. Мы всегда готовы помочь вам в любое время.
      </p>
      <Form.Item
      className='w-full'
      >
      <MyButton className=' bg-red px-6 py-4 h-fit w-full'>
                                <Link href={'/'} className="flex justify-center font-semibold text-[white] w-full hover:text-white"> Завершить
                                        </Link>
                                </MyButton>
      </Form.Item>
    </div>}
    </ConfigProvider>
  )
}
