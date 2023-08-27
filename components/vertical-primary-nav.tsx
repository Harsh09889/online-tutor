"use client"

import React, { useEffect, useState } from "react"
import { setSecondaryNavbar } from "@/redux/reducers/secondary-navbar"
import { RootState } from "@/redux/store"
import { useAppDispatch, useAppSelector } from "@/utils/hooks/useApp"

import { NavItem } from "@/types/nav"
import { NAV_ITEMS } from "@/config/app.config"
import { cn } from "@/lib/utils"

import VerticalPrimaryMenuItem from "./navbar/vertical-primary-menu-item"
import VerticalSecondaryMenuItem from "./navbar/vertical-secondary-menu-item"

type VerticalPrimaryNavProps = {}

const VerticalPrimaryNav = ({}: VerticalPrimaryNavProps) => {
  const [activeMenuItem, setActiveMenuItem] = useState<null | NavItem>(null)
  const [activeSecondaryItem, setActiveSecondaryItem] = useState<null | NavItem>(null)
  const [secondaryMenuState, setSecondaryMenuState] = useState<{
    collapsed: boolean
  }>({ collapsed: false })
  const dispatch = useAppDispatch()
  const {
    items: secondaryNavItems,
    header: SecondaryNavHeader,
    headerProps,
  } = useAppSelector((state: RootState) => state.secondaryMenu)

  useEffect(() => {
    dispatch(setSecondaryNavbar({ items: NAV_ITEMS }))
  }, [dispatch])

  return (
    <div className="flex">
      <ul className="sticky top-[var(--site-header-height)] flex max-h-[calc(100vh-var(--site-header-height))] w-20 flex-col items-center gap-4 bg-slate-200 p-4">
        {secondaryNavItems.map((item) => (
          <VerticalPrimaryMenuItem
            key={item.id}
            item={item}
            activeItem={activeMenuItem}
            setActiveMenuItem={setActiveMenuItem}
            setActiveSecondaryItem={setActiveSecondaryItem}
          />
        ))}
      </ul>
      {activeMenuItem?.hasSecondaryMenu && activeMenuItem.children?.length && (
        <>
          <div
            onClick={() =>
              setSecondaryMenuState((p) => ({ collapsed: !p.collapsed }))
            }
            className={cn(
              "sticky top-[var(--site-header-height)] flex max-h-[calc(100vh-var(--site-header-height))] w-60 flex-col items-center gap-4 overflow-hidden bg-blue-200 p-4 transition-all duration-700 ",
              secondaryMenuState.collapsed
                ? "top-0 w-3 bg-green-400 px-0"
                : "bg-yellow-400"
            )}
          >
            <div className={cn("w-52 transition-all duration-700", secondaryMenuState.collapsed && 'opacity-0')}>
              {SecondaryNavHeader && <SecondaryNavHeader {...headerProps} />}
              {activeMenuItem.children.map((item) => (
                <VerticalSecondaryMenuItem item={item} activeSecondaryChildItem={activeSecondaryItem} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default VerticalPrimaryNav
