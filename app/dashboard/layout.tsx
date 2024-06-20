import React from 'react'
import { ReactNode } from 'react'
import Navlinks from './component/Navlinks'

export default function layout({children} : {children: ReactNode}) {
  return (
    <div className='space-y-5'>
        <Navlinks />
        {children}</div>
  )
}
