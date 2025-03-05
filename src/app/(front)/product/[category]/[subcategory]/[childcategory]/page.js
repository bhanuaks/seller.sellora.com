'use client';
import Link from 'next/link'
import React, {useEffect, useState, Suspense, lazy } from 'react'
import Product from '../../../../frontComponents/Product';
// import DepartmentFilter from '@/app/(front)/frontComponents/component/departmentFilter'; 
const DepartmentFilter = lazy(()=>import('@/app/(front)/frontComponents/component/departmentFilter'))

function page() {
  
  return (
    <>
  {/* rts navigation bar area start */}
  <div className="rts-navigation-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="navigator-breadcrumb-wrapper">
            <Link href="/">Electronics</Link>
            <i className="fa-regular fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts navigation bar area end */}
  <div className="section-seperator">
    <div className="container">
      <hr className="section-seperator" />
    </div>
  </div>
  {/* shop[ grid sidebar wrapper */}
  <div className="shop-grid-sidebar-area rts-section-gap">
    <div className="container">
      <div className="row">
        <div className="col-xl-2 col-lg-12 rts-sticky-column-item">
          <div className="sidebar-filter-main theiaStickySidebar">
          <Suspense fallback={<div>Loading...</div>}>
            <DepartmentFilter />
          </Suspense>



            <div className="single-filter-box">
              <h5 className="title">Price Filter</h5>
              <div className="filterbox-body">
                <div className="price-input">
                  <div className="field">
                    <span>Min</span>
                    <input
                      type="number"
                      className="input-min"
                      defaultValue={2500}
                    />
                  </div>
                  <div className="separator">-</div>
                  <div className="field">
                    <span>Max</span>
                    <input
                      type="number"
                      className="input-max"
                      defaultValue={7500}
                    />
                  </div>
                </div>
                <div className="slider">
                  <div className="progress" />
                </div>
                <div className="range-input">
                  <input
                    type="range"
                    className="range-min"
                    min={0}
                    max={10000}
                    defaultValue={2500}
                    step={100}
                  />
                  <input
                    type="range"
                    className="range-max"
                    min={0}
                    max={10000}
                    defaultValue={7500}
                    step={100}
                  />
                </div>
                <div className="filter-value-min-max mt--20">
                  {/*  <span>Price: $2000 — $5000</span> */}
                  <button className="rts-btn btn-primary">Filter</button>
                </div>
              </div>
            </div>


            <div className="single-filter-box">
              <h5 className="title">Customer Reviews</h5>
              <div className="filterbox-body">
                <div className="category-wrapper ">
                  {/* single category */}
                  <div className="single-category">
                    <input id="reviewall" type="radio" name="radio" />
                    <label htmlFor="reviewall">All </label>
                  </div>
                  <div className="single-category">
                    <input id="review5" type="radio" name="radio" />
                    <label htmlFor="review5">
                      <i className="fa-solid fa-star" />{" "}
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />{" "}
                      <i className="fa-solid fa-star" />{" "}
                      <i className="far fa-star" />
                      &amp; up
                    </label>
                  </div>
                  <div className="single-category">
                    <input id="review4" type="radio" name="radio" />
                    <label htmlFor="review4">
                      <i className="fa-solid fa-star" />{" "}
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />{" "}
                      <i className="far fa-star" />{" "}
                      <i className="far fa-star" />
                      &amp; up
                    </label>
                  </div>
                  <div className="single-category">
                    <input id="review2" type="radio" name="radio" />
                    <label htmlFor="review2">
                      <i className="fa-solid fa-star" />{" "}
                      <i className="fa-solid fa-star" />
                      <i className="far fa-star" />{" "}
                      <i className="far fa-star" />{" "}
                      <i className="far fa-star" />
                      &amp; up
                    </label>
                  </div>
                  <div className="single-category">
                    <input id="review1" type="radio" name="radio" />
                    <label htmlFor="review1">
                      <i className="fa-solid fa-star" />{" "}
                      <i className="far fa-star" />
                      <i className="far fa-star" />{" "}
                      <i className="far fa-star" />{" "}
                      <i className="far fa-star" />
                      &amp; up
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/*  <div className="single-filter-box">
      <h5 className="title">Product Status</h5>
      <div className="filterbox-body">
        <div className="category-wrapper"> 
         
          <div className="single-category">
            <input id="cat11" type="checkbox">
            <label for="cat11">In Stock </label>
          </div>
        
          <div className="single-category">
            <input id="cat12" type="checkbox">
            <label for="cat12">On Sale </label>
          </div>
         
        </div>
      </div>
    </div> */}
            <div className="single-filter-box">
              <h5 className="title">Select Brands</h5>
              <div className="filterbox-body">
                <div className="category-wrapper">
                  {/* single category */}
                  <div className="single-category">
                    <input id="cat13" type="checkbox" />
                    <label htmlFor="cat13">Frito Lay </label>
                  </div>
                  {/* single category end */}
                  {/* single category */}
                  <div className="single-category">
                    <input id="cat14" type="checkbox" />
                    <label htmlFor="cat14">Nespresso </label>
                  </div>
                  {/* single category end */}
                  {/* single category */}
                  <div className="single-category">
                    <input id="cat15" type="checkbox" />
                    <label htmlFor="cat15">Oreo </label>
                  </div>
                  {/* single category end */}
                  {/* single category */}
                  <div className="single-category">
                    <input id="cat16" type="checkbox" />
                    <label htmlFor="cat16">Quaker </label>
                  </div>
                  {/* single category end */}
                  {/* single category */}
                  <div className="single-category">
                    <input id="cat17" type="checkbox" />
                    <label htmlFor="cat17">Welch's </label>
                  </div>
                  {/* single category end */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-10 col-lg-12">
          <div className="filter-select-area">
            <div className="top-filter">
              {" "}
              <span>Showing 1–20 of 57 results</span>
              <div className="right-end">
                {" "}
                <span>Short By Latest</span>
                <div className="single-select">
                  <select>
                    <option data-display="Best Match">Best Match</option>
                    <option value={1}>Price, low to high</option>
                    <option value={2}>Price, high to low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <Product/>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* shop[ grid sidebar wrapper end */}
</>

  )
}

export default page