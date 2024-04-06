'use client'
import React, {useState, useEffect} from 'react'
import {Slider, InputNumber, InputNumberProps } from 'antd'
import { useRouter } from 'next/navigation'

export default function MarketPriceRange({searchParams}: any) {
    const router = useRouter()
    const [ range, setRange] = useState([ +searchParams.priceLow || 0, +searchParams.priceHigh || 10000000])
    useEffect(()=>{
        const params = new URLSearchParams()
        Object.keys(searchParams).forEach((value: string) => {
            searchParams[value] && value != 'take' && value != 'skip' ? params.append(value, searchParams[value]) : ''
        })
        params.set('priceLow', String(range[0]))
        params.set('priceHigh', String(range[1]))
        router.push(`/market?${params}`, {scroll: false})
    },[range])
  return (
    <>
        <div className='flex justify-between'>
                <InputNumber min={0} max={17000000} onChange={(value: number | null)=>{if(isNaN(Number(value)) || typeof value !== 'number'){ return }else{ setRange([value, range[1]])}}} value={typeof range[0] === 'number' ? range[0] : 0}/>
                <InputNumber min={0} max={17000000} onChange={(value: number | null)=>{if(isNaN(Number(value)) || typeof value !== 'number'){ return }else{setRange([range[0], value])}}} value={typeof range[1] === 'number' ? range[1] : 0}/>
            </div>
            <Slider min={0} max={17000000} step={1} value={[range[0], range[1]]} onChange={setRange} range={{ draggableTrack: true }}/> 
    </>
  )
}
