export interface NavItem {
  id: string
  title: string
  icon?: string
  href: string
  isActive: boolean
  hasSecondaryMenu: boolean
  isSecondaryMenu?: boolean
  isSecondaryGroup?: boolean
  children?: NavItem[]
  disabled?: boolean
  external?: boolean
}
