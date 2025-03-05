'use client';
import React from "react";
import Link from 'next/link'

const brandFilter = () => {

return (
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
)
}

export default brandFilter;
