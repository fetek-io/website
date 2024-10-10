import './style.sass'

import { Layout as AntdLayout } from 'antd'
import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <AntdLayout className='fetek-layout relative bg-slate-50'>
      <Header />
      {children}
      <Footer />
    </AntdLayout>
  )
}
