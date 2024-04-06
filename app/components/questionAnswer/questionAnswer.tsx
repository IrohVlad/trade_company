'use client'
import React, {useState} from 'react'

export interface IQuestionAnswerProps {
    question: string;
    answer: string;
}

export default function QuestionAnswer({question, answer}: IQuestionAnswerProps) {
    const [state, setState] = useState(false)
  return (
    <article className='py-7 border-b-[1px] border-[#00000050] transition-all duration-300'>
              <div className='flex gap-3 items-center justify-between'>
                <div className='text-black flex items-center font-title font-semibold text-lg before:h-2 before:w-2 before:min-h-2 before:min-w-2 before:bg-red before:block before:mr-4 before:rounded-full'>
                  {question}
                </div>
                <svg onClick={()=>{ setState((prev)=> !prev)}} className=' cursor-pointer min-h-8 min-w-8' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill={state ? "#F8F8F8" : "#AB3534"}/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.9995 21C15.5308 21 15.1504 20.6193 15.1504 20.1503V11.8497C15.1504 11.3807 15.5308 11 15.9995 11C16.4682 11 16.8486 11.3807 16.8486 11.8497V20.1503C16.8486 20.6193 16.4682 21 15.9995 21Z" fill={ state ? "#F8F8F8" : "white"}/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.1509 16.8487H11.8491C11.3793 16.8487 11 16.4681 11 15.9991C11 15.5301 11.3793 15.1494 11.8491 15.1494H20.1509C20.6196 15.1494 21 15.5301 21 15.9991C21 16.4681 20.6196 16.8487 20.1509 16.8487Z" fill={ state ? "#6C6C6C" : "white"}/>
                </svg>

              </div>
              <div className={` font-text transition-all duration-300 text-h-grey px-6 max-h-0 opacity-0 ${state && 'opacity-100 !max-h-[1200px]'}`}>
                {answer}
              </div>
    </article>
  )
}
