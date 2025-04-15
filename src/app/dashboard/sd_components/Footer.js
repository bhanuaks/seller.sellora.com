import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
  {/* rts footer one area end */}
  <div className="rts-footer-area pt--50 pb--90">
    <div className="container-fluid">
      <div className="container">
        <div className="col-lg-10 offset-lg-1">

          {/* <div className="footer_link">
            <ul>
              <li>
                <Link href="#">About Sellora</Link>
              </li>
              <li>
                <Link href="#">Community</Link>
              </li>
              <li>
                <Link href="#">Announcements</Link>
              </li>
              <li>
                <Link href="#">Seller Information Center</Link>
              </li>
              <li>
                <Link href="#">Policies</Link>
              </li>
              <li>
                <Link href="#">Help &amp; Connect</Link>
              </li>
            </ul>
          </div> */}
          
          <div className="second_footer_link">
            <p>
              Copyright © 2024-2025 Sellora, LLC. All Rights Reserved. 
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  
</>

  )
}

export default Footer