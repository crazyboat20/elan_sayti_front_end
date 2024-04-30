"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import './menu.css'

const Menu = () => {
  const [menu,setMenu]=useState(false)
  return (
    <>
      <img src="./svgler/menu.svg" width={25} height={25} className="menu-icon" onClick={()=>setMenu(!menu)}/>
      <div className={`menu ${menu?"aciq":"bagli"}`}>
        <Link href="/" className='menu-sehveleri'>Ana səhvə</Link>
        <Link href="/elanlarim" className='menu-sehveleri'>Elanlarım</Link>
      </div>
    </>
  )
}

export default Menu