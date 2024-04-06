'use client'
import React, {useState} from 'react'
import MarketNavbar from '../components/marketNavbar/marketNavbar'
import Image from 'next/image'
import { Table, ConfigProvider } from 'antd'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Button from '../components/button/button'
import BasketMenu from './basketMenu/basketMenu'

const columns = [
    {
      title: 'Товар',
      dataIndex: 'product',
      key: 'product'
    },
    {
      title: 'Цена, РУБ',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Количество',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: 'Всего',
      key: 'sum',
      dataIndex: 'sum',
    }
  ];

  const data = [
    {
      key: 1,
      product: ['/market/phone.png', 
      'Смартфон Apple iPhone 15 Pro, 256 ГБ, (2 SIM), Blue Titanium',],
      price: '1',
      count: '1',
      summ: '1'
    }
  ]
  
export default function Basket({searchParams}: Record<'searchParams', any>) {
  const basket = useSelector((state: RootState) => state.basket.value)
  return (
    <>
      <MarketNavbar searchParams={searchParams}/>
      <section className='py-6 lg:py-8 min-h-[1000px]'>
        <div className='max-w-c-full m-auto px-7 lg:px-8'>
        <div className=' p-7 lg:px-8 shadow-md rounded-[10px] border-[1px] border-[#D9D9D9] md:border-none md:p-0 md:shadow-none'>
          <div className=' text-black text-xl font-text after:block w-fit font-semibold after:bg-red after:h-[3px] after:w-full mb-5'>Ваш заказ</div>
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
            <Table dataSource={basket.map((value, index)=>{return {
              key: index,
              product: [ value.image, value.name],
              price: value.price,
              count: value.amount,
              sum: value.price * value.amount
            }})}>
              <Table.Column title="Товар" dataIndex='product' key='product'
                render={(product) => {
                  return(
                  <div className='flex items-center'>
                      <Image width={100} height={100} src={'https://all-trader.ru' + product[0]} alt='product image' />
                      <div className='font-text text-black text-base'>{product[1]}</div>
                  </div>
                )}}
              />
              <Table.Column title="Цена, РУБ" dataIndex='price' key='price' 
              render={(price)=>{
                return(
                  <div className='font-text font-bold text-base text-black'>{price}</div>
                )
              }}
              />
              <Table.Column title="Количество" dataIndex='count' key='count'
              render={(count, _, index)=>{
                return(
                  <BasketMenu count={count} index={index} />
                )
              }} />
              <Table.Column title="Всего" dataIndex='sum' key='sum' 
              render={(sum)=>{
                return(
                  <div className='font-text font-bold text-base text-black'>{sum}</div>
                )
              }}/>
            </Table>
            </ConfigProvider>
            <div className='bg-bg-grey rounded-xl px-[25px] py-5 max-w-[950px] mx-auto mt-[100px]'>
              <div className='flex items-center justify-between pb-[35px] border-b-[1px] border-a-grey'>
                <div className='font-title font-medium text-base text-black'>Заказ на сумму</div>
                <div className='font-text font-semibold text-black font-base'>
                  { basket.length && basket.reduce((sum, value)=> sum + value.price * value.amount, 0)}Р
                </div>
              </div>
              <div className='flex items-center justify-between mt-[30px]'>
                <div className='font-text font-bold text-black text-[24px]'>
                  Всего
                </div>
                <div className='font-text font-bold text-black text-[24px]'>
                { basket.length && basket.reduce((sum, value)=> sum + value.price * value.amount, 0)}Р
                </div>
              </div>
              <Button className='py-2 px-[25px] mt-[100px] ml-auto'>
                <div className='font-semibold font-title'>Оформить заказ</div>
              </Button>
            </div>
        </div>
        </div>
      </section>
    </>
  )
}
