"use client"
import React, {useEffect} from 'react'
import { useRouter } from 'next/router';
import './carousel.css'
import Image from 'next/image';


export default function Carousel({data, setter, active, column, className, small}: any) {
    useEffect(() => {
        const interval = setInterval(() => {
            setter((prevIndex: any) => (prevIndex + 1) % data.length);
        }, 200000);

        return () => clearInterval(interval);
    }, []);

    const handleButtonClick = (index: React.SetStateAction<number>) => {
        setter(index);
    };
    return (
            <div className={`carousel-buttons ${ !small && 'lg:flex-col lg:gap-10'} ${column && 'flex-col gap-10'} ` + className}>
                {data?.map((item: any, index: any) => {
                    return (
                        <button
                            key={index}
                            className={`carousel-button flex items-center gap-3 ${!small && 'lg:!w-fit'} ${active === index ? 'active' : ''} ${column && 'w-full'}`}
                            onClick={() => handleButtonClick(index)}
                            style={column ? {} : {width: `calc(100% / ${data.length})`}}
                        >
                            { item.icon && <Image src={item.icon} width={28} height={28} alt='icon' />}
                            {item.title}
                        </button>
                    )
                })}
            </div>
    )
}
