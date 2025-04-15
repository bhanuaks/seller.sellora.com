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
        <div className="col-lg-4 col-md-4 hub1">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            {/* <a href="#"><i class="fa-solid fa-arrow-left"></i> Go to Seller hub</a> */}
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="navigator-breadcrumb-wrapper text-center">
            <h3>Sale Events</h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              {/* <li><a href="#"><i class="fa-solid fa-wallet"></i> Wallet</a> </li> */}
              <li>
                <a href="#">
                    
                  <Image src={`${baseUrl}front/assets/images/hand_shaking.png`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  style={{width:"auto", height:"auto"}} /> 
                  Help
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="pt--20 pb--30">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="sale_tab">
            <ul>
              <li>
                <Link href={`${baseUrl}dashboard/growth/sale-events`} className="active22">
                  Upcoming
                </Link>
              </li>
              <li>
                <Link href="#">Active</Link>
              </li>
              <li>
                <Link href="#">Expired</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="upcoming_event">
            <div className="d-flex align-items-center">
              {/* black_friday christmas_sale */}
              <div className="_immg_934">
              <Image src={`${baseUrl}front/assets/images/winter.jpg`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  style={{width:"auto", height:"auto"}} />  
              </div>
              <div className="_wier_heading_df">
                <h2>Winter Wonderland Sale</h2>
                <p>Open for participation Last day: 08 Jan</p>
              </div>
            </div>
            <div className="list_34847">
              <ul>
                <li>
                <Image src={`${baseUrl}front/assets/images/cart_01.jpg`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  style={{width:"auto", height:"auto"}} />   
                  More Orders
                </li>
                <li>
                <Image src={`${baseUrl}front/assets/images/visibility.jpg`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  style={{width:"auto", height:"auto"}} />   
                  More Visibility
                </li>
                <li>
                <Image src={`${baseUrl}front/assets/images/shoppers.jpg`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  style={{width:"auto", height:"auto"}} />   
                  More Shoppers
                </li>
              </ul>
              <div className="clearfix" />
            </div>
            <div className="apply_button_e4437983">
               
              <Link href={`${baseUrl}dashboard/growth/winter-wonderland-sale`}>Apply</Link> 
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="upcoming_event">
            <div className="d-flex align-items-center">
              <div className="_immg_934">
              <Image src={`${baseUrl}front/assets/images/black_friday.jpg`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  style={{width:"auto", height:"auto"}} />   
              </div>
              <div className="_wier_heading_df">
                <h2>Black Friday Fiesta</h2>
                <p>Open for participation Last day: 08 Nav</p>
              </div>
            </div>
            <div className="list_34847">
              <ul>
                <li>
                <Image src={`${baseUrl}front/assets/images/cart_01.jpg`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  style={{width:"auto", height:"auto"}} />   
                  More Orders
                </li>
                <li>
                <Image src={`${baseUrl}front/assets/images/visibility.jpg`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  style={{width:"auto", height:"auto"}} />   
                  More Visibility
                </li>
                <li>
                <Image src={`${baseUrl}front/assets/images/shoppers.jpg`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  style={{width:"auto", height:"auto"}} />   
                  More Shoppers
                </li>
              </ul>
              <div className="clearfix" />
            </div>
            <div className="apply_button_e4437983">
              {" "}
              <a href="#">Apply</a>{" "}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="upcoming_event">
            <div className="d-flex align-items-center">
              <div className="_immg_934">
              <Image src={`${baseUrl}front/assets/images/christmas_sale.jpg`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  style={{width:"auto", height:"auto"}} />   
              </div>
              <div className="_wier_heading_df">
                <h2>Christmas Sale</h2>
                <p>Open for participation Last day: 25 Dec</p>
              </div>
            </div>
            <div className="list_34847">
              <ul>
                <li>
                <Image src={`${baseUrl}front/assets/images/cart_01.jpg`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  style={{width:"auto", height:"auto"}} />   
                  More Orders
                </li>
                <li>
                <Image src={`${baseUrl}front/assets/images/visibility.jpg`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  style={{width:"auto", height:"auto"}} />   
                  More Visibility
                </li>
                <li>
                <Image src={`${baseUrl}front/assets/images/shoppers.jpg`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  style={{width:"auto", height:"auto"}} />   
                  More Shoppers
                </li>
              </ul>
              <div className="clearfix" />
            </div>
            <div className="apply_button_e4437983">
              {" "}
              <a href="#">Apply</a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Page