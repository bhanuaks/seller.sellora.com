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
            <h3>Discount Coupon</h3>
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
                  loading='lazy'
                  style={{width:"auto", height:"auto"}}
                  /> Help
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="details_page_outer">
    <div className="container">
      <div className="table-responsive pb--50">
        <table
          className="table table-bordered table-bordered2 table-striped table-v-align-3"
          style={{ marginTop: 20 }}
        >
          <thead className="table__head">
            <tr className="winner__table">
              <th colSpan={10}>
                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <div className="table_menu">
                      <ul>
                        <li>
                          <a href="#" className="active">
                            All Offers
                          </a>
                        </li>
                        <li>
                          <a href="#">Your Offers</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="searchCam position-relative">
                      <form role="search" className="sr-input-func col-lg-auto">
                        <a href="#">
                          <i className="fa fa-search" />
                        </a>
                        <input
                          type="text"
                          placeholder="Search product by offer id"
                          className="search-int form-control"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="ongoing_034">
            <span>Ongoing</span>
          </div>
          <div className="ongoing_outer">
            <div className="ongoing_header_dfdsf">
              <ul>
                <li>
                  Extra 5% Off <span>5% off</span>
                </li>
              </ul>
            </div>
            <div className="list_3488">
              <ul>
                <li>Offer ID: nb:mp:00b7d12b06</li>
                <li>Benchmark Price Discount</li>
              </ul>
            </div>
            <div className="list_3488">
              <ul>
                <li>Starts on: Mon, 13 Jan 2025 (12:00 AM)</li>
                <li>Ends on: Fri, 31 Jan 2025 (11:59 PM)</li>
              </ul>
            </div>
            <div className="apply_e45428973893789">
              <Link href={`${baseUrl}dashboard/growth/discout-apply`}>Apply</Link>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="ongoing_034">
            <span>Ongoing</span>
          </div>
          <div className="ongoing_outer">
            <div className="ongoing_header_dfdsf">
              <ul>
                <li>
                  Extra 10% Off <span>10% off</span>
                </li>
              </ul>
            </div>
            <div className="list_3488">
              <ul>
                <li>Offer ID: nb:mp:00b7d12b06</li>
                <li>Benchmark Price Discount</li>
              </ul>
            </div>
            <div className="list_3488">
              <ul>
                <li>Starts on: Mon, 13 Jan 2025 (12:00 AM)</li>
                <li>Ends on: Fri, 31 Jan 2025 (11:59 PM)</li>
              </ul>
            </div>
            <div className="apply_e45428973893789">
              <Link href={`${baseUrl}dashboard/growth/discout-apply`}>Apply</Link>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="ongoing_034">
            <span>Ongoing</span>
          </div>
          <div className="ongoing_outer">
            <div className="ongoing_header_dfdsf">
              <ul>
                <li>
                  Extra 15% Off <span>15% off</span>
                </li>
              </ul>
            </div>
            <div className="list_3488">
              <ul>
                <li>Offer ID: nb:mp:00b7d12b06</li>
                <li>Benchmark Price Discount</li>
              </ul>
            </div>
            <div className="list_3488">
              <ul>
                <li>Starts on: Mon, 13 Jan 2025 (12:00 AM)</li>
                <li>Ends on: Fri, 31 Jan 2025 (11:59 PM)</li>
              </ul>
            </div>
            <div className="apply_e45428973893789">
              <Link href={`${baseUrl}dashboard/growth/discout-apply`}>Apply</Link>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="ongoing_034">
            <span>Ongoing</span>
          </div>
          <div className="ongoing_outer">
            <div className="ongoing_header_dfdsf">
              <ul>
                <li>
                  Extra 20% Off <span>20% off</span>
                </li>
              </ul>
            </div>
            <div className="list_3488">
              <ul>
                <li>Offer ID: nb:mp:00b7d12b06</li>
                <li>Benchmark Price Discount</li>
              </ul>
            </div>
            <div className="list_3488">
              <ul>
                <li>Starts on: Mon, 13 Jan 2025 (12:00 AM)</li>
                <li>Ends on: Fri, 31 Jan 2025 (11:59 PM)</li>
              </ul>
            </div>
            <div className="apply_e45428973893789">
              <Link href={`${baseUrl}dashboard/growth/discout-apply`}>Apply</Link>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Page