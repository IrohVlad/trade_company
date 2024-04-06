import React from 'react'
import ProductStat from './productStat/productStat'

const data = [
    {
        title: 'Тип SIM-карты: 2 SIM',
        values: [
            {
                text: '2 SIM',
                id: 1
            },
            {
                text: 'eSIM+SIM',
                id: 2
            }
        ]
    },
    {
        title: 'Встроенная память: 256 гб',
        values: [
            {
                text: '128 гб',
                id: 3
            },
            {
                text: '256 гб',
                id: 4
            }
        ]
    }
]

export default function ProductStats() {
  return (
    <ul className='mb-10'>
        {data.map((value, index)=>{
            return <ProductStat key={index} title={value.title} values={value.values}/>
        })}
    </ul>
  )
}
