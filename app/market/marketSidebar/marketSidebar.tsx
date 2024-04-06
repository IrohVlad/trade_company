'use client'
import React from 'react'
import MarketPriceRange from './marketPriceRange/marketPriceRange'
import MarketFilters from './marketFilters/marketFilters'
import MarketStats from './marketStats/marketStats'
import MarketBrends from './marketBrends/marketBrends'
import { ReadonlyURLSearchParams } from 'next/navigation'

export default function MarketSidebar({searchParams}: Record<'searchParams', ReadonlyURLSearchParams>) {
  return (
    <div className=' sticky top-20 min-h-[400px] h-fit shadow-md border-[1px] border-[#D9D9D9] rounded-[10px] mb-10 px-5 py-5 md:static md:min-h-0'>
            <MarketPriceRange searchParams={searchParams}/>
            <MarketFilters searchParams={searchParams}/>
            <MarketStats searchParams={searchParams}/>
            <MarketBrends searchParams={searchParams}/>
    </div>
  )
}
