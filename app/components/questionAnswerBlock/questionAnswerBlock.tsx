import React from 'react'
import QuestionAnswer from '../questionAnswer/questionAnswer'
import { IQuestionAnswerProps } from '../questionAnswer/questionAnswer'

interface IQuestionAnswerBlockProps {
    items: Array<IQuestionAnswerProps>
}

export default function QuestionAnswerBlock({items}: IQuestionAnswerBlockProps) {
  return (
    <div className='grid gap-x-16 grid-cols-[1fr_1fr] lg:grid-cols-[1fr]'>
        {
            items?.length && items.map((value, index)=>{
                return (
                    <QuestionAnswer key={index} question={value.question} answer={value.answer} />
                )
            })
        }
    </div>
  )
}
