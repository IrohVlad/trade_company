import React from 'react'
import Image from 'next/image'

interface IBlogCard {
    title: string,
    description: string,
    img_url: string,
    tag: string,
    date: string
}

export default function BlogCard({title, description, img_url, tag, date}: IBlogCard) {
  return (
    <article className=''>
                    <div className='h-[410px] 2lg:h-[300px] ss:h-[200px] relative overflow-hidden bg-black'>
                        <Image src={img_url} alt='Blog Card' fill={true} objectPosition='center' objectFit='cover' className='h-full w-full hover:scale-[1.1] hover:opacity-70 transition-all duration-500 will-change-transform' />
                    </div>
                    <div className='mt-[25px] font-title text-[18px] text-[#6C6C6C] font-semibold flex items-center justify-between 2lg:text-sm'>
                        <div className='flex items-center'>
                            <svg className='h-[28px] w-[28px] mr-3 lg:h-[20px] lg:w-[20px] lg:mr-2' width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1_39736" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="2" y="2" width="25" height="25">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.8335 2.33325H26.9795V26.447H2.8335V2.33325Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_1_39736)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.41651 4.08325C6.02851 4.08325 4.58301 5.80525 4.58301 9.83842V18.9373C4.58301 22.6519 6.63401 24.6971 10.358 24.6971H19.437C23.1517 24.6971 25.1968 22.6519 25.1968 18.9373V18.9338L25.2295 13.1413C25.2295 9.17575 23.8692 7.62992 20.375 7.62992H17.0733C15.9662 7.62875 14.9092 7.10025 14.2442 6.21592L13.179 4.79958C12.8442 4.35042 12.3087 4.08442 11.7487 4.08325H9.41651ZM19.437 26.4471H10.358C5.71701 26.4471 2.83301 23.5689 2.83301 18.9373V9.83842C2.83301 4.85792 5.04851 2.33325 9.41651 2.33325H11.7498C12.8593 2.33442 13.9163 2.86409 14.579 3.74959L15.6418 5.16359C15.979 5.61159 16.5145 5.87875 17.0745 5.87992H20.375C24.8807 5.87992 26.9795 8.18875 26.9795 13.1459L26.9468 18.9408C26.9457 23.5701 24.0687 26.4471 19.437 26.4471Z" fill="#6C6C6C"/>
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.0019 18.3315H9.81104C9.32804 18.3315 8.93604 17.9395 8.93604 17.4565C8.93604 16.9735 9.32804 16.5815 9.81104 16.5815H20.0019C20.4849 16.5815 20.8769 16.9735 20.8769 17.4565C20.8769 17.9395 20.4849 18.3315 20.0019 18.3315Z" fill="#6C6C6C"/>
                            </svg>
                            {tag}
                        </div>
                        <div className='flex items-center'>
                            <svg className='h-[28px] w-[28px] mr-3 lg:h-[20px] lg:w-[20px] lg:mr-2' width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1_39736" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="2" y="2" width="25" height="25">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.8335 2.33325H26.9795V26.447H2.8335V2.33325Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_1_39736)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.41651 4.08325C6.02851 4.08325 4.58301 5.80525 4.58301 9.83842V18.9373C4.58301 22.6519 6.63401 24.6971 10.358 24.6971H19.437C23.1517 24.6971 25.1968 22.6519 25.1968 18.9373V18.9338L25.2295 13.1413C25.2295 9.17575 23.8692 7.62992 20.375 7.62992H17.0733C15.9662 7.62875 14.9092 7.10025 14.2442 6.21592L13.179 4.79958C12.8442 4.35042 12.3087 4.08442 11.7487 4.08325H9.41651ZM19.437 26.4471H10.358C5.71701 26.4471 2.83301 23.5689 2.83301 18.9373V9.83842C2.83301 4.85792 5.04851 2.33325 9.41651 2.33325H11.7498C12.8593 2.33442 13.9163 2.86409 14.579 3.74959L15.6418 5.16359C15.979 5.61159 16.5145 5.87875 17.0745 5.87992H20.375C24.8807 5.87992 26.9795 8.18875 26.9795 13.1459L26.9468 18.9408C26.9457 23.5701 24.0687 26.4471 19.437 26.4471Z" fill="#6C6C6C"/>
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.0019 18.3315H9.81104C9.32804 18.3315 8.93604 17.9395 8.93604 17.4565C8.93604 16.9735 9.32804 16.5815 9.81104 16.5815H20.0019C20.4849 16.5815 20.8769 16.9735 20.8769 17.4565C20.8769 17.9395 20.4849 18.3315 20.0019 18.3315Z" fill="#6C6C6C"/>
                            </svg>
                            {date}
                        </div>
                    </div>
                    <h3 className='mt-5 text-[black] lg:text-lg font-title text-[28px] font-bold'>
                        {title}
                    </h3>
                    <p className='mt-4 font-text text-[#6C6C6C]'>
                        {description}
                    </p>
                    <div className='text-[20px] 2lg:text-sm font-semibold text-[black] border-b-[1px] leading-[90%] w-fit mt-5 hover:text-red cursor-pointer transition-colors duration-100'>
                        Читать далее
                    </div>
                </article>
  )
}
