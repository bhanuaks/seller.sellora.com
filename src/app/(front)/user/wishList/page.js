import Link from 'next/link'
import React from 'react'
import Sidebar from '../userComponents/Sidebar'
import { baseUrl } from '@/Http/helper'


function page() {
  return (
    <>
  <div className="details_page_outer">
    {/* rts navigation bar area start */}
    <div className="rts-navigation-area-breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="navigator-breadcrumb-wrapper">
              <Link href="/">Dashboard</Link>
              <i className="fa-regular fa-chevron-right" />
              <Link className="current" href="#">
                WishList
              </Link>
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
    <div className="account-tab-area-start rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="side">
              <div className="user-profile-box active-user d-flex">
                <img
                  src={`${baseUrl}front/assets/images/ts-1.jpg`}
                  alt="avatar"
                  className="img-fluid profile-img"
                />
                <h2>
                  <span>Hello</span>Mary Smith
                </h2>
              </div>
              <div className="nav accout-dashborard-nav flex-column nav-pills">
                <Sidebar/>
              </div>
            </div>
          </div>
          <div className="col-lg-10 pl_md--10 pl_sm--10 pt_md--30 pt_sm--30">
            <div className="rts-cart-list-area">
              <div className="row">
                <div className="col-lg-8">
                  <div className="cart-top-area-note">
                    <h2 className="title">WishList</h2>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="relativ">
                    <div className="searchBar">
                      <input
                        type="text" 
                        defaultValue=""
                        className="searchBarInput"
                        placeholder="Search this list"
                      />
                      <div className="iconSearchContainer">
                        <i className="fa fa-search fa-lg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="right-end">
                    <div className="single-select">
                      <select>
                        <option data-display="Filter & Sort">
                          Filter &amp; Sort
                        </option>
                        <option>Priority (high to low)</option>
                        <option value={1}>Price (low to high)</option>
                        <option value={2}>Price (high to low)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-cart-area-list main item-parent">
                <div className="product-main-cart">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="thumbnail">
                        {" "}
                        <img
                          src={`${baseUrl}front/assets/images/518faREyvPL._AC_AA180_.jpg`}
                          alt="shop"
                        />{" "}
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <div className="information">
                        <div className="row">
                          <div className="col-lg-9">
                            <p>
                              <Link href="#">
                                Apple AirPods Max Over-Ear Wireless Headphone
                                Lorem...
                              </Link>
                            </p>
                            <div className="product-status">
                              <div className="rating-stars-group">
                                <div className="rating-star">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-star">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-star">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-star">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-star">
                                  <i className="fas fa-star" />
                                </div>
                                {/* 
                  <div className="rating-star"><i className="fas fa-star-half-alt"></i></div> */}
                                <span>(4.6) 10 Reviews</span>
                              </div>
                            </div>
                            {/*  <div className="a-size-small"> 10+ bought in past month </div> */}
                            {/*  <div className="in_stock">In stock</div> */}
                            <div className="color_cart">
                              {" "}
                              <span>Colour:</span> Black{" "}
                            </div>
                            <div className="subtotal">
                              $499 <span className="dis-amm">$516.00</span>{" "}
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="price_outer">
                              <div className="item_dfsd">
                                Item added 2 July 2024
                              </div>
                              <div className="move-to-cart"> Add to cart </div>
                              <div className="d-flex">
                                <Link href="#">
                                  <div className="move mt--10">
                                    Move to cart
                                  </div>
                                </Link>
                                <Link href="#">
                                  <div className="delete2 mt--10">
                                    {" "}
                                    <i className="fa-regular fa-trash" />{" "}
                                  </div>
                                </Link>
                              </div>
                              <div className="comment">
                                <Link href="#">
                                  Add comment, quantity &amp; priority
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*  <div className="list_cart"> 
      <div className="close section-activation"> <i className="fa-regular fa-trash"></i> </div>
    </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-cart-area-list main item-parent">
                <div className="product-main-cart">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="thumbnail">
                        {" "}
                        <img
                          src={`${baseUrl}front/assets/images/518faREyvPL._AC_AA180_.jpg`}
                          alt="shop"
                        />{" "}
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <div className="information">
                        <div className="row">
                          <div className="col-lg-9">
                            <p>
                              <Link href="#">
                                Apple AirPods Max Over-Ear Wireless Headphone
                                Lorem...
                              </Link>
                            </p>
                            <div className="product-status">
                              <div className="rating-stars-group">
                                <div className="rating-star">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-star">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-star">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-star">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-star">
                                  <i className="fas fa-star" />
                                </div>
                                {/* 
                  <div className="rating-star"><i className="fas fa-star-half-alt"></i></div> */}
                                <span>(4.6) 10 Reviews</span>
                              </div>
                            </div>
                            {/*  <div className="a-size-small"> 10+ bought in past month </div> */}
                            {/*  <div className="in_stock">In stock</div> */}
                            <div className="color_cart">
                              {" "}
                              <span>Colour:</span> Black{" "}
                            </div>
                            <div className="subtotal">
                              $499 <span className="dis-amm">$516.00</span>{" "}
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="price_outer">
                              <div className="item_dfsd">
                                Item added 2 July 2024
                              </div>
                              <div className="move-to-cart"> Add to cart </div>
                              <div className="d-flex">
                                {" "}
                                <Link href="#">
                                  <div className="move mt--10">
                                    Move to cart
                                  </div>
                                </Link>{" "}
                                <Link href="#">
                                  <div className="delete2 mt--10">
                                    {" "}
                                    <i className="fa-regular fa-trash" />{" "}
                                  </div>
                                </Link>{" "}
                              </div>
                              <div className="comment">
                                <Link href="#">
                                  Add comment, quantity &amp; priority
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*  <div className="list_cart"> 
      <div className="close section-activation"> <i className="fa-regular fa-trash"></i> </div>
    </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-cart-area-list main item-parent">
                <div className="product-main-cart">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="thumbnail">
                        {" "}
                        <img
                          src={`${baseUrl}front/assets/images/518faREyvPL._AC_AA180_.jpg`}
                          alt="shop"
                        />{" "}
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <div className="information">
                        <div className="row">
                          <div className="col-lg-9">
                            <p>
                              <Link href="#">
                                Apple AirPods Max Over-Ear Wireless Headphone
                                Lorem...
                              </Link>
                            </p>
                            <div className="product-status">
                              <div className="rating-stars-group">
                                <div className="rating-star">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-star">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-star">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-star">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-star">
                                  <i className="fas fa-star" />
                                </div>
                                {/* 
                  <div className="rating-star"><i className="fas fa-star-half-alt"></i></div> */}
                                <span>(4.6) 10 Reviews</span>
                              </div>
                            </div>
                            {/*  <div className="a-size-small"> 10+ bought in past month </div> */}
                            {/*  <div className="in_stock">In stock</div> */}
                            <div className="color_cart">
                              {" "}
                              <span>Colour:</span> Black{" "}
                            </div>
                            <div className="subtotal">
                              $499 <span className="dis-amm">$516.00</span>{" "}
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="price_outer">
                              <div className="item_dfsd">
                                Item added 2 July 2024
                              </div>
                              <div className="move-to-cart"> Add to cart </div>
                              <div className="d-flex">
                                {" "}
                                <Link href="#">
                                  <div className="move mt--10">
                                    Move to cart
                                  </div>
                                </Link>{" "}
                                <Link href="#">
                                  <div className="delete2 mt--10">
                                    {" "}
                                    <i className="fa-regular fa-trash" />{" "}
                                  </div>
                                </Link>{" "}
                              </div>
                              <div className="comment">
                                <Link href="#">
                                  Add comment, quantity &amp; priority
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*  <div className="list_cart"> 
      <div className="close section-activation"> <i className="fa-regular fa-trash"></i> </div>
    </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="registradion-top-text">
                {" "}
                <span>List</span>{" "}
              </div>
              <div className="tranding-items-tab-area-start rts-section-gap">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="title-area-between">
                        <h2 className="title-left">Inspired by your list</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="category-area-main-wrapper-one">
                        <div
                          className="swiper mySwiper-category-1 swiper-data"
                          data-swiper='{
                      "spaceBetween":16,
                      "slidesPerView":5,
                      "loop": true,
                      "speed": 700,
                      "autoplay":{
                      "delay":"4000"},
                      "navigation":{
                          "nextEl":".swiper-button-next",

                          "prevEl":".swiper-button-prev"
                        },
                      "breakpoints":{
                      "0":{
                          "slidesPerView":1,
                          "spaceBetween": 12},
                      "320":{
                          "slidesPerView":1,
                          "spaceBetween":12},
                      "480":{
                          "slidesPerView":2,
                          "spaceBetween":12},
                      "640":{
                          "slidesPerView":2,
                          "spaceBetween":16},
                      "840":{
                          "slidesPerView":3,
                          "spaceBetween":16},
                      "1140":{
                          "slidesPerView":5,
                          "spaceBetween":16},
                      "1540":{
                          "slidesPerView":5,
                          "spaceBetween":16},
                      "1840":{
                          "slidesPerView":5,
                          "spaceBetween":16}
                      }
                  }'
                        >
                          <div className="swiper-wrapper">
                            {/* single swiper start */}
                            <div className="swiper-slide">
                              <div className="single-shopping-card-one deals-of-day">
                                <div className="image-and-action-area-wrapper">
                                  {" "}
                                  <Link href="product-details.html">
                                    {" "}
                                    <img
                                      src={`${baseUrl}front/assets/images/grocery/17.jpg`}
                                      alt="grocery"
                                    />{" "}
                                  </Link>
                                  <div className="action-share-option">
                                    <div className="single-action openuptip message-show-action">
                                      {" "}
                                      <i className="fa-light fa-heart" />{" "}
                                    </div>
                                    {/* <div className="single-action openuptip"> <i className="fa-solid fa-arrows-retweet"></i> </div> */}
                                    {/* <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                              <i className="fa-solid fa-arrows-retweet"></i>
                                                          </div> */}
                                    <div className="single-action openuptip cta-quickview product-details-popup-btn">
                                      {" "}
                                      <i className="fa-regular fa-eye" />{" "}
                                    </div>
                                  </div>
                                </div>
                                <div className="body-content">
                                  <div className="start-area-rating">
                                    {" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                  </div>
                                  <Link href="product-details.html">
                                    <h4 className="title">
                                      Electric 1.8 liter Multi Cooker{" "}
                                    </h4>
                                  </Link>{" "}
                                  {/*  */}
                                  <div className="price-area">
                                    {" "}
                                    <span className="current">$499</span>
                                    <div className="previous">$36.00</div>
                                  </div>
                                  <div className="cart-counter-action">
                                    {" "}
                                    <Link
                                      href="#"
                                      className="rts-btn btn-primary radious-sm with-icon"
                                    >
                                      <div className="btn-text">
                                        {" "}
                                        Add To Cart{" "}
                                      </div>
                                      <div className="arrow-icon">
                                        {" "}
                                        <i className="fa-regular fa-cart-shopping" />{" "}
                                      </div>
                                      <div className="arrow-icon">
                                        {" "}
                                        <i className="fa-regular fa-cart-shopping" />{" "}
                                      </div>
                                    </Link>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="single-shopping-card-one deals-of-day">
                                <div className="image-and-action-area-wrapper">
                                  {" "}
                                  <Link href="product-details.html">
                                    {" "}
                                    <img
                                      src={`${baseUrl}front/assets/images/grocery/18.jpg`}
                                      alt="grocery"
                                    />{" "}
                                  </Link>
                                  <div className="action-share-option">
                                    <div className="single-action openuptip message-show-action">
                                      {" "}
                                      <i className="fa-light fa-heart" />{" "}
                                    </div>
                                    {/* <div className="single-action openuptip"> <i className="fa-solid fa-arrows-retweet"></i> </div> */}
                                    {/* <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                              <i className="fa-solid fa-arrows-retweet"></i>
                                                          </div> */}
                                    <div className="single-action openuptip cta-quickview product-details-popup-btn">
                                      {" "}
                                      <i className="fa-regular fa-eye" />{" "}
                                    </div>
                                  </div>
                                </div>
                                <div className="body-content">
                                  <div className="start-area-rating">
                                    {" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                  </div>
                                  <Link href="product-details.html">
                                    <h4 className="title">
                                      Philips Viva Collection HD4928/01
                                    </h4>
                                  </Link>{" "}
                                  {/*  */}
                                  <div className="price-area">
                                    {" "}
                                    <span className="current">$499</span>
                                    <div className="previous">$36.00</div>
                                  </div>
                                  <div className="cart-counter-action">
                                    {" "}
                                    <Link
                                      href="#"
                                      className="rts-btn btn-primary radious-sm with-icon"
                                    >
                                      <div className="btn-text">
                                        {" "}
                                        Add To Cart{" "}
                                      </div>
                                      <div className="arrow-icon">
                                        {" "}
                                        <i className="fa-regular fa-cart-shopping" />{" "}
                                      </div>
                                      <div className="arrow-icon">
                                        {" "}
                                        <i className="fa-regular fa-cart-shopping" />{" "}
                                      </div>
                                    </Link>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="single-shopping-card-one deals-of-day">
                                <div className="image-and-action-area-wrapper">
                                  {" "}
                                  <Link href="product-details.html">
                                    {" "}
                                    <img
                                      src={`${baseUrl}front/assets/images/grocery/19.jpg`}
                                      alt="grocery"
                                    />{" "}
                                  </Link>
                                  <div className="action-share-option">
                                    <div className="single-action openuptip message-show-action">
                                      {" "}
                                      <i className="fa-light fa-heart" />{" "}
                                    </div>
                                    {/* <div className="single-action openuptip"> <i className="fa-solid fa-arrows-retweet"></i> </div> */}
                                    {/* <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                              <i className="fa-solid fa-arrows-retweet"></i>
                                                          </div> */}
                                    <div className="single-action openuptip cta-quickview product-details-popup-btn">
                                      {" "}
                                      <i className="fa-regular fa-eye" />{" "}
                                    </div>
                                  </div>
                                </div>
                                <div className="body-content">
                                  <div className="start-area-rating">
                                    {" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                  </div>
                                  <Link href="product-details.html">
                                    <h4 className="title">
                                      Smart Speaker &amp; Google Assistant,
                                      Light Grey
                                    </h4>
                                  </Link>{" "}
                                  {/*  */}
                                  <div className="price-area">
                                    {" "}
                                    <span className="current">$499</span>
                                    <div className="previous">$36.00</div>
                                  </div>
                                  <div className="cart-counter-action">
                                    {" "}
                                    <Link
                                      href="#"
                                      className="rts-btn btn-primary radious-sm with-icon"
                                    >
                                      <div className="btn-text">
                                        {" "}
                                        Add To Cart{" "}
                                      </div>
                                      <div className="arrow-icon">
                                        {" "}
                                        <i className="fa-regular fa-cart-shopping" />{" "}
                                      </div>
                                      <div className="arrow-icon">
                                        {" "}
                                        <i className="fa-regular fa-cart-shopping" />{" "}
                                      </div>
                                    </Link>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="single-shopping-card-one deals-of-day">
                                <div className="image-and-action-area-wrapper">
                                  {" "}
                                  <Link href="product-details.html">
                                    {" "}
                                    <img
                                      src={`${baseUrl}front/assets/images/grocery/20.jpg`}
                                      alt="grocery"
                                    />{" "}
                                  </Link>
                                  <div className="action-share-option">
                                    <div className="single-action openuptip message-show-action">
                                      {" "}
                                      <i className="fa-light fa-heart" />{" "}
                                    </div>
                                    {/* <div className="single-action openuptip"> <i className="fa-solid fa-arrows-retweet"></i> </div> */}
                                    {/* <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                              <i className="fa-solid fa-arrows-retweet"></i>
                                                          </div> */}
                                    <div className="single-action openuptip cta-quickview product-details-popup-btn">
                                      {" "}
                                      <i className="fa-regular fa-eye" />{" "}
                                    </div>
                                  </div>
                                </div>
                                <div className="body-content">
                                  <div className="start-area-rating">
                                    {" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                    <i className="fa-solid fa-star" />{" "}
                                  </div>
                                  <Link href="product-details.html">
                                    <h4 className="title">
                                      Apple AirPods Max Over-Ear Wireless
                                      Headphone
                                    </h4>
                                  </Link>{" "}
                                  {/*  */}
                                  <div className="price-area">
                                    {" "}
                                    <span className="current">$499</span>
                                    <div className="previous">$36.00</div>
                                  </div>
                                  <div className="cart-counter-action">
                                    {" "}
                                    <Link
                                      href="#"
                                      className="rts-btn btn-primary radious-sm with-icon"
                                    >
                                      <div className="btn-text">
                                        {" "}
                                        Add To Cart{" "}
                                      </div>
                                      <div className="arrow-icon">
                                        {" "}
                                        <i className="fa-regular fa-cart-shopping" />{" "}
                                      </div>
                                      <div className="arrow-icon">
                                        {" "}
                                        <i className="fa-regular fa-cart-shopping" />{" "}
                                      </div>
                                    </Link>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="next-prev-swiper-wrapper">
                            <div className="swiper-button-prev">
                              <i className="fa-regular fa-chevron-left" />
                            </div>
                            <div className="swiper-button-next">
                              <i className="fa-regular fa-chevron-right" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="tranding-items-tab-area-start rts-section-gap mb--40">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-area-between">
            <h2 className="title-left">Inspired by your browsing history</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="category-area-main-wrapper-one">
            <div
              className="swiper mySwiper-category-1 swiper-data"
              data-swiper='{
                      "spaceBetween":16,
                      "slidesPerView":6,
                      "loop": true,
                      "speed": 700,
                      "autoplay":{
                      "delay":"4000"},
                      "navigation":{
                          "nextEl":".swiper-button-next",

                          "prevEl":".swiper-button-prev"
                        },
                      "breakpoints":{
                      "0":{
                          "slidesPerView":1,
                          "spaceBetween": 12},
                      "320":{
                          "slidesPerView":1,
                          "spaceBetween":12},
                      "480":{
                          "slidesPerView":2,
                          "spaceBetween":12},
                      "640":{
                          "slidesPerView":2,
                          "spaceBetween":16},
                      "840":{
                          "slidesPerView":3,
                          "spaceBetween":16},
                      "1140":{
                          "slidesPerView":6,
                          "spaceBetween":16},
                      "1540":{
                          "slidesPerView":6,
                          "spaceBetween":16},
                      "1840":{
                          "slidesPerView":6,
                          "spaceBetween":16}
                      }
                  }'
            >
              <div className="swiper-wrapper">
                {/* single swiper start */}
                <div className="swiper-slide">
                  <div className="single-shopping-card-one deals-of-day">
                    <div className="image-and-action-area-wrapper">
                      {" "}
                      <Link href="product-details.html">
                        {" "}
                        <img
                          src={`${baseUrl}front/assets/images/grocery/17.jpg`}
                          alt="grocery"
                        />{" "}
                      </Link>
                      <div className="action-share-option">
                        <div className="single-action openuptip message-show-action">
                          {" "}
                          <i className="fa-light fa-heart" />
                        </div>
                        {/* <div className="single-action openuptip"> <i className="fa-solid fa-arrows-retweet"></i> </div> */}
                        {/* <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                              <i className="fa-solid fa-arrows-retweet"></i>
                                                          </div> */}
                        <div className="single-action openuptip cta-quickview product-details-popup-btn">
                          {" "}
                          <i className="fa-regular fa-eye" />{" "}
                        </div>
                      </div>
                    </div>
                    <div className="body-content">
                      <div className="start-area-rating">
                        {" "}
                        <i className="fa-solid fa-star" />{" "}
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />{" "}
                        <i className="fa-solid fa-star" />{" "}
                        <i className="fa-solid fa-star" />{" "}
                      </div>
                      <Link href="product-details.html">
                        <h4 className="title">
                          Electric 1.8 liter Multi Cooker{" "}
                        </h4>
                      </Link>{" "}
                      {/*  */}
                      <div className="price-area">
                        {" "}
                        <span className="current">$499</span>
                        <div className="previous">$36.00</div>
                      </div>
                      <div className="cart-counter-action">
                        {" "}
                        <Link
                          href="#"
                          className="rts-btn btn-primary radious-sm with-icon"
                        >
                          <div className="btn-text"> Add To Cart </div>
                          <div className="arrow-icon">
                            {" "}
                            <i className="fa-regular fa-cart-shopping" />{" "}
                          </div>
                          <div className="arrow-icon">
                            {" "}
                            <i className="fa-regular fa-cart-shopping" />{" "}
                          </div>
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="single-shopping-card-one deals-of-day">
                    <div className="image-and-action-area-wrapper">
                      {" "}
                      <Link href="product-details.html">
                        {" "}
                        <img
                          src={`${baseUrl}front/assets/images/grocery/18.jpg`}
                          alt="grocery"
                        />{" "}
                      </Link>
                      <div className="action-share-option">
                        <div className="single-action openuptip message-show-action">
                          {" "}
                          <i className="fa-light fa-heart" />
                        </div>
                        {/* <div className="single-action openuptip"> <i className="fa-solid fa-arrows-retweet"></i> </div> */}
                        {/* <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                              <i className="fa-solid fa-arrows-retweet"></i>
                                                          </div> */}
                        <div className="single-action openuptip cta-quickview product-details-popup-btn">
                          {" "}
                          <i className="fa-regular fa-eye" />{" "}
                        </div>
                      </div>
                    </div>
                    <div className="body-content">
                      <div className="start-area-rating">
                        {" "}
                        <i className="fa-solid fa-star" />{" "}
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />{" "}
                        <i className="fa-solid fa-star" />{" "}
                        <i className="fa-solid fa-star" />{" "}
                      </div>
                      <Link href="product-details.html">
                        <h4 className="title">
                          Philips Viva Collection HD4928/01
                        </h4>
                      </Link>{" "}
                      {/*  */}
                      <div className="price-area">
                        {" "}
                        <span className="current">$499</span>
                        <div className="previous">$36.00</div>
                      </div>
                      <div className="cart-counter-action">
                        {" "}
                        <Link
                          href="#"
                          className="rts-btn btn-primary radious-sm with-icon"
                        >
                          <div className="btn-text"> Add To Cart </div>
                          <div className="arrow-icon">
                            {" "}
                            <i className="fa-regular fa-cart-shopping" />{" "}
                          </div>
                          <div className="arrow-icon">
                            {" "}
                            <i className="fa-regular fa-cart-shopping" />{" "}
                          </div>
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="single-shopping-card-one deals-of-day">
                    <div className="image-and-action-area-wrapper">
                      {" "}
                      <Link href="product-details.html">
                        {" "}
                        <img
                          src={`${baseUrl}front/assets/images/grocery/19.jpg`}
                          alt="grocery"
                        />{" "}
                      </Link>
                      <div className="action-share-option">
                        <div className="single-action openuptip message-show-action">
                          {" "}
                          <i className="fa-light fa-heart" />
                        </div>
                        {/* <div className="single-action openuptip"> <i className="fa-solid fa-arrows-retweet"></i> </div> */}
                        {/* <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                              <i className="fa-solid fa-arrows-retweet"></i>
                                                          </div> */}
                        <div className="single-action openuptip cta-quickview product-details-popup-btn">
                          {" "}
                          <i className="fa-regular fa-eye" />{" "}
                        </div>
                      </div>
                    </div>
                    <div className="body-content">
                      <div className="start-area-rating">
                        {" "}
                        <i className="fa-solid fa-star" />{" "}
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />{" "}
                        <i className="fa-solid fa-star" />{" "}
                        <i className="fa-solid fa-star" />{" "}
                      </div>
                      <Link href="product-details.html">
                        <h4 className="title">
                          Smart Speaker &amp; Google Assistant, Light Grey
                        </h4>
                      </Link>{" "}
                      {/*  */}
                      <div className="price-area">
                        {" "}
                        <span className="current">$499</span>
                        <div className="previous">$36.00</div>
                      </div>
                      <div className="cart-counter-action">
                        {" "}
                        <Link
                          href="#"
                          className="rts-btn btn-primary radious-sm with-icon"
                        >
                          <div className="btn-text"> Add To Cart </div>
                          <div className="arrow-icon">
                            {" "}
                            <i className="fa-regular fa-cart-shopping" />{" "}
                          </div>
                          <div className="arrow-icon">
                            {" "}
                            <i className="fa-regular fa-cart-shopping" />{" "}
                          </div>
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="single-shopping-card-one deals-of-day">
                    <div className="image-and-action-area-wrapper">
                      {" "}
                      <Link href="product-details.html">
                        {" "}
                        <img
                          src={`${baseUrl}front/assets/images/grocery/20.jpg`}
                          alt="grocery"
                        />{" "}
                      </Link>
                      <div className="action-share-option">
                        <div className="single-action openuptip message-show-action">
                          {" "}
                          <i className="fa-light fa-heart" />
                        </div>
                        {/* <div className="single-action openuptip"> <i className="fa-solid fa-arrows-retweet"></i> </div> */}
                        {/* <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                              <i className="fa-solid fa-arrows-retweet"></i>
                                                          </div> */}
                        <div className="single-action openuptip cta-quickview product-details-popup-btn">
                          {" "}
                          <i className="fa-regular fa-eye" />{" "}
                        </div>
                      </div>
                    </div>
                    <div className="body-content">
                      <div className="start-area-rating">
                        {" "}
                        <i className="fa-solid fa-star" />{" "}
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />{" "}
                        <i className="fa-solid fa-star" />{" "}
                        <i className="fa-solid fa-star" />{" "}
                      </div>
                      <Link href="product-details.html">
                        <h4 className="title">
                          Apple AirPods Max Over-Ear Wireless Headphone
                        </h4>
                      </Link>{" "}
                      {/*  */}
                      <div className="price-area">
                        {" "}
                        <span className="current">$499</span>
                        <div className="previous">$36.00</div>
                      </div>
                      <div className="cart-counter-action">
                        {" "}
                        <Link
                          href="#"
                          className="rts-btn btn-primary radious-sm with-icon"
                        >
                          <div className="btn-text"> Add To Cart </div>
                          <div className="arrow-icon">
                            {" "}
                            <i className="fa-regular fa-cart-shopping" />{" "}
                          </div>
                          <div className="arrow-icon">
                            {" "}
                            <i className="fa-regular fa-cart-shopping" />{" "}
                          </div>
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="next-prev-swiper-wrapper">
                <div className="swiper-button-prev">
                  <i className="fa-regular fa-chevron-left" />
                </div>
                <div className="swiper-button-next">
                  <i className="fa-regular fa-chevron-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default page