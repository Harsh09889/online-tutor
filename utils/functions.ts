import { NavItem } from "@/types/nav"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

export const getActiveChildItem = (primaryNavItem: NavItem, params: Params): NavItem | null =>  {
  const { children } = primaryNavItem
  if (!children) {
    const copiedItem = { ...primaryNavItem }
    Object.keys(params).map(key => {
      copiedItem.href = copiedItem.href.replace(`:${key}`, params[key])
    })
    if (copiedItem.href && copiedItem.href === location.pathname) {
      return copiedItem
    }
    return null
  } else {
    for (const child of children) {
      const x = getActiveChildItem(child, params)
      if (x) {
        return x
      }
    }
    return null
  }
}