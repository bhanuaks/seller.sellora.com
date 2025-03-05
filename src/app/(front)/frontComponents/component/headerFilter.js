'use client';
import React from "react";
import Link from 'next/link'

const headerFilter = () => {
  

return (
<div className="filter-select-area">
            <div className="top-filter">
              
              <span>
                {/* Showing 1–20 of 57 results */}
                </span>
              <div className="right-end">
                
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
)
}
export default headerFilter;