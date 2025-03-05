'use client';
import { baseUrl } from '@/Http/helper';
import Link from 'next/link';
import React, { useEffect } from 'react';



const HomeAllCategory = () => {


  return (
    
  <div className="rts-category-area rts-section-gap" style={{ paddingTop: 0 }}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="cover-card-main-over-white" style={{ paddingTop: 0 }}>
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-between">
                <h2 className="title-left"> All Categories </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* rts category area satart */}
              <div className="rts-caregory-area-one ">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="category-area-main-wrapper-one">
                      <div
                        className="swiper mySwiper-category-1 swiper-data"
                        data-swiper='{
                                            "spaceBetween":0,
                                            "slidesPerView":8,
                                            "loop": true,
                                            "speed": 1000,
                                            "autoplay":{
                                            "delay":"4000"},
                                            "navigation":{
                                                "nextEl":".swiper-button-next",
                                                "prevEl":".swiper-button-prev"
                                                },
                                            "breakpoints":{
                                            "0":{
                                                "slidesPerView":1,
                                                "spaceBetween": 0},
                                            "380":{
                                                "slidesPerView":2,
                                                "spaceBetween":0},
                                            "480":{
                                                "slidesPerView":3,
                                                "spaceBetween":0},
                                            "640":{
                                                "slidesPerView":4,
                                                "spaceBetween":0},
                                            "840":{
                                                "slidesPerView":6,
                                                "spaceBetween":0},
                                            "1140":{
                                                "slidesPerView":8,
                                                "spaceBetween":0}
                                            }
                                        }'
                      >
                        <div className="swiper-wrapper">
                          {/* single swiper start */}
                          <div className="swiper-slide">
                            <div className="single-category-one height-230">
                              {" "}
                              <Link href="#" className="thumbnail">
                                {" "}
                                <img
                                  src={`${baseUrl}front/assets/images/category/01.png`}
                                  alt="category"
                                />{" "}
                              </Link>
                              <div className="inner-content-category">
                                <p>Fashion</p>
                                <span>299 Items</span>
                              </div>
                            </div>
                          </div>
                          {/* single swiper start */}
                          {/* single swiper start */}
                          <div className="swiper-slide">
                            <div className="single-category-one height-230">
                              {" "}
                              <Link href="#" className="thumbnail">
                                {" "}
                                <img
                                  src={`${baseUrl}front/assets/images/category/02.png`}
                                  alt="category"
                                />{" "}
                              </Link>
                              <div className="inner-content-category">
                                <p>Home &amp; Kitchen</p>
                                <span>299 Items</span>
                              </div>
                            </div>
                          </div>
                          {/* single swiper start */}
                          {/* single swiper start */}
                          <div className="swiper-slide">
                            <div className="single-category-one height-230">
                              {" "}
                              <Link href="#" className="thumbnail">
                                {" "}
                                <img
                                  src={`${baseUrl}front/assets/images/category/03.png`}
                                  alt="category"
                                />{" "}
                              </Link>
                              <div className="inner-content-category">
                                <p>Beauty &amp; Health </p>
                                <span>299 Items</span>
                              </div>
                            </div>
                          </div>
                          {/* single swiper start */}
                          {/* single swiper start */}
                          <div className="swiper-slide">
                            <div className="single-category-one height-230">
                              {" "}
                              <Link href="#" className="thumbnail">
                                {" "}
                                <img
                                  src={`${baseUrl}front/assets/images/category/04.png`}
                                  alt="category"
                                />{" "}
                              </Link>
                              <div className="inner-content-category">
                                <p>Electronic </p>
                                <span>299 Items</span>
                              </div>
                            </div>
                          </div>
                          {/* single swiper start */}
                          {/* single swiper start */}
                          <div className="swiper-slide">
                            <div className="single-category-one height-230">
                              {" "}
                              <Link href="#" className="thumbnail">
                                {" "}
                                <img
                                  src={`${baseUrl}front/assets/images/category/05.png`}
                                  alt="category"
                                />{" "}
                              </Link>
                              <div className="inner-content-category">
                                <p>Travel </p>
                                <span>299 Items</span>
                              </div>
                            </div>
                          </div>
                          {/* single swiper start */}
                          {/* single swiper start */}
                          <div className="swiper-slide">
                            <div className="single-category-one height-230">
                              {" "}
                              <Link href="#" className="thumbnail">
                                {" "}
                                <img
                                  src={`${baseUrl}front/assets/images/category/06.png`}
                                  alt="category"
                                />{" "}
                              </Link>
                              <div className="inner-content-category">
                                <p>Jwellery &amp; Shoes</p>
                                <span>299 Items</span>
                              </div>
                            </div>
                          </div>
                          {/* single swiper start */}
                          {/* single swiper start */}
                          <div className="swiper-slide">
                            <div className="single-category-one height-230">
                              {" "}
                              <Link href="#" className="thumbnail">
                                {" "}
                                <img
                                  src={`${baseUrl}front/assets/images/category/07.png`}
                                  alt="category"
                                />{" "}
                              </Link>
                              <div className="inner-content-category">
                                <p>Sport </p>
                                <span>299 Items</span>
                              </div>
                            </div>
                          </div>
                          {/* single swiper start */}
                          {/* single swiper start */}
                          <div className="swiper-slide">
                            <div className="single-category-one height-230">
                              {" "}
                              <Link href="#" className="thumbnail">
                                {" "}
                                <img
                                  src={`${baseUrl}front/assets/images/category/08.png`}
                                  alt="category"
                                />{" "}
                              </Link>
                              <div className="inner-content-category">
                                <p>Furniture </p>
                                <span>299 Items</span>
                              </div>
                            </div>
                          </div>
                          {/* single swiper start */}
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
              {/* rts category area end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default HomeAllCategory