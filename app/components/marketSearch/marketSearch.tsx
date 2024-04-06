'use client'
import React from 'react'
import { Input, ConfigProvider } from 'antd'
import './style.css'
import { useRouter } from 'next/navigation'

export default function MarketSearch({searchParams}: any) {
  const router = useRouter()
  const onSearch = (value: any) => {
    const params = new URLSearchParams()
        Object.keys(searchParams).forEach((value: string) => {
            searchParams[value] && value != 'take' && value != 'skip' ? params.append(value, searchParams[value]) : ''
        })
    if(value){
        params.set( 'name' , value)
    } else {
        params.delete('name')
    }
    router.push(`/market?${params}`, {scroll: false})
  }
  return (
    <div className='market-search max-w-[535px] w-full md:max-w-[none]'>
          <ConfigProvider
                        theme={{
                        token: {
                            colorPrimary: '#AB3534'
                        },
                        components: {
                            Select: {
                            borderRadius: 0,
                            },
                            Checkbox: {
                            colorPrimary: '#AB3534'
                            }
                        }
                        }}
                    >
              <Input.Search name='search' defaultValue={searchParams.name || ''} onSearch={onSearch} placeholder='Поиск товара' enterButton="Найти"/>
            </ConfigProvider>
    </div>
  )
}
