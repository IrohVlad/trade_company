import React from 'react'
import MarketNavbar from '@/app/components/marketNavbar/marketNavbar'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import AddToBasketButton from './addToBasketButton/addToBasketButton'

const GetProduct = async (params: any) => {
  const response = await fetch(`https://all-trader.ru/api/products/${params.slug}?populate=*`, {next: {revalidate: 3000}}).then((data) => data.json())
  return response
}

export default async function Page({params, searchParams}: any) {
  const product = await GetProduct(params);
  return (
    <>
      <MarketNavbar searchParams={searchParams}/>
      <section className='py-6 lg:py-8'>
        <div className='max-w-c-full m-auto px-7 lg:px-8'>
        <div className=' p-7 lg:px-8 shadow-md rounded-[10px] border-[1px] border-[#D9D9D9] md:border-none md:p-0 md:shadow-none'>
          <div className='grid grid-cols-[500px_1fr] gap-3 min-h-[500px] mb-20 lg:grid-cols-1'>
            <div className='relative lg: min-h-[500px]'>
              <Image fill className='object-contain object-center' src={'https://all-trader.ru' + product?.data?.attributes?.photo?.data?.attributes?.url} alt='Product Image' />
            </div>
            <div>
              <div className='flex items-center text-black font-text font-semibold text-[32px] mb-8'>
                {/* <Image height={45} width={45} className='mr-[10px]' src='/market/apple.svg' alt='brend icon'/> */}
                Sunmight
              </div>
              <h1 className='font-text text-black text-xl font-semibold mb-4 lg:text-[25px]'>
                {product?.data.attributes.title}
              </h1>
              <div className='flex justify-between gap-3'>
                <div>
                  <div className='font-text text-h-grey font-semibold mb-6'>
                    Цена:
                    { product.price ? <div className='font-text text-black text-xl font-semibold md:text-[25px]'>
                      {product.price} <span>P</span>
                    </div> : 
                    <div className='font-text text-black text-xl font-semibold md:text-[25px]'>
                     Договорная
                    </div>}
                  </div>
                  {/* <ProductStats/> */}
                  <AddToBasketButton id={product.data.id} name={product.data.attributes.title} price={product.data.attributes.price} image={product.data.attributes.photo.data.attributes.url} />
                </div>
              
              </div>
              
            </div>
            
          </div>
          <div className='py-[15px] px-[20px] rounded-[7px] bg-bg-grey w-full flex flex-col justify-between 2lg:hidden lg:flex md:hidden'>
                  <div>
                    <div className='text-lg font-text font-semibold text-black mb-2'>Характеристики</div>
                    <div className='text-black font-text text-[16px] leading-[36px]'>
                    <MDXRemote source={product?.data.attributes.description} />
                    {/* {product?.data.attributes.description} */}
                
                    </div>
                  </div>
                  {/* <a className=' text-[#3891E3] font-text font-medium text-sm' href='#stats'>Все характеристики</a> */}
                </div>
        </div>
        </div>
      </section>
    </>
  )
}
