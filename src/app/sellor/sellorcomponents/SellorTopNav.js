"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SellorTopNav() {
    const currentUrl =  usePathname()
  
  return (
    <ul className="mainmenu metismenu" id="mobile-menu-active">
    <li className="parent">
      {" "}
      <Link href="/sellor/sell-online" className={currentUrl=="/sellor/sell-online"?"current3":''}> Sell Online</Link>{" "}
    </li>
    <li className="parent">
      <Link href="/sellor/fees-n-commission" className={currentUrl=="/sellor/fees-n-commission"?"current3":''} >Fees &amp; Commission</Link>
    </li>
    <li className="parent">
      <Link href="/sellor/grow" className={currentUrl=="/sellor/grow"?"current3":''} >Grow</Link>
    </li>
    <li className="parent">
      <Link href="/sellor/learn" className={currentUrl=="/sellor/learn"?"current3":''} >Learn</Link>
    </li>
  </ul>
  )
}

export default SellorTopNav