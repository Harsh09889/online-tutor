import { SiteHeader } from '@/components/site-header'
import VerticalPrimaryNav from '@/components/vertical-primary-nav'
import { NavItem } from '@/types/nav'
import React, { useEffect } from 'react'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { useDispatch } from 'react-redux'
import { setSecondaryNavbar } from '@/redux/reducers/secondary-navbar'
import { NAV_ITEMS } from '@/config/app.config'

type SiteLayoutProps = {
  children: React.ReactNode
  params: Params
}

const SiteLayout = ({children, params}: SiteLayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className='flex flex-1 items-stretch'>
        <VerticalPrimaryNav />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
    )
}

export default SiteLayout