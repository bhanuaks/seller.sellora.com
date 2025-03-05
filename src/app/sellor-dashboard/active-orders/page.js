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
            <h3>Orders</h3>
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
        {/*   <div class="col-lg-6">
  <div class="right_button">
    <ul>
      <li><a href="add-catalog.html">Add Single Listing</a></li>
      <li><a href="add-catalog.html">Add Listing in Bulk</a></li>
    </ul>
  </div>
</div> */}
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
                <div className="table_menu">
                  <ul>
                    <li><a href="#" className="active">Unshipped Order (1)</a></li>
                    <li><a href="#">Shipped Order (3)</a></li>
                    <li><a href="#">Canceled (0)</a></li>
                    <li><a href="#">All Order (3)</a></li>
                  </ul>
                </div>
              </th>
            </tr>
            <tr className="winner__table">
              <th colSpan={15}>
                <table className="table_filter">
                  <tbody><tr>
                      <td style={{"border":"none !important"}}>
                        <div className="d-flex">
                          <div className="fillter"><a href="#"><i className="fa-solid fa-filter" /></a></div>
                          <div className="dropdown demo_drop">
                            <button className="btn dropdown-toggle menu_button" type="button" data-bs-toggle="dropdown" aria-expanded="false"> Status </button>
                            {/*  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <div class="default">
<ul>
  <li>
    <label>
      <input type="radio" name="default">
      ...</label>
  </li>
  <li>
    <label>
      <input type="radio" name="default">
      ... </label>
  </li>
  <li>
    <label>
      <input type="radio" name="default">
      ...</label>
  </li>
  <li>
    <form role="search" class="sr-input-func2">
      <input type="text" placeholder=" " class="search-int form-control">
      <a href="#"><i class="fa fa-search"></i></a>
    </form>
  </li>
</ul>
    </div>
  </ul> */}
                          </div>
                          <div className="dropdown demo_drop">
                            <button className="btn dropdown-toggle menu_button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Ship by</button>
                            {/*  <ul class="dropdown-menu list_style_1" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">...</a></li>
  </ul> */}
                          </div>
                          <div className="dropdown demo_drop">
                            <button className="btn dropdown-toggle menu_button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> Order date </button>
                            {/*  <ul class="dropdown-menu list_style_1" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">...</a></li>
  </ul> */}
                          </div>
                          <div className="dropdown demo_drop">
                            <button className="btn dropdown-toggle menu_button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Condition</button>
                            {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <div class="default">
<ul>
  <li>
    <label>
      <input type="radio" name="default" >
      ...</label>
  </li>
  <li>
    <label>
      <input type="radio" name="default">
      ...</label>
  </li>
  <li>
    <label>
      <input type="radio" name="default">
      ...</label>
  </li>
  <li>
    <label>
      <input type="radio" name="default">
     ...</label>
  </li>
</ul>
    </div>
  </ul> */}
                          </div>
                          <div className="menu_tab">
                            <ul>
                              <li className="apply_button"><a href="#">Apply</a></li>
                              <li className="apply_button"><a href="#">Reset</a></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td style={{"border":"none !important"}} />
                    </tr>
                  </tbody></table>
              </th>
            </tr>
            <tr className="winner__table">
              <th width={50}><input type="checkbox" /></th>
              <th width={120}>Order Date</th>
              <th width={150}>Order ID/PO </th>
              <th width={180} />
              <th width={400}>Product Detail</th>
              <th width={180}>Customer Name</th>
              <th width={180}>Shipping type </th>
              <th width={180}>Ship by</th>
              <th width={180}>Fulfilled by</th>
              <th width={180}>Total order</th>
              <th width={180}>Qty</th>
              <th>Status</th>
              <th width={180}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="winner__table">
              <td className="text-center"><input type="checkbox" /></td>
              <td>09/31/2024<br />
                3:38 PM</td>
              <td>
                <div className="order_id_01"><span>Order Id</span>
                  200012561663320</div>
                <div className="order_id_01"><span>Purchase Order</span>
                  108934027144465</div>
              </td>
              <td><img src={`${baseUrl}front/assets/images/preview01.jpg`} /></td>
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
              <td className="text-center">Paula</td>
              <td className="text-center">Standard</td>
              <td className="text-center">12/04/2024</td>
              <td className="text-center">Seller</td>
              <td className="text-center">$38.40</td>
              <td className="text-center">1</td>
              <td className="text-center">
                <div className="unshipped"><a href="#">Unshipped</a></div>
              </td>
              <td>
                <div className="listing22">
                  <select className>
                    <option>Confirm Order</option>
                    <option>Cancel Order</option>
                    <option>Print Packing Slip</option>
                    <option>Refund</option>
                  </select>
                </div>
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