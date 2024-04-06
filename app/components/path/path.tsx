import React from 'react'
import { Breadcrumb } from 'antd';
import './style.css'

interface IRoute{
    title: string,
    href: string
  }
interface IRathProps{
    routes: Array<IRoute>,
    className?: string,
    black?: boolean;
}

export default function Path({routes, black, className}: IRathProps) {
  return (
    <div className={className}>
        <Breadcrumb className={black ? '' : 'white-bread'} separator='>' items={routes}/>
    </div>
  )
}