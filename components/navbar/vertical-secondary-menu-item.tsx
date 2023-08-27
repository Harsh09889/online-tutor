import { cn } from '@/lib/utils'
import { NavItem } from '@/types/nav'
import Link from 'next/link'
import React from 'react'

type VerticalSecondaryMenuItemProps = {
  item: NavItem
  activeSecondaryChildItem: NavItem | null
}

const VerticalSecondaryMenuItem = ({item, activeSecondaryChildItem}: VerticalSecondaryMenuItemProps) => {
  return (
    <>
      {
        item.isSecondaryGroup && ( !item.children?.length ? null :
          <div className='w-full overflow-hidden'>
            <Link href={item.children[0].href} className={cn('p-0')}>
              {item.title}
            </Link> 
            <div className='flex flex-col pl-4'>
              {
                item.children?.map(childItem => (
                  <VerticalSecondaryMenuItem activeSecondaryChildItem={activeSecondaryChildItem} item={childItem} />
                ))
              }
            </div>

          </div>
        )
      }
      {
        !item.isSecondaryGroup && (
          <Link href={item.href} className={cn('w-full overflow-hidden', activeSecondaryChildItem?.id === item.id && 'bg-red-500')}>
            {item.title}
          </Link>
        )
      }
    </>
  )
}

export default VerticalSecondaryMenuItem