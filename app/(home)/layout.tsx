import { SiteHeader } from '@/components/site-header'
import React from 'react'

type HomeLayoutProps = {
  children: React.ReactNode
}

const HomeLayout = ({children}: HomeLayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
    </div>
    )
}

export default HomeLayout