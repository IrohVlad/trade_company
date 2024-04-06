'use client'
import React from 'react'
import { Pagination } from 'antd'
import { useRouter } from 'next/navigation'

export default function MarketPaginator({searchParams, total}: any) {
    const router = useRouter()
    const SetPage = (page: any) => {
        const params = new URLSearchParams()
              Object.keys(searchParams).forEach((value: string) => {
                  searchParams[value] && value != 'take' && value != 'skip' ? params.append(value, searchParams[value]) : ''
              })
              params.set('page', page)
              router.push(`/market?${params}`)
      }
  return (
    <section className='py-6 lg:py-8'>
        <div className='max-w-c-full m-auto px-6 lg:px-8 flex justify-center'>
          <Pagination responsive={true} total={Math.ceil(total)} pageSize={30} showSizeChanger={false} onChange={SetPage} current={+searchParams.page || 1} />
        </div>
      </section>
  )
}
