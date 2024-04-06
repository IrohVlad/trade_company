import React from 'react'
import Form from '../../components/form/form'

export default function FormSection() {
  return (
    <section className='w-full'>
        <div className='w-full h-screen max-w-c-full m-auto flex flex-col items-center justify-center p-6 lg:px-10 2lg:h-fit 2lg:items-start'>
            <Form/>
        </div>
    </section>
  )
}