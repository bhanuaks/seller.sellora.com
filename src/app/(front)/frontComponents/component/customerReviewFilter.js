
'use client';
import React from "react";
import Link from 'next/link'

const customerReview = () => {
  return (
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
  )
}

export default customerReview;