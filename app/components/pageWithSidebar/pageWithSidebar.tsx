import React from 'react'
import ServiceSidebar from '../serviceSidebar/serviceSidebar'

interface IPageWithSidebarProps {
    children?: React.ReactNode
}

export default function PageWithSidebar({children}: IPageWithSidebarProps) {
  return (

    <div className=" max-w-c-full m-auto grid grid-cols-[345px_1fr] mt-[120px] lg:mt-0 relative p-6 lg:px-8 lg:grid-cols-[1fr] ">
        <div>
            <ServiceSidebar/>
        </div>
        <div className="ml-[95px] lg:m-0">
            {children}
        </div>
    </div>

  )
}
