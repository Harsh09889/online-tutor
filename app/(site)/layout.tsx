import { SiteHeader } from '@/components/site-header'
import React from 'react'

type SiteLayoutProps = {
  children: React.ReactNode
}

const SiteLayout = ({children}: SiteLayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
    </div>
    )
}

export default SiteLayout