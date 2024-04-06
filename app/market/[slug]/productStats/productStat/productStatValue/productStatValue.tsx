import React from 'react'

interface IProps {
    text: string;
    value: string;
    state: number;
    index: number;
    setter: React.Dispatch<React.SetStateAction<number>>
}

export default function ProductStatValue({text, value, state, index, setter}: IProps) {
  return (
    <li onClick={()=>{setter(index)}} className={`px-5 py-1 border-[1px] rounded transition-colors duration-300 border-h-grey hover:border-red cursor-pointer ${index == state ? 'border-red cursor-default': ''}`}>{text}</li>
  )
}
