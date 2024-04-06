'use client'
import React from 'react'
import {Checkbox } from 'antd'
import { useRouter } from 'next/navigation'
import { CheckboxChangeEvent } from 'antd/es/checkbox'

export interface IBrendValue {
    text: string;
    value: string;
}
export interface IBrends{
    values: IBrendValue[]
}


const data: IBrends = {
        values: [
            {
                text: 'Apple',
                value: 'val1'
            },
            {
                text: 'Sumsung',
                value: 'val2'
            },
            {
                text: 'Xiomi',
                value: 'val3'
            },
            {
                text: 'Poco',
                value: 'val4'
            },
            {
                text: 'One Plus',
                value: 'val5'
            },
            {
                text: 'Nothing',
                value: 'val6'
            },
            {
                text: 'Honor',
                value: 'val7'
            },
        ]
}

export default function MarketBrends({searchParams}: Record<'searchParams', any>) {
  const router = useRouter()
  const onChange = (e: CheckboxChangeEvent) => {
    const params = new URLSearchParams()
        Object.keys(searchParams).forEach((value: string) => {
            searchParams[value] && value != 'take' && value != 'skip' ? params.append(value, searchParams[value]) : ''
        })
    const attr = params.getAll('brends').toString().split(',')
    if(e.target.checked){
      if(!attr.includes(e.target.value)){
        params.append(`brends`, e.target.value)
      }
      console.log(attr)
    } else {
        
        params.delete('brends')
        attr.forEach((value)=>{
          if(value != e.target.value){
            params.append(`brends`, value)
          }
        })
    }
    router.push(`/market?${params}`, {scroll: false})
  }
  return (
    <div className='mb-5'>
        <div className='font-title font-semibold text-black mb-3'>Бренд</div>
        <div className='max-h-[120px] overflow-y-auto'>
          {data.values.map((value, index)=>{
            return <Checkbox key={index} onChange={onChange} checked={searchParams?.brends?.toString().split(',').includes(value.value)} value={value.value}>{value.text}</Checkbox>
          })}
        </div>
    </div>
  )
}
