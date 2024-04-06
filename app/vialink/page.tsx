'use client'
import React, {useState} from 'react'
import MarketHero from '../components/marketHero/marketHero'
import Image from 'next/image'
import MyButton from '../components/button/button'
import { Form, Input, Button, ConfigProvider } from 'antd'
import './style.css'

export default function Vialink() {
    const [finish, setFinish] = useState<boolean>(false)
    const [links, setLinks] = useState<Array<string>>([])
    const [form] = Form.useForm()
  return (
    <>
        { !finish && <MarketHero image_url='/market/asian-engineer-manufacturing-industrial-product-2022-09-27-18-03-21-utc 1.png'>
        <div className=' text-white font-title font-semibold text-xl md:text-lg'>
          <div className='mb-6'>Удобный и простой заказ с популярных</div>
          <div>маркетплейсов в Китае по системе ссылок</div>
        </div>
        </MarketHero>}
        <section className='py-6 lg:py-8 '>
        <div className='max-w-c-full m-auto px-7 lg:px-8'>
        <div className=' p-7 lg:px-8 shadow-md rounded-[10px] border-[1px] border-[#D9D9D9] md:border-none md:p-0 md:shadow-none'>
            { !finish && <> <div className=' bg-bg-grey rounded-[15px] px-[35px] py-5 mb-10'>
                <div className='font-title font-semibold text-black mb-4'>Как это работает?</div>
                <p className='text-black font-title text-sm font-medium'>Lorem ipsum dolor sit amet consectetur. Eu pretium blandit viverra ac enim consectetur. Lacus nunc morbi hac felis elementum. Orci nunc sem feugiat vestibulum lacus ipsum in nisi quis. Aliquet dui posuere rhoncus pellentesque.</p>
            </div>
            <div className='grid grid-cols-[1fr_400px] gap-[56px] mb-[100px] lg:grid-cols-1'>
                <div>
                    <ConfigProvider
                        theme={{
                        token: {
                            // Seed Token
                            // colorPrimary: 'gray'
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
                    <Form form={form} className='flex items-center gap-5 mb-[87px] lg:mb-0' onFinish={(values) => {setLinks([...links, values.input]); form.resetFields()}}>
                        <Form.Item rules={[{required: true, min: 5, message: 'Введите ссылку'}]} name='input' className='flex-1'>
                            <Input  />
                        </Form.Item>
                        <Form.Item>
                        <Button type="primary" htmlType="submit" className=' bg-red px-6 py-[8px] h-fit w-fit'>
                                <div className="flex font-semibold text-sm text-[white]"> Добавить</div>
                                </Button>
                        </Form.Item>
                    </Form>
                    </ConfigProvider>
                    <ul className='text-sm font-title font-semibold text-black max-h-[300px] overflow-y-auto'>
                        {links.map((value, index) => {
                            return <li key={index} className='vialink border-b-[1px] border-a-grey py-2 relative flex items-center'><a className='' target='_blank' href={`${value}`}>{value}</a><Image onClick={()=>{setLinks([...links.slice(0, index), ...links.slice(index+1)])}} className='absolute right-[4px] hidden cursor-pointer bg-white' src='/market/trash.svg' height={20} width={20} alt='trash' /></li>
                        })}
                        
                    </ul>
                </div>
                <div className='bg-bg-grey rounded-[15px] p-[15px] flex flex-col lg:hidden'>
                    <div className='font-semibold font-title text-black mb-4'>
                        С кем мы работаем?
                    </div>
                    <div className=' flex flex-wrap gap-2'>
                        <Image height={108} width={187} src='/vialink/image 9.png' alt='' />
                        <Image height={62} width={98} className='max-h-[62px]' src='/vialink/image 11.png' alt='' />
                        <Image height={62} width={98} className='max-h-[62px]' src='/vialink/image 11.png' alt='' />
                        <Image height={108} width={187} src='/vialink/image 9.png' alt='' />
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='text-a-grey'>Заказ номер AY-LOG-123</div>
                <div>
                <MyButton className='px-6 py-[8px] h-fit w-fit' onClick={()=>{setFinish(true)}}>
                    <div className="flex font-semibold text-sm text-[white] "> Создать заказ</div>
                </MyButton>
                </div>
            </div></>}
            {
                finish &&
                <div className=''>
                    <div className='flex flex-col items-center justify-center min-h-[700px]'>
                        <h1 className='font-title text-xl text-black mb-[45px] font-semibold'>Ваш заказ создан!</h1>
                        <div className=' text-a-grey text-lg mb-20'>Заказ номер AY-LOG-123</div>
                        <p className=' text-center font-title text-sm text-black mb-20 font-semibold'>Lorem ipsum dolor sit amet consectetur. Quis eget scelerisque ultrices quis dolor risus feugiat sit nunc. Maecenas non eget vel velit lorem nunc diam tellus. Tristique donec eget molestie eu lectus cursus. Gravida sit aliquam euismod habitasse lacus porttitor. Diam fermentum vitae tortor convallis. Est in facilisi duis id ac erat nibh tincidunt. Euismod cras mauris massa risus tellus. Dolor et diam odio tristique pretium. Suscipit amet gravida neque porttitor elit volutpat arcu non. Tellus fames tempus ipsum proin ultricies felis a mattis tortor. Volutpat ullamcorper ac sed dolor sodales aliquam enim vulputate amet. Est platea in eget ut dignissim nulla. Lorem vitae odio egestas quis vitae sodales. Magna ut urna nibh gravida placerat ultrices. Etiam at duis enim nunc leo elit gravida urna mattis. Pulvinar massa morbi leo elit lacus suspendisse. Mi eget luctus feugiat elementum tellus interdum quisque aliquet. Egestas gravida pharetra in phasellus id. Mollis ac amet eget etiam magna adipiscing. Tellus arcu penatibus turpis turpis lectus massa urna tortor nulla. Nullam in nec fermentum purus ut. Nunc donec eget morbi mollis massa congue tempor eget. Arcu tellus tincidunt arcu neque augue amet amet egestas ac. Interdum parturient orci mattis tincidunt.</p>
                        <MyButton className='px-6 py-[8px] h-fit w-[200px]'>
                        <div className="flex font-semibold text-sm justify-center text-[white] text-center"> К заказу</div>
                        </MyButton>
                    </div>
                </div>
            }
        </div>
        </div>
      </section>
    </>
  )
}
