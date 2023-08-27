'use client'
import { cn } from "@/lib/utils"
import { getActiveChildItem } from "@/utils/functions"
import Image from "next/image"
import { useParams, usePathname } from "next/navigation"
import { useEffect } from "react"
import nextIcon from '@/public/next.svg'
import { NavItem } from "@/types/nav"
import Link from "next/link"

type VerticalPrimaryMenuItemProps = {
  item: NavItem
  activeItem: NavItem | null
  setActiveMenuItem: Function
  setActiveSecondaryItem: Function
}

function getFirstVisibleLink(navitem: NavItem): null | NavItem {
  if (!navitem.children?.length && !navitem.isSecondaryGroup && navitem.href) return navitem
  let ans = null
  if (navitem?.children) {
    for (const child of navitem.children) {
      ans = getFirstVisibleLink(child)
      if (ans) return ans
    }
  }
  return ans
}

function VerticalPrimaryMenuItem({ item, activeItem, setActiveMenuItem, setActiveSecondaryItem }: VerticalPrimaryMenuItemProps) {
  const pathname = usePathname()
  const params = useParams()
  const href = item.children ? getFirstVisibleLink(item)?.href : item.href

  console.log({href, returnedItem: getFirstVisibleLink(item)})

  useEffect(() => {
    const activeChildItem = getActiveChildItem(item, params)
    if (activeChildItem) {
      setActiveMenuItem(item)
      setActiveSecondaryItem(activeChildItem)
    } else {
      if (href === location.pathname) {
        setActiveMenuItem(item)
      }
    }
  }, [pathname])

  return (
    <li key={item.id} className="w-full">
      <Link href={href ? href : item.href}>
        <div className={cn("bg-red-300 p-2", activeItem?.id === item.id && 'bg-green-300')}>
          <div className="relative aspect-square w-full">
            <Image fill src={item.icon || nextIcon} alt={`${item.title}-icon`} />
          </div>
        </div>
      </Link>
    </li>
  )
}
export default VerticalPrimaryMenuItem