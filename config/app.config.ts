import nextIcon from '@/public/next.svg'
import { NavItem } from '@/types/nav'
export const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    title: "Home",
    icon: nextIcon,
    hasSecondaryMenu: false,
    href: '/home',
    isActive: false
  },
]