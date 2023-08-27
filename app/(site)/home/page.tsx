'use client'
import { NAV_ITEMS } from '@/config/app.config'
import { setSecondaryNavbar } from '@/redux/reducers/secondary-navbar'
import { NavItem } from '@/types/nav'
import { useAppDispatch } from '@/utils/hooks/useApp'
import React, { useEffect } from 'react'

interface DashboardProps {
  children: React.ReactNode
}

interface NavHeaderProps {
  title: string
  subtitle: string
}


const NavHeader = ({title, subtitle}: NavHeaderProps) => {
  return <div className='flex flex-col'>
    <h2 className='text-3xl'>
      {title}
    </h2>
    <h4 className='text-xl'>
      {subtitle}
    </h4>
  </div>
}

const Dashboard = ({ children }: DashboardProps) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    let navItems: NavItem[] = [...NAV_ITEMS]
    dispatch(setSecondaryNavbar({items: navItems, header: () => <NavHeader title='Riyadh Hub' subtitle='Hub header' />}))
  }, [])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard