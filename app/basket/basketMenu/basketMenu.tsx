'use client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { increase, decrease } from '@/app/redux/slices/basketSlice'

export default function BasketMenu({index, count}: any) {
  const dispatch = useDispatch()
  return (
    <div className='border-[2px] px-3 py-1 w-[120px] border-black flex items-center justify-between'>
        <div className='p-2 cursor-pointer' onClick={()=>{
          dispatch(decrease(index))
        }}>
            -
        </div>
        <div>
            {count}
        </div>
        <div className='p-2 cursor-pointer' onClick={()=>{
          dispatch(increase(index))
        }}>
            +
        </div>
    </div>
  )
}
