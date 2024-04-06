import React from 'react'

interface ILeftCol{
    title: string;
    value: string
}
interface IRightCol{
    value: string
}
interface IShipmentCardProps{
    left_col: Array<ILeftCol>
    right_col: Array<IRightCol>
}

export default function ShipmentCard({left_col, right_col}: IShipmentCardProps) {
  return (
    <article className=' p-7 bg-white'>
                <div className=' flex items-center font-title text-black text-[22px] font-semibold before:h-4 before:w-4 before:bg-red before:rounded-full before:mr-5 pb-5 border-b-[1px] border-[#00000050] mb-8'>Главный офис</div>
                <div className='flex justify-between sm:flex-col'>
                    <ul>
                        {left_col.map((item, index)=>{
                            return (
                                <li key={index} className='mb-5'>
                                    <div className=' text-[#6C6C6C] font-title font-medium text-[18px] mb-3'>
                                        {item.title}
                                    </div>
                                    <div className='text-black font-title font-semibold text-[18px]'>
                                        {item.value}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <div className='pl-6 border-l-[1px] border-[#00000030] sm:pl-0 sm:pt-6 sm:border-none sm:border-[#00000030] sm:border-t-[1px]'>
                        <div className=' text-black font-title font-medium mb-5'>Рабочее время</div>
                        <ul>
                            { right_col.map((item, index)=>{
                                return (
                                    <li key={index} className=' text-black flex items-center font-title font-bold before:rounded-full before:h-[7px] before:w-[7px] before:bg-[#6C6C6C] before:mr-3'>{item.value}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </article>
  )
}
