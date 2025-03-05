import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
  <section className="page-title jobs-bg">
    <div className="container-fluid">
      <div className="page-title-wrap">
        <div className="row align-items-center">
          <div className="col col-md-12 col-12">
            <div className="breadcumb-wrap">
              <h2 className="about-heading">Explore For Opportunities Here</h2>
              {/* <ol>
                          <li><Link href="index.html"><i class="icon-36"></i> Home</Link></li>
                          <li><Link href="javascript:void(0);"><i class="icon-36"></i> Who We Are</Link></li>
                          <li>About Us</li>
                      </ol> */}
            </div>
          </div>
          {/* <div class="col col-lg-6">
                  <div class="breadcumb-img">
                      <img src="assets/images/page-title_img_01.jpg" alt="">
                  </div>
              </div> */}
        </div>
      </div>
    </div>
  </section>
  <section className="shop-grid-sidebar-area rts-section-gap job-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div>
            <h1 className="job-main-title mob-none">Current Openings</h1>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-4 rts-sticky-column-item">
          <div className="sidebar-filter-main theiaStickySidebar job-category-col">
            <div className="single-filter-box singal-job-filter">
              <h5 className="title job-title">Category</h5>
              <div className="filterbox-body job-filterbox">
                <div className="category-wrapper _p13n-zg-nav-tree-all_style_zg-browse-group__88fbz job-category-wrapper">
                  {/* <div class="cat_heading">Administrative Support</div> */}
                  {/* <div class="cat_sub_heading">Accessories</div> */}
                  <ul className="list_cat job-list">
                    <li>
                      <Link href="#">Administrative Support</Link>
                    </li>
                    <li>
                      <Link href="#">Audio / Video / Photography Production</Link>
                    </li>
                    <li>
                      <Link href="#">Business &amp; Merchant Development</Link>
                    </li>
                    <li>
                      <Link href="#">Business Intelligence</Link>
                    </li>
                    <li>
                      <Link href="#">Buying, Planning, &amp; Instock Management</Link>
                    </li>
                    <li>
                      <Link href="#">Customer Service</Link>
                    </li>
                    <li>
                      <Link href="#">Data Science</Link>
                    </li>
                    <li>
                      <Link href="#">Database Administration</Link>
                    </li>
                    <li>
                      <Link href="#">
                        Editorial, Writing, &amp; Content Management
                      </Link>
                    </li>
                    <li>
                      <Link href="#">Facilities, Maintenance, &amp; Real Estate</Link>
                    </li>
                    <li>
                      <Link href="#">Finance and Global Business Services</Link>
                    </li>
                    <li>
                      <Link href="#">Fulfillment &amp; Operations Management</Link>
                    </li>
                    <li>
                      <Link href="#">Fulfillment Associate</Link>
                    </li>
                    <li>
                      <Link href="#">Hardware Development</Link>
                    </li>
                    <li>
                      <Link href="#">Human Resources</Link>
                    </li>
                    <li>
                      <Link href="#">Investigation &amp; Loss Prevention</Link>
                    </li>
                    <li>
                      <Link href="#">Leadership Development &amp; Training</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-8">
          <div className="col-lg-12">
            <div>
              <h1 className="job-main-title desk-none mob-block">
                Current Openings
              </h1>
            </div>
          </div>
          <div className="search-sec job-search-sec">
            <form action="#" method="post" noValidate="novalidate">
              <div className="row">
                <div className="col-lg-9 col-md-10 col-sm-10">
                  <div className="search-outer job-search-outer">
                    <div className="row">
                      {/* <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                  <input type="text" class="form-control search-slt" placeholder="Enter Pickup City">
                              </div> */}
                      <div className="col-lg-8 col-md-8 col-sm-7 p-0">
                        {/* <input type="text" class="form-control search-slt" placeholder="Enter Drop City"> */}
                        <div className="search-header career-slider-input">
                          <input
                            type="text"
                            className="form-control search-slt search-slt2 job-search-input"
                            placeholder="Search Jobs"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-5 p-0">
                        <select
                          className="form-control search-slt seerch-select select-job-location select-job-location2"
                          id="exampleFormControlSelect1"
                        >
                          <option>Location</option>
                          <option>Noida</option>
                          <option>Delhi</option>
                          <option>US</option>
                        </select>
                      </div>
                      {/* <div class="job-search-btn">
                                      <form action="">
                                       <Link href="javascript: void(0);" class="rts-btn radious-sm with-icon">
           
                                           <div class="arrow-icon career-slider-icon job-search-btn-icon"> <i
                                                   class="fa-solid fa-magnifying-glass"></i> </div>
                                       </Link> 
                                      </form>
                                   </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 p-0">
                  <div className="job-search-btn">
                    <Link
                      href="javascript: void(0);"
                      className="rts-btn radious-sm with-icon"
                    >
                      <div className="arrow-icon career-slider-icon job-search-btn-icon">
                        <i className="fa-solid fa-magnifying-glass" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* <div class="filter-select-area">
                  <div class="top-filter"> <span>Showing 1–20 of 57 results</span>
                      <div class="right-end"> <span>Short By Latest</span>
                          <div class="single-select">
                              <select>
                                  <option data-display="Best Match">Best Match</option>
                                  <option value="1">Price, low to high</option>
                                  <option value="2">Price, high to low</option>

                              </select>
                          </div>

                      </div>
                  </div>

              </div> */}
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">
                      Senior Technical Program Manager
                    </h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">
                      Software Development Engineer II
                    </h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">Manager</h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">Associate ERM</h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">
                      Senior Business Analyst
                    </h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">UI Manager</h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">Product Designer II</h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">Senior Data Analyst</h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">
                      Tech Lead Software Development Engineer
                    </h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">Senior Manager HRBP</h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">
                      Manager II Training &amp; Quality
                    </h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">Data Scientist</h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">
                      Senior Product Manager
                    </h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">Product Manager I</h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">Product Designer II</h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">User Researcher II</h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">
                      Senior Executive People Operations
                    </h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-shopping-card-one deals-of-day job-box">
                <div className="body-content">
                  <Link href="/consumer/jobs/job-description">
                    <h4 className="title job-box-title">Assistant Manager</h4>
                  </Link>
                  {/*  */}
                  <p>Location: Bangalore,Karnataka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default page