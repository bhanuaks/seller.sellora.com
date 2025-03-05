'use client';
import Link from 'next/link'
import Product from '../../frontComponents/Product';
import DepartmentFilter from '../../frontComponents/component/departmentFilter';
import BrandFilter from '../../frontComponents/component/brandFilter';
import PriceFilter from '../../frontComponents/component/priceFilter';
import CustomerReviewFilter from '../../frontComponents/component/customerReviewFilter';
import HeaderFilter from '../../frontComponents/component/headerFilter';

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
           

        <DepartmentFilter />
        <PriceFilter />
        <CustomerReviewFilter />
        <BrandFilter />

          </div>
        </div>

        <div className="col-xl-10 col-lg-12">
        
          <HeaderFilter></HeaderFilter>

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