import Link from "next/link";
import React from "react";
import { baseUrl } from "@/Http/helper";

const CustomerReviews = () => {

    return (
        <>
        <div className="review_section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-3">
              <div className="single-tab-content-shop-details">
                <div className="product-details-review-product-style">
                  <div className="average-stars-area-left">
                    <div className="top-stars-wrapper">
                      <div className="rating-disc">
                        {" "}
                        <span>Customer reviews</span>
                        <div className="stars">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star-half-alt" />
                          <span className="out">4.6 out of 5</span>
                        </div>
                      </div>
                    </div>
                    <div className="average-stars-area">
                      <span>80,241 global ratings</span>
                    </div>
                    <div className="review-charts-details">
                      <div className="single-review">
                        <div className="stars">
                          {/* <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> */}
                          5 star{" "}
                        </div>
                        <div className="single-progress-area-incard">
                          <div className="progress">
                            <div
                              className="progress-bar wow fadeInLeft"
                              role="progressbar"
                              style={{ width: "82%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={82}
                            />
                          </div>
                        </div>
                        <span className="pac">82%</span>
                      </div>
                      <div className="single-review">
                        <div className="stars">
                          {/* <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-regular fa-star"></i> */}
                          4 star
                        </div>
                        <div className="single-progress-area-incard">
                          <div className="progress">
                            <div
                              className="progress-bar wow fadeInLeft"
                              role="progressbar"
                              style={{ width: "80%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <span className="pac">9%</span>
                      </div>
                      <div className="single-review">
                        <div className="stars">
                          {/* <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i> */}
                          3 star
                        </div>
                        <div className="single-progress-area-incard">
                          <div className="progress">
                            <div
                              className="progress-bar wow fadeInLeft"
                              role="progressbar"
                              style={{ width: "60%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <span className="pac">60%</span>
                      </div>
                      <div className="single-review">
                        <div className="stars"> 2 star </div>
                        <div className="single-progress-area-incard">
                          <div className="progress">
                            <div
                              className="progress-bar wow fadeInLeft"
                              role="progressbar"
                              style={{ width: "80%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <span className="pac">40%</span>
                      </div>
                      <div className="single-review">
                        <div className="stars"> 1 star </div>
                        <div className="single-progress-area-incard">
                          <div className="progress">
                            <div
                              className="progress-bar wow fadeInLeft"
                              role="progressbar"
                              style={{ width: "80%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <span className="pac">30%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: "20px 0px" }}>
                <div className="accordion" id="regularAccordionRobots">
                  {/* <div className="accordion-item">
    <h2 id="regularHeadingFirst" className="accordion-header">
<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseFirst" aria-expanded="true" aria-controls="regularCollapseFirst">How customer reviews and ratings work</button>
    </h2>
    <div id="regularCollapseFirst" className="accordion-collapse collapse show" aria-labelledby="regularHeadingFirst" data-bs-parent="#regularAccordionRobots">
<div className="accordion-body"> Overview of the basic fundamentals of robot kinesiology, including rotational motion, laws of thermodynamics, space, time, and momentum. Students will learn to analyze and explain workings and gesticulations, identify and describe metals and fluids at rest and in motion, and explain the impact that the laws of gravity have on different forms of energy. </div>
    </div>
  </div> */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="regularHeadingSecond">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#regularCollapseSecond"
                        aria-expanded="false"
                        aria-controls="regularCollapseSecond"
                      >
                        {" "}
                        How customer reviews and ratings work{" "}
                      </button>
                    </h2>
                    <div
                      id="regularCollapseSecond"
                      className="accordion-collapse collapse"
                      aria-labelledby="regularHeadingSecond"
                      data-bs-parent="#regularAccordionRobots"
                    >
                      <div className="accordion-body">
                        Customer Reviews, including Product Star Ratings help
                        customers to learn more about the product and decide
                        whether it is the right product for them. To calculate
                        the overall star rating and percentage breakdown by
                        star, we don’t use a simple average. Instead, our system
                        considers things like how recent a review is and if the
                        reviewer bought the item on Amazon. It also analyzed
                        reviews to verify trustworthiness.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="rewi_area">
                <h6>Review this product</h6>
                <p>Share your thoughts with other customers</p>
                <div className="write_button">
                  <Link href="#">Write a customer review</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="suctormers_story">
                <h6>Customers say</h6>
                <p>
                  Customers like the sound quality, battery life, and appearance
                  of the headphones. For example, they mention the music is
                  clear, they're noise-canceling, and it lasts all day. That
                  said, some complain about the fit. Opinions are mixed on
                  quality, comfort, and performance.
                </p>
                <div className="ai_generated">
                  AI-generated from the text of customer reviews
                </div>
                <div className="link_list">
                  <h6>Select to learn more</h6>
                  <ul>
                    <li>
                      <i
                        className="fa
fa-check-circle"
                      />
                      <Link href="#">Sound quality</Link>
                    </li>
                    <li>
                      <i
                        className="fa
fa-check-circle"
                      />
                      <Link href="#">Value</Link>
                    </li>
                    <li>
                      <i
                        className="fa
fa-check-circle"
                      />
                      <Link href="#">Battery life</Link>
                    </li>
                    <li>
                      <i
                        className="fa
fa-check-circle"
                      />
                      <Link href="#">Appearance</Link>
                    </li>
                    <li>
                      <i
                        className="fa
fa-check-circle"
                      />
                      <Link href="#">Quality</Link>
                    </li>
                    <li>
                      <i
                        className="fa
fa-check-circle"
                      />
                      <Link href="#">Comfort</Link>
                    </li>
                    <li>
                      <i
                        className="fa
fa-check-circle"
                      />
                      <Link href="#">Performance</Link>
                    </li>
                  </ul>
                </div>
                <div className="review_with_img_outer">
                  <h6>
                    Reviews with images{" "}
                    <span>
                      <Link href="#">
                        See all photos <i className="fa fa-angle-right" />
                      </Link>
                    </span>
                  </h6>
                  <div className="category-area-main-wrapper-one">
                    <div
                      className="swiper mySwiper-category-1 swiper-data"
                      data-swiper='{
                      "spaceBetween":16,
                      "slidesPerView":4,
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
                          "slidesPerView":4,
                          "spaceBetween":16},
                      "1540":{
                          "slidesPerView":4,
                          "spaceBetween":16},
                      "1840":{
                          "slidesPerView":4,
                          "spaceBetween":16}
                      }
                  }'
                    >
                      <div className="swiper-wrapper">
                        {/* single swiper start */}
                        <div className="swiper-slide">
                          <div className="review_image_outer">
                            {" "}
                            <Link href="#">
                              {" "}
                              <img
                                src={`${baseUrl}front/assets/images/review_1.jpg`}
                                alt="grocery"
                              />{" "}
                            </Link>{" "}
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="review_image_outer">
                            {" "}
                            <Link href="#l">
                              {" "}
                              <img
                                src={`${baseUrl}front/assets/images/review_1.jpg`}
                                alt="grocery"
                              />{" "}
                            </Link>{" "}
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="review_image_outer">
                            {" "}
                            <Link href="#">
                              {" "}
                              <img
                                src={`${baseUrl}front/assets/images/review_1.jpg`}
                                alt="grocery"
                              />{" "}
                            </Link>{" "}
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="review_image_outer">
                            {" "}
                            <Link href="#">
                              {" "}
                              <img
                                src={`${baseUrl}front/assets/images/review_1.jpg`}
                                alt="grocery"
                              />{" "}
                            </Link>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list_drop">
                  <select>
                    <option>Top Review</option>
                    <option>Most Recent</option>
                  </select>
                </div>
                <div className="clear" />
                <div className="col-lg-12">
                  <div className="rew_display">
                    <h6>Top reviews from the United States</h6>
                    <div className="viewr">
                      <img src={`${baseUrl}front/assets/images/review_testi.png`} />
                      Christian Waymire
                    </div>
                    <div className="yellow">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <span className="out_2">
                        Literally mind-blowing upgrading from AirPods Pro 2
                      </span>
                    </div>
                    <div className="review_description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
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
        </>
    )
}
export default CustomerReviews;