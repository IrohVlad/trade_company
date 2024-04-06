'use client'
import Link from 'next/link'
import Image from 'next/image'
import {SetStateAction, useState} from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Код для отправки формы, например, через API

        // Сброс значения поля email после отправки формы
        setEmail('');
    };

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    return (
        <footer className='bg-dark-grey flex flex-col h-96 lg:h-fit px-6 lg:py-6'>
            <div className="max-w-c-full m-auto w-full h-4/5 lg:h-fit flex flex-col justify-between">
                <div className="flex justify-between lg:flex-col">
                    <div className="w-1/2 lg:w-fit lg:mb-10">
                        <Image src="/logo.svg" alt="logo" width={110} height={22}/>
                        <form onSubmit={handleSubmit} className="flex flex-col pt-7">
                            <h3 className="text-white font-semibold text-lg pb-2">Подпишитесь на рассылку</h3>
                            <label htmlFor="email" className="text-base text-t-grey pb-4">Мы будем отправлять вам полезную
                                информацию раз в неделю</label>
                            <div className="flex ss:flex-col ss:gap-4">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Ваш email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                    className="outline-none pl-4 h-12 w-72 ss:w-full rounded-lg mr-4"
                                />
                                <button type="submit"
                                        className="bg-red text-white w-36 h-12 rounded-lg font-semibold text-base">Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-between text-base text-a-grey w-4/12 lg:w-fit lg:mb-10 lg:gap-10 ss:justify-start ss:flex-wrap">
                        <div className="flex flex-col">
                            <h4 className="text-white font-semibold pb-4">Компания</h4>
                            <Link href="about" className="pb-3 hover:text-white"><span>О нас</span></Link>
                            <Link href="about" className="pb-3 hover:text-white"><span>Карьера</span></Link>
                            <Link href="contacts" className="pb-3 hover:text-white"><span>Контакты</span></Link>
                            <Link href="vialink" className="hover:text-white"><span>Заказ по ссылке</span></Link>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-white font-semibold pb-4">Информация</h4>
                            <Link href="policy" className="pb-3 hover:text-white"><span>Правила</span></Link>
                            <Link href="portfolio" className="pb-3 hover:text-white"><span>Наши работы</span></Link>
                            <Link href="clients" className="hover:text-white"><span>Клиенты</span></Link>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-white font-semibold pb-4">Ресурсы</h4>
                            <Link href="/" className="pb-3 hover:text-white"><span>Блог</span></Link>
                            <Link href="help" className="pb-3 hover:text-white"><span>Центр помощи</span></Link>
                            <Link href="questions" className="hover:text-white"><span>Частые вопросы</span></Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between border-t border-a-grey pt-5">
                    <span className="text-t-grey pl-4">© 2023 ASIAFY. Все права защищены.</span>
                    <div className="flex w-32 justify-between pr-4">
                        <Link href="/">
                            <Image src="/footer/vk.svg" alt="Vk" width="24" height="24"/>
                        </Link>
                        <Link href="/">
                            <Image src="/footer/telegram.svg" alt="Telegram" width="24" height="24"/>
                        </Link>
                        <Link href="/">
                            <Image src="/footer/wechat.svg" alt="WeChat" width="24" height="24"/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
