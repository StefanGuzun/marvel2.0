import React from 'react'

export default function Container ({children}) {
  return (
    <main className='container' style={{display: "flex", alignItems: "center", flexDirection: "column"}}>{children}</main>
  )
}
