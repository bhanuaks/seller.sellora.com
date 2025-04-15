import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 hub1">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            {/* <a href="#"><i class="fa-solid fa-arrow-left"></i> Go to Seller hub</a> */}
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-6">
          <div className="navigator-breadcrumb-wrapper text-center">
            {/* <h3>Ad format</h3> */}
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-6">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li>
                <a href="#">
                  <i className="fa-solid fa-wallet" /> Wallet
                </a>{" "}
              </li>
              <li>
                <a href="#">
                  <Image src={`${baseUrl}front/assets/images/hand_shaking.png`} 
                  loading='lazy'
                  alt=''
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{width:"auto", height:"auto"}}
                  /> Help
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="details_page_outer">
    <div className="container">
      <div className="row mt--30">
        <div className="col-lg-6">
          <div className="nnn_dform">
            <div className="registration_form_single-input">
              <label htmlFor="f-name">Campaign Name</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="compaign-bot-sec pt-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="nnn_dform mt-3">
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <div className="registration_form_single-input">
                    <label htmlFor="f-name"> Add Daily Budget</label>
                    {/* <input type="text"> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="registration_form_single-input">
                    {/* <label for="f-name">Campaign Name</label> */}
                    <input type="text" />
                    <div className="the_minimum">(Suggested Minimum $100)</div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <div className="registration_form_single-input">
                    <label htmlFor="f-name">Set Timeframe</label>
                    {/* <input type="text"> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="registration_form_single-input">
                        {/* <label for="f-name">Campaign Name</label> */}
                        <input type="date" placeholder="Start Date" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="registration_form_single-input">
                        {/* <label for="f-name">Campaign Name</label> */}
                        <input type="date" placeholder="End Date" />
                      </div>
                    </div>
                    <div className="the_minimum">
                      (The minimum time period required is 30 days.)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt--30">
          <div className="col-lg-6">
            <div className="nnn_dform">
              <div className="registration_form_single-input">
                <label htmlFor="f-name">Select Catalog</label>
                <div className="file-placeholder">
                  <label />
                  <input type="file" className="fileUpload" />
                  <div className="file-browse">
                    <span className="file-browse-txt">
                      Search by product name, SIN, or SKU
                    </span>
                    <span className="browse browse-compaign">Select</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-lg-6 pe-0">
            <div className="manual-compaign-table">
              <div className="table-responsive">
                <div className="rightselect">
                  <h5> &nbsp;</h5>
                </div>
                <table className="table table-bordered table-striped br-none compaign-table">
                  <tbody>
                    <tr className="winner__table" style={{ border: "none" }}>
                      <td className="text-center check-bg">
                        <input
                          id="cb1"
                          className="checkbox"
                          type="checkbox"
                          defaultChecked=""
                        />
                      </td>
                      <td style={{ minWidth: 80 }}>
                        
                        <Image src={`${baseUrl}front/assets/images/preview02.jpg`} 
                                loading='lazy'
                                alt=''
                                width={0}
                                height={0}
                                sizes='100vw'
                                style={{width:"auto", height:"auto"}}
                                 className="manual-campaign-img"
                                />
                      </td>
                      <td>
                        <div className="product_details_content mamual_product_details_content">
                          <p>
                            Lora's Choice V34 Purple Toothpaste Colour
                            Corrector, Tooth Stain Concealer, Teeth Whitening
                            Booster, Colour Correcting, Toothpaste Color
                            Corrector Serum Brighten and Whiten Teeth -30ml
                          </p>
                          <ul>
                            <li className="mamuallist">
                              <span>SIN:</span> B0DDYCB79B
                            </li>
                            <li>
                              <span>SKU:</span> Loras Choice Purple Toothpaste
                            </li>
                            <li className="mamuallist">
                              <span>Price: </span> $24{" "}
                            </li>
                            <li>
                              <span>Stock: </span> 10{" "}
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr className="winner__table" style={{ border: "none" }}>
                      <td className="text-center">
                        <input
                          id="cb1"
                          type="checkbox"
                          defaultChecked=""
                          disabled=""
                        />
                      </td>
                      <td style={{ minWidth: 80 }}>
                       
                        <Image src={`${baseUrl}front/assets/images/preview02.jpg`} 
                  loading='lazy'
                  alt=''
                  width={0}
                  height={0}
                  sizes='100vw'
                    className="manual-campaign-img"
                  style={{width:"auto", height:"auto"}}
                  />
                      </td>
                      <td>
                        <div className="product_details_content mamual_product_details_content">
                          <p>
                            Loras Choice V34 Purple Toothpaste Colour Corrector,
                            Tooth Stain Concealer, Teeth Whitening Booster,
                            Colour Correcting, Toothpaste Color Corrector Serum
                            Brighten and Whiten Teeth -30ml
                          </p>
                          <ul>
                            <li className="mamuallist">
                              <span>SIN:</span> B0DDYCB79B
                            </li>
                            <li>
                              <span>SKU:</span> Loras Choice Purple Toothpaste
                            </li>
                            <li className="mamuallist">
                              <span>Price: </span> $24{" "}
                            </li>
                            <li>
                              <span>Stock: </span> 10{" "}
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-0 mt-5 mt-md-0">
            <div className="manual-compaign-table2">
              <div className="table-responsive">
                <div className="rightselect d-flex justify-content-between align-items-center">
                  <h5> Product Selected (1)</h5>
                  <ul className="match_type">
                    <li>
                      <i className="fa-solid fa-times pe-4" />
                    </li>
                  </ul>
                </div>
                <table className="table table-bordered table-striped br-none compaign-table ">
                  {/* <thead class="table__head">
           
          
              <tr class="winner__table">
                <th width="50"><input type="checkbox"></th>
                <th width="120">Order Date</th>
                <th width="150">Order ID/PO </th>
                <th style="min-width: 100px">&nbsp;</th>
                <th width="400">Product Detail</th>
                <th width="180">Customer Name</th>
                <th width="180">Shipping type </th>
                <th width="180">Ship by</th>
                <th width="180">Fulfilled by</th>
                <th width="180">Total order</th>
                <th width="180">Qty</th>
                <th>Status</th>
                <th width="180">Action</th>
                 
              </tr>
            </thead> */}
                  <tbody>
                    <tr className="winner__table rightselect3">
                      <td className="text-center check-bg">
                        <input
                          id="cb1"
                          className="checkbox"
                          type="checkbox"
                          defaultChecked=""
                        />
                      </td>
                      <td style={{ minWidth: 80 }}>
                      <Image src={`${baseUrl}front/assets/images/preview02.jpg`} 
                                loading='lazy'
                                alt=''
                                width={0}
                                height={0}
                                sizes='100vw'
                                style={{width:"auto", height:"auto"}}
                                 className="manual-campaign-img"
                                />
                      </td>
                      <td>
                        <div className="product_details_content mamual_product_details_content">
                          <p>
                            Loras Choice V34 Purple Toothpaste Colour Corrector,
                            Tooth Stain Concealer, Teeth Whitening Booster,
                            Colour Correcting, Toothpaste Color Corrector Serum
                            Brighten and Whiten Teeth -30ml
                          </p>
                          <ul>
                            <li className="mamuallist">
                              <span>SIN:</span> B0DDYCB79B
                            </li>
                            <li>
                              <span>SKU:</span> Loras Choice Purple Toothpaste
                            </li>
                            <li className="mamuallist">
                              <span>Price: </span> $24{" "}
                            </li>
                            <li>
                              <span>Stock: </span> 10{" "}
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container pt-80">
      <div className="row g-4">
        <div className="col-12">
          <div className="outerhead1">
            <h2>Cost control</h2>
            <p>
              You can now specify your desired percentage for a primary success
              metric. Set your target, and we will optimize our bidding strategy
              to help you achieve it.
            </p>
            <p>
              you can set a success metric at or below your desired percentage.
              We’ll adjust bids and add targets while your campaign runs to stay
              within your specified value. Please allow up to 14 days to achieve
              the desired results.
            </p>
            <h2>Cost per order</h2>
            <div className="cost_per_order">
              <div className="row">
                <div className="col-lg-3">
                  <input type="text" />
                  <span>(Minimum Value = 7%)</span>
                </div>
                <div className="col-lg-3">
                  <div className="orange2">%</div>
                </div>
              </div>
              <p>
                A higher percentage may drive more conversions, but we recommend
                not setting it higher than the product price you’re advertising.
                On Sellora, the minimum cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container pt-80">
      <div className="row g-4">
        <div className="col-12">
          <div className="outerhead1">
            <h2>Targeting</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="compaign-1-outer h-100">
            <div className="row g-4">
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div className="breadcome-heading pb--10">
                  <form className="sr-input-func sr-input-func3">
                    <a href="#">
                      <i className="fa fa-search" />{" "}
                    </a>
                    <input
                      type="text"
                      placeholder="Search Category"
                      className="search-int search-int3 form-control"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="table-responsive ad3 target1">
              <table
                className="table table-striped compaign-1-table"
                style={{ marginTop: 10 }}
              >
                <thead className="table__head">
                  <tr>
                    <th>
                      <span className="orange3">Categories</span>
                    </th>
                    <th className="text-center">
                      <span className="orange3">Suggested CPO</span>
                    </th>
                    <th className="text-center">
                      <span className="orange3">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">
                      <a href="#" className="Toothpaste_bg">
                        Home &amp; Kitchen
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>7%-12%</li>
                          <br />
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <a href="#" className="edit add1">
                        Add
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp; </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#" className="Toothpaste_bg">
                        Beauty &amp; Health
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>7%-12%</li>
                          <br />
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <a href="#" className="edit add1">
                        {" "}
                        Add
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp; </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#" className="Toothpaste_bg">
                        Electronic
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>7%-12%</li>
                          <br />
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <a href="#" className="edit add1">
                        {" "}
                        Add
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp; </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#" className="Toothpaste_bg">
                        Garden &amp; Outdoor
                      </a>
                    </td>
                    <td>
                      {/* <div class="pri_dfdj">
                                          <ul>
                                              <li>$1.34</li>
                                              <li>$1.29 - $3.97</li>
                                          </ul>
                                      </div> */}
                      <div className="targeting_list">
                        <ul>
                          <li>7%-12%</li>
                          <br />
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <a href="#" className="edit add1">
                        Add
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="compaign-1-outer h-100">
            <div className="table-responsive ad3 target1">
              <table
                className="table table-striped compaign-1-table"
                style={{ marginTop: 10 }}
              >
                <thead className="table__head">
                  {/* <tr class="winner__table">
                                  <th colspan="15">
                                      <div class="table_menu">
                                          <ul>
                                              <li><a href="#" class="active">Keywords (0)</a></li>
                                              <li><a href="#">Exclude Keywords (0)</a></li>

                                          </ul>
                                      </div>
                                  </th>
                              </tr> */}
                  <tr className="winner__table">
                    <th colSpan={15}> </th>
                  </tr>
                  <tr className="winner__table">
                    <th>
                      <span className="orange3">Categories</span>
                    </th>
                    <th className="text-center">
                      <span className="orange3">Suggested CPO</span>
                    </th>
                    <th width={100}>
                      <span className="orange3">CPO Bid</span>
                    </th>
                    <th className="small-size">Remove all</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">
                      <a href="#" className="toothpaste_bg_bg_color">
                        Home &amp; Kitchen{" "}
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>7%-12%</li>
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <input type="text" className="add_input" />
                    </td>
                    <td>
                      <ul className="match_type text-center">
                        <li>
                          <i className="fa-solid fa-times" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="">
                      <a href="#" className="toothpaste_bg_bg_color">
                        Beauty &amp; Health
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>7%-12%</li>
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <input type="text" className="add_input" />
                    </td>
                    <td>
                      <ul className="match_type text-center">
                        <li>
                          <i className="fa-solid fa-times" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="">
                      <a href="#" className="toothpaste_bg_bg_color">
                        Electronic
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>7%-12%</li>
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <input type="text" className="add_input" />
                    </td>
                    <td>
                      <ul className="match_type text-center">
                        <li>
                          <i className="fa-solid fa-times" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="">
                      <a href="#" className="toothpaste_bg_bg_color">
                        Garden &amp; Outdoor
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>7%-12%</li>
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <input type="text" className="add_input" />
                    </td>
                    <td>
                      <ul className="match_type text-center">
                        <li>
                          <i className="fa-solid fa-times" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/*  <ul class="butereio">
                          <li><a href="#">Save</a> </li>
                          <li><a href="#" class="without_bg">Cancel</a> </li>
                      </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt--30 mb--20">
      <div className="row g-4">
        <div className="col-12">
          <div className="outerhead1">
            <h2>
              Please select a specific product category otherwise, a category
              will not be added
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="submit_campaing">
            <ul>
              <li>
                <a href="#">Submit Campaign</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default page