import React from 'react'

interface ICountryCardProps {
    country: string;
    cities: Array<string>
}

export default function CountryCard({country, cities}: ICountryCardProps) {
  return (
    <article className=' p-7 transition-shadow duration-300 hover:shadow-md flex-1 min-w-[200px]'>
              <div className=' pb-3 border-red border-b-[1px] text-black font-title font-bold text-[28px] mb-8'>
                {country}
              </div>
              <ul className=' flex flex-col gap-5'>
                {cities.map((value, index)=>{
                    return <li key={index} className='flex pb-3 border-b-[1px] border-[#00000030] items-center before:rounded-full before:h-[7px] before:w-[7px] before:bg-red before:mr-3 text-black font-title font-semibold text-[18px]'>{value}</li>
                })}
            
              </ul>
    </article> 
  )
}
