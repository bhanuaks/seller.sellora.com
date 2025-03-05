"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Sidebar({sellor=null}) {
  const pathname = usePathname();
  
  return (
    <div className="nav_outer">
            <ul>
              <li>
                <Link href="/sellor/al/contact-details" className={`${pathname === "/sellor/al/contact-details" ? 'active_current' : ''}`}>
                  Contact Details <i className={`fa fa-check ${sellor && sellor.complete_step >= 1 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              {/* <li>
                <Link href="/sellor/al/login-details" className={`${pathname === "/sellor/al/login-details" ? 'active_current' : ''}`}>
                  Login Details <i className={`fa fa-check ${pathname === "/sellor/al/login-details" ? 'active_current2' : ''}`} />
                </Link>
              </li> */}

              {/* <li>
                <Link href="/sellor/al/category" className={`${pathname === "/sellor/al/category" ? 'active_current' : ''}`}>
                  Category <i className={`fa fa-check `} />
                </Link>
              </li> */}


              <li>
                <Link href="/sellor/al/display-information" className={`${pathname === "/sellor/al/display-information" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 1)  ? '' : 'disabled'}` } >
                  Display Information <i className={`fa fa-check ${sellor && sellor.complete_step >= 2 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              <li>
                <Link href="/sellor/al/pickup-address" className={`${pathname === "/sellor/al/pickup-address" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 2)  ? '' : 'disabled'}`}>
                  Pick up Address <i className={`fa fa-check ${sellor && sellor.complete_step >= 3 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              <li>
                <Link href="/sellor/al/return-address" className={`${pathname === "/sellor/al/return-address" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 3)  ? '' : 'disabled'}`}>
                  Return Address <i className={`fa fa-check ${sellor && sellor.complete_step >= 4 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              <li>
                <Link href="/sellor/al/business-details" className={`${pathname === "/sellor/al/business-details" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 4) ? '' : 'disabled'}`}>
                  Business Details <i className={`fa fa-check ${sellor && sellor.complete_step >= 5 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              <li>
                <Link href="/sellor/al/tax-information" className={`${pathname === "/sellor/al/tax-information" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 5) ? '' : 'disabled'}`}>
                  Tax Information <i className={`fa fa-check ${sellor && sellor.complete_step >= 6 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              <li>
                <Link href="/sellor/al/shipping-setting" className={`${pathname === "/sellor/al/shipping-setting" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 6) ? '' : 'disabled'}`}>
                  Shipping Setting <i className={`fa fa-check ${sellor && sellor.complete_step >= 7 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              <li>
                <Link href="/sellor/al/bank-account-information" className={`${pathname === "/sellor/al/bank-account-information" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 7) ? '' : 'disabled'}`}>
                  Bank Account Information <i className={`fa fa-check ${sellor && sellor.complete_step >= 8 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              <li>
                <Link href="/sellor/al/payment-information" className={`${pathname === "/sellor/al/payment-information" ? 'active_current' : ''}  ${(sellor &&  sellor.complete_step >= 8)  ? '' : 'disabled'}`}>
                  Payment Information <i className={`fa fa-check ${sellor && sellor.complete_step >= 9 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              <li>
                <Link href="/sellor/al/listing" className={`${pathname === "/sellor/al/listing" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 9)   ? '' : 'disabled'}`}>
                  Listing <i className={`fa fa-check ${sellor && sellor.complete_step >= 10 ? 'active_current2' : ''}`} />
                </Link>
              </li>
            </ul>
            <Link href="/">
              <div className="activate">Activate</div>
            </Link>
          </div>
  )
}

export default Sidebar