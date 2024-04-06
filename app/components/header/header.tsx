'use client'
import {useEffect, useState} from 'react'
import {Disclosure} from '@headlessui/react'
import type { MenuProps } from 'antd';
import './style.css'
import { Dropdown } from 'antd';
import {
    Bars3Icon,
    InformationCircleIcon,
    BriefcaseIcon,
    UserIcon,
    QuestionMarkCircleIcon,
    ChatBubbleLeftEllipsisIcon,
    GlobeAltIcon,
    PaperAirplaneIcon
} from '@heroicons/react/24/outline'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";

const products = [
    {name: 'Правила', href: '/policy', icon: InformationCircleIcon},
    {name: 'Наши работы', href: '/portfolio', icon: BriefcaseIcon},
    {name: 'Клиенты', href: '/clients', icon: UserIcon},
    {name: 'Центр помощи', href: '/help', icon: ChatBubbleLeftEllipsisIcon},
    {name: 'Частые вопросы', href: '/questions', icon: QuestionMarkCircleIcon},
]
const shipment = [
    {name: 'Оформить отправление', href: '/shipment', icon: PaperAirplaneIcon},
    {name: 'Где мы работаем', href: '/shipment/network', icon: GlobeAltIcon},
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname();

    useEffect(()=>{
        setMobileMenuOpen(false)
    }, [pathname])
    useEffect(()=>{
        if(mobileMenuOpen){
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }
    }, [mobileMenuOpen])

    const items1: MenuProps['items'] = [
        {
          label: <Link className={`link !text-h-grey ${pathname === '/shipment' ? '!text-black' : ''} hover:text-black flex items-center gap-x-1`} href="/shipment">Оформить отправление</Link>,
          key: '0',
        },
        {
          label: <Link className={`link !text-h-grey ${pathname === '/shipment/network' ? '!text-black' : ''} hover:text-black flex items-center gap-x-1`} href="/shipment/network">Где мы работаем</Link>,
          key: '1',
        }
      ];
      const items2: MenuProps['items'] = [
        {
          label: <Link className={`link !text-h-grey ${pathname === '/policy' ? '!text-black' : ''} hover:text-black flex items-center gap-x-1`} href="/policy">Правила</Link>,
          key: '0',
        },
        {
          label: <Link className={`link !text-h-grey ${pathname === '/portfolio' ? '!text-black' : ''} hover:text-black flex items-center gap-x-1`} href="/portfolio">Наши работы</Link>,
          key: '1',
        },
        {
            label: <Link className={`link !text-h-grey ${pathname === '/clients' ? '!text-black' : ''} hover:text-black flex items-center gap-x-1`} href="/clients">Клиенты</Link>,
            key: '2',
        },
        {
            label: <Link className={`link !text-h-grey ${pathname === '/help' ? '!text-black' : ''} hover:text-black flex items-center gap-x-1`} href="/help">Центр помощи</Link>,
            key: '3',
        },
        {
            label: <Link className={`link !text-h-grey ${pathname === '/questions' ? '!text-black' : ''} hover:text-black flex items-center gap-x-1`} href="/questions">Частые вопросы</Link>,
            key: '4',
        },
        
      ];

    const menuProps1 = {
        items: items1
    }
    const menuProps2 = {
        items: items2
    }

    return (
        <header className="bg-white sticky z-50 top-0 left-0 text-black">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 h-16 lg:px-8" aria-label="Global">
                <div className="flex flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image src="/logo.svg" alt="logo" width={110} height={23}/>
                    </a>
                </div>
                <div className="hidden lg:flex relative z-40" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 relative z-40"
                    
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <div className="flex lg:hidden gap-x-12 text-sm text-h-grey font-semibold leading-6">
                    <Link href="/"
                          className={`link ${pathname === '/' ? 'text-black' : ''} hover:text-black`}>
                        <span>Главная</span>
                    </Link>
                    <Link href="/about"
                          className={`link ${pathname === '/about' ? 'text-black' : ''} hover:text-black`}>
                        <span>О компании</span>
                    </Link>
                    <Link href="/market"
                          className={`link ${pathname === '/market' ? 'text-black' : ''} hover:text-black`}>
                        <span>Маркет</span>
                    </Link>
                    <Dropdown 
                            trigger={['click']}
                            menu={menuProps1}
                            >
                            <div className={`link ${pathname === '/market' ? 'text-black' : ''} hover:text-black flex items-center gap-x-1 cursor-pointer`}>
                            Логистика
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
                            </div>
                    </Dropdown>
                    <Dropdown 
                            trigger={['click']}
                            menu={menuProps2}
                            >
                            <div className={`link ${pathname === '/market' ? 'text-black' : ''} hover:text-black flex items-center gap-x-1 cursor-pointer`}>
                            Информация
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
                            </div>
                    </Dropdown>
                    
                    <Link href="/services"
                          className={`link ${pathname === '/services' ? 'text-black' : ''} hover:text-black`}>
                        <span>Услуги</span>
                    </Link>
                    <Link href="/blog"
                          className={`link ${pathname === '/blog' ? 'text-black' : ''} hover:text-black`}>
                        <span>Блог</span>
                    </Link>
                </div>
                <Link href={'/login'} className="flex flex-1 justify-end lg:hidden">
                    <button className="bg-light-red text-white w-24 h-9 rounded-lg font-semibold text-sm">Войти</button>
                </Link>
            </nav>
            <div className={`max-lg:hidden text-h-grey absolute top-0 pointer-events-none left-0 opacity-0 transition-opacity duration-300 ${mobileMenuOpen && ' pointer-events-auto !opacity-100 !z-[39]'}`}>
                <div className="fixed inset-0 bg-[#00000018]" onClick={()=>{setMobileMenuOpen(false)}}/>
                <div className={`fixed inset-y-0 translate-x-[500px] right-0 transition-transform duration-300 z-10 w-full overflow-y-auto bg-white px-6 py-6 pt-16 max-w-sm ring-1 ring-[#00000030] ${mobileMenuOpen && ' !translate-x-0'}`}>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-1">
                            <div className="space-y-2 py-6">
                                <Link href="/"
                                      className={`link ${pathname === '/' ? 'text-black' : ''} hover:text-black -mx-3 block rounded-lg px-3 py-2`}>
                                    <span>Главная</span>
                                </Link>
                                <Link href="/about"
                                      className={`link ${pathname === '/about' ? 'text-black' : ''} hover:text-black -mx-3 block rounded-lg px-3 py-2`}>
                                    <span>О компании</span>
                                </Link>
                                <Link href="/market"
                                      className={`link ${pathname === '/market' ? 'text-black' : ''} hover:text-black -mx-3 block rounded-lg px-3 py-2`}>
                                    <span>Маркет</span>
                                </Link>
                                <Disclosure as="div" className="-mx-3 text-h-grey">
                                    {({open}) => (
                                        <>
                                            <Disclosure.Button
                                                className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5">
                                                Логистика
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...shipment].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    {({open}) => (
                                        <>
                                            <Disclosure.Button
                                                className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5">
                                                Информация
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link href="/services"
                                      className={`link ${pathname === '/services' ? 'text-black' : ''} hover:text-black -mx-3 block rounded-lg px-3 py-2`}>
                                    <span>Услуги</span>
                                </Link>
                                <Link href="/blog"
                                      className={`link ${pathname === '/blog' ? 'text-black' : ''} hover:text-black -mx-3 block rounded-lg px-3 py-2`}>
                                    <span>Блог</span>
                                </Link>
                            </div>
                            <Link href={'/login'} className="py-6">
                                <button className="bg-light-red text-white w-24 h-9 rounded-lg font-semibold text-sm">Войти</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}