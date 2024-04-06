'use client'
import React from 'react'
import MarketSearch from '../marketSearch/marketSearch'
import Link from 'next/link'
import { TreeSelect } from 'antd'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setBasket } from '@/app/redux/slices/basketSlice'
import { RootState } from '@/app/redux/store'
import './style.css'

const options = [
  {
    value: 'wheel',
    title: 'Круги',
    // icon:  <DevicePhoneMobileIcon className='w-6 h-6'/>,
    children: [
      {
        value: 'wheel ceramic',
        label: 'Керамические',
        
      },
      {
        value: 'wheel corundum',
        label: 'Коорундовые',
        
      },
    ],
  },
  {
    value: 'belt',
    title: 'Ленты',
    children: [
      {
        value: 'belt ceramic',
        title: 'Керамические',
        children: [
          {
            value: 'belt ceramic 140x230',
            label: '140x230',
          },
          {
            value: 'belt ceramic 114x25',
            label: '114x25',
          },
          {
            value: 'belt ceramic 130x170',
            label: '130x170',
          },
          {
            value: 'belt ceramic 100x610',
            label: '100x610',
          },
          {
            value: 'belt ceramic 75x533',
            label: '75x533',
          },
          {
            value: 'belt ceramic 75x457',
            label: '75x457',
          },
          {
            value: 'belt ceramic 230x280',
            label: '230x280',
          },
        ]
      },
      {
        value: 'belt corundum',
        title: 'Керамические',
        children: [
          {
            value: 'belt corundum 140x230',
            label: '140x230',
          },
          {
            value: 'belt corundum 114x25',
            label: '114x25',
          },
          {
            value: 'belt corundum 130x170',
            label: '130x170',
          },
          {
            value: 'belt corundum 100x610',
            label: '100x610',
          },
          {
            value: 'belt corundum 75x533',
            label: '75x533',
          },
          {
            value: 'belt corundum 75x457',
            label: '75x457',
          },
          {
            value: 'belt corundum 230x280',
            label: '230x280',
          },
        ]
      },
    ],
  },
  {
    value: 'sponge',
    title: 'Губки',
  },
  {
    value: 'other',
    title: 'Доп'
  },
  
];




export default function MarketNavbar({searchParams}: Record<'searchParams', any>) {
  const router = useRouter()
  const basket = useSelector((state: RootState)=> state.basket.value)
  const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(setBasket(localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket') as any) : []))
    },[])
  const CategoryChange = (value: string) => {
    const params = new URLSearchParams()
        Object.keys(searchParams).forEach((value: string) => {
            searchParams[value] && value != 'take' && value != 'skip' ? params.append(value, searchParams[value]) : ''
        })
      if(value){
        params.set('category' , value)
      } else {
        params.delete('category')
      }
    router.push(`/market?${params}`, {scroll: false})
  }
  return (
    <section className='py-6 lg:py-8 shadow-md border-bg-grey '>
        <div className='max-w-c-full m-auto px-6 lg:px-8'>
          <div className='flex items-center gap-[35px] justify-between'>
            <TreeSelect onChange={CategoryChange} defaultValue={searchParams.category} treeIcon={true} allowClear={true} placeholder="Категории" treeData={options} dropdownStyle={{ maxHeight: 400, minWidth: 250, width: 'fit-content', overflowY: 'auto', }} style={{boxShadow: 'none', maxWidth: '150px', width: '100%'}}/>

            <div className='market-search max-w-[535px] w-full md:!hidden'>
            <MarketSearch searchParams={searchParams}/>
            </div>
            <Link href={'/basket'} className='relative flex flex-col items-center transition-colors duration-300 text-h-grey hover:text-a-grey cursor-pointer'>

              <svg className='md:w-8 md:h-8' height="20px" version="1.1" viewBox="0 0 20 20" width="20px" xmlns="http://www.w3.org/2000/svg"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="currentColor" id="Core" transform="translate(-212.000000, -422.000000)"><g id="shopping-cart" transform="translate(212.000000, 422.000000)"><path d="M6,16 C4.9,16 4,16.9 4,18 C4,19.1 4.9,20 6,20 C7.1,20 8,19.1 8,18 C8,16.9 7.1,16 6,16 L6,16 Z M0,0 L0,2 L2,2 L5.6,9.6 L4.2,12 C4.1,12.3 4,12.7 4,13 C4,14.1 4.9,15 6,15 L18,15 L18,13 L6.4,13 C6.3,13 6.2,12.9 6.2,12.8 L6.2,12.7 L7.1,11 L14.5,11 C15.3,11 15.9,10.6 16.2,10 L19.8,3.5 C20,3.3 20,3.2 20,3 C20,2.4 19.6,2 19,2 L4.2,2 L3.3,0 L0,0 L0,0 Z M16,16 C14.9,16 14,16.9 14,18 C14,19.1 14.9,20 16,20 C17.1,20 18,19.1 18,18 C18,16.9 17.1,16 16,16 L16,16 Z" id="Shape"/></g></g></g></svg>
              <div className='font-title font-semibold md:hidden'>
              Корзина
              </div>
              { basket.length > 0 && <div className='text-white bg-red font-text font-semibold p-[6px] leading-[7px] rounded-full absolute top-[-3px] right-[-3px] text-[12px] border-[2px] border-white'>{ basket.reduce((sum: any, value: any)=> sum + value.amount, 0)}</div>}
            </Link>
          </div>
          

          <div className='hidden market-search w-full md:block mt-5'>
            <MarketSearch searchParams={searchParams}/>
          </div>

          
        </div>
      </section>
  )
}
