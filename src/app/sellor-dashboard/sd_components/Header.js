import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
  {/* rts header area start */}
  <div className="rts-header-one-area-one career-header">
    <div className="rts-header-nav-area-one header--sticky careerheader-sticky">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="nav-and-btn-wrapper">
              <div className="nav-area-bottom-left-header-four career-head">
                {" "}
                <Link
                  href="/sellor-dashboard"
                  className="logo-area"
                >
                  {" "}
                  <img
                    src={`${baseUrl}front/assets/images/logo-01.png`}
                    alt="logo-main"
                    className="seller-page-logo"
                  />{" "}
                </Link>
              </div>
              <div className="nav-area dash_board_top_menu">
                <nav>
                  <ul>
                    {/* <li class="parent"> <Link href="/sellor-dashboard">Home</Link> </li> */}
                    <li className="parent has-dropdown">
                      <Link href="#" className="current3">
                        Listing
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link href="/sellor-dashboard/listing">My Listing</Link>
                        </li>
                        <li>
                          <Link href="/sellor-dashboard/add-catalog">Add Catalog </Link>
                        </li>
                        {/* <li><Link href="#">Image Editing Tracker</Link></li> */}
                        <li>
                          <Link href="/sellor-dashboard/track-approval-requests">
                            Track Approval Requests
                          </Link>
                        </li>
                        <li>
                          <Link href="#">Fulfilment by Sellora</Link>
                        </li>
                        <li>
                          <Link href="#">Sell Globally</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="parent has-dropdown">
                      <Link href="#">Orders</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="/sellor-dashboard/active-orders">Active Orders</Link>
                        </li>
                        <li>
                          <Link href="/sellor-dashboard/returns">Returns</Link>
                        </li>
                        <li>
                          <Link href="#">Cancellations</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="parent has-dropdown">
                      <Link href="#">Advertising</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="#">Promotion</Link>
                        </li>
                        <li>
                          <Link href="#">Campaign</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="parent">
                      {" "}
                      <Link href="#">Store</Link>{" "}
                    </li>
                    <li className="parent has-dropdown">
                      <Link href="#">Growth</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="#">Sellora Insights</Link>
                        </li>
                        <li>
                          <Link href="#">Advertising Recommendation</Link>
                        </li>
                        <li>
                          <Link href="#">Price Recommendations</Link>
                        </li>
                        <li>
                          <Link href="#">Sellora Promotions</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="parent has-dropdown">
                      <Link href="#">Performance</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="#">Ratings &amp; Reviews</Link>
                        </li>
                        <li>
                          <Link href="#">Product Quality</Link>
                        </li>
                        <li>
                          <Link href="#">Returns</Link>
                        </li>
                        <li>
                          <Link href="#">Cancellations</Link>
                        </li>
                        <li>
                          <Link href="#">Growth Central</Link>
                        </li>
                        <li>
                          <Link href="#">Your Seller Tier</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="parent has-dropdown">
                      <Link href="#">Report</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="#">Report centre</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="parent has-dropdown">
                      <Link href="#">Payments</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="#">Payments Overview</Link>
                        </li>
                        <li>
                          <Link href="#">Previous Overview</Link>
                        </li>
                        <li>
                          <Link href="#">Search Order Settlements</Link>
                        </li>
                        <li>
                          <Link href="#">Invoices</Link>
                        </li>
                        <li>
                          <Link href="#">Statements</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="parent has-dropdown">
                      <Link href="#">Partner Services</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="#">All service </Link>
                        </li>
                        <li>
                          <Link href="#">My service</Link>
                        </li>
                        <li>
                          <Link href="#">Help</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="right-btn-area right-btn-area2 header-five">
                <div className="dropdown_login border_1">
                  <li>
                    <i className="country_flag">
                      <img src={`${baseUrl}front/assets/images/united_state.png`} />
                    </i>{" "}
                    United States <i className="fa-solid fa-angle-down" />
                    <div className="dropdown">
                      {" "}
                      <Link className="drop-link" href="#">
                        <i className="country_flag">
                          <img src={`${baseUrl}front/assets/images/united_state.png`} />
                        </i>{" "}
                        United States
                      </Link>{" "}
                      <Link className="drop-link" href="#">
                        <i className="country_flag">
                          <img src={`${baseUrl}front/assets/images/india_flag.png`} />
                        </i>{" "}
                        India
                      </Link>{" "}
                    </div>
                  </li>
                </div>
                <div className="menu_right2">
                  {/* <Link href="#">United States</Link>  */}
                  <Link href="#">
                    Buyer Questions <i className="fa-light fa-bell" />
                  </Link>
                  {/* <Link href="#"><i class="fa-light fa-bell"></i> Aahil Mart </Link>  */}
                </div>
                <div className="dropdown_login ">
                  <li>
                    <i className="fa fa-user user_bg" /> Aahil Mart{" "}
                    <i className="fa-regular fa-ellipsis-vertical doted_l" />
                    <div className="dropdown mr_10_login">
                      {" "}
                      <Link className="drop-link" href="#">
                        Link1
                      </Link>{" "}
                      <Link className="drop-link" href="#">
                        Link2
                      </Link>{" "}
                    </div>
                  </li>
                </div>
              </div>
              {/* button-area end */}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="logo-search-category-wrapper after-md-device-header header-mid-five-call">
              {" "}
              <Link href="index.html" className="logo-area">
                {" "}
                <img
                  src={`${baseUrl}front/assets/images/logo-01.png`}
                  alt="logo-main"
                  className="seller-page-logo"
                />{" "}
              </Link>
              <div className="main-wrapper-action-2 d-flex">
                <div className="accont-wishlist-cart-area-header">
                  <div className="after_login_seller">
                    <i className="fa fa-user" />
                    Aahil Mart
                  </div>
                </div>
                <div className="actions-area">
                  <div className="menu-btn" id="menu-btn">
                    {" "}
                    <svg
                      width={20}
                      height={16}
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y={14} width={20} height={2} fill="#1F1F25" />
                      <rect y={7} width={20} height={2} fill="#1F1F25" />
                      <rect width={20} height={2} fill="#1F1F25" />
                    </svg>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts header area end */}
  {/* rts header area start */}
  {/* header style two */}
  <div id="side-bar" className="side-bar header-two">
    <button className="close-icon-menu">
      <i className="far fa-times" />
    </button>
    <div className="mobile-menu-nav-area tab-nav-btn mt--20">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {/* <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Menu</button> */}
          {/* <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Demo</button> */}
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabIndex={0}
        >
          <div className="mobile-menu-main">
            <nav className="nav-main mainmenu-nav mt--30">
              <ul className="mainmenu metismenu" id="mobile-menu-active">
                <li>
                  {" "}
                  <Link href="/sellor-dashboard" className="main">
                    Home
                  </Link>{" "}
                </li>
                <li className="has-droupdown">
                  {" "}
                  <Link href="#" className="main" aria-expanded="false">
                    Listing
                  </Link>
                  <ul className="submenu mm-collapse">
                    <li>
                      <Link href="my-listing.html" className="mobile-menu-link">
                        My Listing
                      </Link>
                    </li>
                    <li>
                      <Link href="add-catalog.html" className="mobile-menu-link">
                        Add Catalog{" "}
                      </Link>
                    </li>
                    {/* <li><Link href="#" class="mobile-menu-link">Image Editing Tracker</Link></li> */}
                    <li>
                      <Link
                        href="track-approval-requests.html"
                        className="mobile-menu-link"
                      >
                        Track Approval Requests
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Fulfilment by Sellora
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Sell Globally
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <Link href="#" className="main" aria-expanded="false">
                    Orders
                  </Link>
                  <ul className="submenu mm-collapse">
                    <li>
                      <Link href="active-orders.html" className="mobile-menu-link">
                        Active Orders
                      </Link>
                    </li>
                    <li>
                      <Link href="returns.html" className="mobile-menu-link">
                        Returns
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Cancellations
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <Link href="#" className="main" aria-expanded="false">
                    Advertising
                  </Link>
                  <ul className="submenu mm-collapse">
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Promotion
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Campaign
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <Link href="#" className="main">
                    Store
                  </Link>{" "}
                </li>
                <li className="has-dropdown">
                  <Link href="#" className="main" aria-expanded="false">
                    Growth
                  </Link>
                  <ul className="submenu mm-collapse">
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Sellora Insights
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Advertising Recommendation
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        {" "}
                        Price Recommendations
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Sellora Promotions
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link href="#" className="main" aria-expanded="false">
                    Performance
                  </Link>
                  <ul className="submenu mm-collapse">
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Ratings &amp; Reviews
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Product Quality
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Returns
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Cancellations
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Growth Central
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Your Seller Tier
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <Link href="#" className="main" aria-expanded="false">
                    Report
                  </Link>
                  <ul className="submenu mm-collapse">
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Report centre
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <Link href="#" className="main" aria-expanded="false">
                    Payments
                  </Link>
                  <ul className="submenu mm-collapse">
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Payments Overview
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Previous Overview
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Search Order Settlements
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Invoices
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Statements
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <Link href="#" className="main" aria-expanded="false">
                    Partner Services
                  </Link>
                  <ul className="submenu mm-collapse">
                    <li>
                      <Link href="#">All service </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        My service
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mobile-menu-link">
                        Help
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/*  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
  <div class="category-btn category-hover-header menu-category">
    <ul class="category-sub-menu" id="category-active-menu">
      <li> <Link href="#" class="menu-item">
        
        <span>Demo </span> <i class="fa-regular fa-plus"></i> </Link>
        <ul class="submenu mm-collapse">
          <li><Link class="mobile-menu-link" href="#">Demo 1</Link></li>
        </ul>
      </li>
      <li><Link href="#" class="menu-item"><span>Demo </span></Link></li>
      <li><Link href="#" class="menu-item"><span>Demo </span></Link></li>
    </ul>  
  </div>
</div> */}
      </div>
    </div>
  </div>
</>

  )
}

export default Header