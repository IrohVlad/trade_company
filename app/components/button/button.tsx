"use client"
import { ReactNode } from "react";

interface IButton {
    children: ReactNode,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default function Button({children, className, onClick}: IButton) {
  return (
    <div onClick={onClick} className={' bg-red hover:bg-light-red transition-colors duration-300 cursor-pointer w-fit rounded-[4px] ' + className}>{children}</div>
  )
}
