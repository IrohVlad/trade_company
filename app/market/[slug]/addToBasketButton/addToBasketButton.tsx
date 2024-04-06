'use client'
import React from 'react'
import Button from '@/app/components/button/button'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease, remove } from '@/app/redux/slices/basketSlice'
import { RootState } from '@/app/redux/store'
import { addItems } from '@/app/redux/slices/basketSlice'


export default function AddToBasketButton({id, name, price, image}: any) {
    const basket = useSelector((state: RootState) => state.basket)
    const dispatch = useDispatch()
    const addToBasket = React.useCallback(() =>{
        dispatch(addItems({id, name, price, image}))
    }, [])
    const index = basket.value.findIndex((value: any)=>{return value.id == id})
  return (
    <div className='flex gap-3'>
    <Button className={`py-3 px-10 min-w-[300px] ss:min-w-0 ${index >=0 && 'border-red border-[1px] !bg-[transparent] hover:bg-[transparent] !cursor-default'}`} onClick={ ()=>{!basket.value.find((value: any)=> id == value.id) && addToBasket()}}>
        {!basket.value.find((value: any)=> id == value.id) ? <div className='font-text text-base text-center'>Добавить в корзину</div> :
         <div className=' flex items-center justify-between text-red'>
        <div className='p-2 cursor-pointer text-lg' onClick={()=>{
          dispatch(decrease(index))
        }}>
            -
        </div>
        <div>
            {basket.value[index].amount}
        </div>
        <div className='p-2 cursor-pointer text-lg' onClick={()=>{
          dispatch(increase(index))
        }}>
            +
        </div>
    </div>}
    </Button>
    {basket.value.find((value: any)=> id == value.id) && <Image src='/market/trash.svg' className='cursor-pointer' onClick={()=>{dispatch(remove(index))}} alt='' height={30} width={30} />}
    </div>
  )
}
