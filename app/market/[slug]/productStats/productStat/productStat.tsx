'use client'
import React, {useState} from 'react'
import ProductStatValue from './productStatValue/productStatValue'

export default function ProductStat({title, values}: any) {
    const [state, setState] = useState<number>(0)
  return (
    <li className='mb-5'>
                      <div className=' text-h-grey font-semibold font-text mb-2'>{title}</div>
                      <ul className='text-black font-medium font-text flex gap-2 flex-wrap'>
                        {values.map((value: any, index: any)=>{
                            return <ProductStatValue key={value.id} index={index} state={state} value={value.value} text={value.text} setter={setState} />
                        })}
                      </ul>
    </li>
  )
}
