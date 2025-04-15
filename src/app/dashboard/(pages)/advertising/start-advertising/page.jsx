import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <>
    <div className="rts-navigation-area-breadcrumb pb--10">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 hub1">
            <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
              <Link href={`${baseUrl}dashboard`}>
                <i className="fa-solid fa-arrow-left" /> Go to Seller hub
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <div className="navigator-breadcrumb-wrapper text-center">
              <h3>Advertising</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
              <ul>
                <li>
                   <Link href={`${baseUrl}dashboard/advertising/payment-wallet-summary`}>
                    <i className="fa-solid fa-wallet" /> Wallet
                  </Link>{" "}
                </li>
                <li>
                  <a href="#"> 
                    <Image src={`${baseUrl}front/assets/images/hand_shaking.png`}
                                        alt=''
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        loading='lazy' 
                                        style={{width:"auto", height:"auto"}}
                                        /> 
                                        Help
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19 adver-bg">
      <div className="container">
        <div className="breadcrumb-inner">
          <div className="adver-bg-title">
            <p className="text-white">
              Elevate your potential with tailored solutions designed to maximize
              <br />
              performance and achieve excellence
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="details_page_outer">
      <div className="mt-5">
        <div className="container">
          <div className="row">
            {/* <div class="col-lg-12">
          <div class="stay_informed_heding ads_help_heading">How Ads Help Grow Your Orders:</div>
        </div> */}
            <div className="col-lg-6 col-md-6">
              <div className="boxs_1 adver_boxs adver-box adver-box2">
                <div className="heding_fl">
                  {/* <div><img src="assets/images/adver-icon-01.jpg"></div> */}
                  <div>
                    <h4>Sponsored Ads</h4>
                  </div>
                </div>
                <p>
                  Connect with customers actively searching for products like
                  yours.
                </p>
                <div className="adverbox-btn">
                  <Link href={`${baseUrl}dashboard/advertising/manual-campaign`} >Create Campaign</Link>
                </div>
                <div>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="boxs_1 adver_boxs adver-box adver-box2">
                <div className="heding_fl">
                  {/* <div><img src="assets/images/adver-icon-02.jpg"></div> */}
                  <div>
                    <h4>Display Ads</h4>
                  </div>
                </div>
                <p>
                  Engage customers effortlessly with impactful video and display
                  ads
                </p>
                {/* <ul>
              <li>Festive offers</li>
              <li>Big Billion Days</li>
            </ul>*/}
                <div className="adverbox-btn">
                  <Link href={`${baseUrl}dashboard/advertising/ad-format`}>Get Started</Link>
                </div>
                <div>
                  <Link href="#">Learn More</Link>
                </div>
              </div>
            </div>
            {/* <div class="col-lg-12 text-center mt--20">
          <div class="send"><a href="#">Send your Feedback</a></div>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Page