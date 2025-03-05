
'use client';
import React from "react";
import Link from 'next/link'

const priceFilter = () => {
  return (
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
  )
}
export default priceFilter;