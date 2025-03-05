import { baseUrl } from '@/Http/helper'
import React from 'react'

const page = () => {
  return (
    <div>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="navigator-breadcrumb-wrapper">
            <h3>Returns</h3>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li><a href="#"><img src={`${baseUrl}front/assets/images/hand_shaking.png`} />Help</a> </li>
              {/* <li><a href="#"><i class="fa-solid fa-video"></i>Learn How to do Listing</a> </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className>
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="breadcome-heading pb--10">
                <form role="search" className="sr-input-func">
                  <input type="text" placeholder="Search your product by Order Id , sku" className="search-int form-control" />
                  <a href="#"><i className="fa fa-search" /></a>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <select className>
                <option>Sku Id</option>
                <option>...</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div>
      <div className="table-responsive">
        <table className="table table-bordered table-striped br-none" style={{"margin-top":"10px"}}>
          <thead className="table__head">
            <tr className="winner__table">
              <th colSpan={15}>
                <div className="row">
                  <div className="col-lg-4 col-5">
                    <div className="table_menu">
                      <ul>
                        <li><a href="#" className="active">All Returns(1)</a></li>
                        <li><a href="#">Pending Returns(0)</a></li>
                        <li><a href="#">Complete Returns(0)</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-3">
                    <div className="listing22">
                      <select className>
                        <option>Return Date Range</option>
                        <option>Exact date</option>
                        <option>Last days</option>
                        <option>Last 3 days</option>
                        <option>last 14 days</option>
                        <option>last 30 days</option>
                        <option>last 50 days</option>
                        <option>last 180 days</option>
                        <option>last 365 days</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-4" />
                </div>
              </th>
            </tr>
            <tr className="winner__table">
              <th width={50}><input type="checkbox" /></th>
              <th width={120}>Order Details</th>
              <th width={150}>Return Quantity</th>
              <th width={120} />
              <th width={250} style={{"-webkit-text-align":"left","text-align":"left"}}>Product Detail</th>
              <th width={300} style={{"-webkit-text-align":"left","text-align":"left"}}>Return Details</th>
              <th width={180} style={{"-webkit-text-align":"left","text-align":"left"}}>Date</th>
              <th width={150}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="winner__table">
              <td className="text-center"><input type="checkbox" /></td>
              <td>
                <div className="order_id_01"><span>Order Id</span>
                  200012561663320</div>
                <div className="order_id_01"><span>Purchase Order</span>
                  108934027144465</div>
                <div className="order_id_01"><span>Resolution</span>
                  StandardRefund</div>
              </td>
              <td className="text-center">1</td>
              <td><img src={`${baseUrl}front/assets/images/preview01.jpg `} /></td>
              <td>
                <div className="product_details_content">
                  <p>Lora s Choice Purple Toothpaste
                    Colour Corrector, Tooth Stain
                    Concealer, Teeth Whitening
                    Booster, Colour Correcting,
                    Toothpaste Color Corrector
                    Serum Brighten and Whiten
                    Teeth</p>
                  <ul>
                    <li><span>SKU:</span> Lora s Choice Purple Toothpaste</li>
                    <li><span>SIN:</span> B0D8W995465894</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <table className="return_table">
                  <tbody><tr>
                      <td width={120}>Buyer Name:</td>
                      <td>Kathy Murdock</td>
                    </tr>
                    <tr>
                      <td>Return Reason:</td>
                      <td><b style={{"color":"#fc7035","font-weight":"500"}}>Item arrived too late</b></td>
                    </tr>
                    <tr>
                      <td>Buyer Feedback:</td>
                      <td>I am disappointed because
                        the item did not arrived on
                        time even on the extended
                        time the seller set.
                        I just need a refund</td>
                    </tr>
                    <tr>
                      <td>Tracking ID:</td>
                      <td>4326512095</td>
                    </tr>
                    <tr>
                      <td>Carrier Name:</td>
                      <td>USPS</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td><b style={{"color":"#fc7035","font-weight":"500"}}>More info <i className="fa fa-angle-down" aria-hidden="true" /></b></td>
                    </tr>
                  </tbody></table>
                        {/* 
        <div class="returns_details">
        <ul>
        <li><span>Buyer Name:</span> Kathy Murdock</li>
        <li><span>Return Reason:</span> <b style="color:#fc7035; font-weight:500">Item arrived too late</b></li>
            <li><span>Buyer Feedback:</span> I am disappointed because
        the item did not arrived on
        time even on the extended
        time the seller set.  
        I just need a refund</li>
            <li><span>Tracking ID:</span> 4326512095</li>
        <li><span>Carrier Name:</span> USPS</li>
        <li><span></span> <b style="color:#fc7035; font-weight:500">More info <i class="fa fa-angle-down" aria-hidden="true"></i></b>
        </ul>
        </div> */}
              </td>
              <td>
                <div className="request_IDud9er">
                  <ul>
                    <li>Request Date:11/22/2024</li>
                    <li>Order Date:10/25/2024</li>
                    <li>Approval Date: 10/12/2024</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="issue-refund"><a href="#">Issue Refund</a></div>
                <div className="complete_refund"><a href="#">Complete Refund</a></div>
                <div className="contact_to_buyer"><a href="#">Contact to Buyer</a></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="fixed-table-pagination">
        <div className="row">
          <div className="col-lg-8"> </div>
          <div className="col-lg-4">
            <div className="pull-right pagination d-flex">
              <div className="result">
                <select>
                  <option>20 results per page</option>
                  <option>10 results per page</option>
                </select>
              </div>
              <ul className="pagination">
                <li className="page-pre"><a href="#"><i className="fa-solid fa-arrow-left" /></a></li>
                <li className="page-number"><a href="#">1</a></li>
                <li className="page-number"><a href="#">2</a></li>
                <li className="page-number"><a href="#">3</a></li>
                <li className="page-next"><a href="#"><i className="fa-solid fa-arrow-right" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default page