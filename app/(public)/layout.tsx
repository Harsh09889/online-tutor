import React from 'react'

interface PublicLayoutProps {
  children: React.ReactNode
}

const PublicLayout = ({children}: PublicLayoutProps) => {
  return (
    <div>
      <h2>
        PublicLayout
      </h2>
      <div>
        {children}
      </div>
    </div>
  )
}

export default PublicLayout