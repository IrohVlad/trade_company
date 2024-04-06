'use client'
import React from 'react'
import {Checkbox } from 'antd'
import { useRouter } from 'next/navigation'
import {IStat} from '../marketStats'
import { CheckboxChangeEvent } from 'antd/es/checkbox'

export default function MarketStat({searchParams, title, values}: IStat & Record<'searchParams', any>) {
  const router = useRouter()
  const onChange = (e: CheckboxChangeEvent) => {
    const params = new URLSearchParams()
        Object.keys(searchParams).forEach((value: string) => {
            searchParams[value] && value != 'take' && value != 'skip' ? params.append(value, searchParams[value]) : ''
        })
    const attr = params.getAll('attributes').toString().split(',')
    if(e.target.checked){
      if(!attr.includes(e.target.value)){
        params.append(`attributes`, e.target.value)
      }
      console.log(attr)
    } else {
        
        params.delete('attributes')
        attr.forEach((value)=>{
          if(value != e.target.value){
            params.append(`attributes`, value)
          }
        })
    }
    router.push(`/market?${params}`, {scroll: false})
  }
  return (
    <div className='mb-5'>
        <div className='font-title font-semibold text-black mb-3'>{title}</div>
        <div className='max-h-[120px] overflow-y-auto'>
          {values.map((value, index)=>{
            return <Checkbox key={index} onChange={onChange} checked={searchParams?.attributes?.toString().split(',').includes(value.value)} value={value.value}>{value.text}</Checkbox>
          })}
        </div>
    </div>
  )
}
