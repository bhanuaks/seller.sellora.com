"use client"
import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function Page() {

  const router = useRouter();
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 hub1">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <Link href={`${baseUrl}dashboard`}>
              <i className="fa-solid fa-arrow-left" /> Go to Seller hub
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-7">
          <div className="navigator-breadcrumb-wrapper text-center">
            <h3>Choose a campaign type</h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-5">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li>
                <Link href={`${baseUrl}dashboard/advertising/payment-wallet-summary`}>
                  <i className="fa-solid fa-wallet" /> Wallet
                </Link>{" "}
              </li>
              <li>
                <a href="#">
                  <Image src={`${baseUrl}front/assets/images/hand_shaking.png`}
                  alt=''
                  width={0}
                  height={0}
                  sizes='100vw'
                  loading='lazy'
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
    <div className="mt-5">
      <div className="container">
        <div className="row">
          {/* <div class="col-lg-12">
        <div class="stay_informed_heding ads_help_heading">How Ads Help Grow Your Orders:</div>
      </div> */}
          <div className="col-lg-4 offset-lg-2">
          
            <div className="boxs_1 adver_boxs campaign_box campaign_box2"  onClick={()=>router.push(`${baseUrl}dashboard/advertising/manual-campaign`)}  >
              <div className="heding_fl">
               
                <div>Manual Campaign</div>
              </div>
              <p>Promote only the catalogs you select</p>
              {/* <div class="explore_button"><a href="#">Explore Account Health</a></div> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="boxs_1 adver_boxs campaign_box" onClick={()=>router.push(`${baseUrl}dashboard/advertising/smart-campaign`)} >
              <div className="heding_fl"> 
                <div>Smart Campaign</div>
              </div>
              <p>Effortlessly select and manage catalogs automatically</p>
              {/* <div class="explore_button"><a href="#">Explore Account Health</a></div> */}
            </div>
          </div>
          {/* <div class="col-lg-12 text-center mt--20">
        <div class="send"><a href="#">Send your Feedback</a></div>
      </div> */}
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center manual-campaign-tit">
            <h2>Manual Campaign</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="nnn_dform">
            <div className="registration_form_single-input">
              <label htmlFor="f-name">Campaign Name</label>
              <input type="text" />
            </div>
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
      <div className="row mt-5">
        <div className="col-lg-6 pe-0">
          <div className="manual-compaign-table">
            <div className="table-responsive">
              <div className="rightselect">
                <h5> &nbsp;</h5>
              </div>
              <table className="table table-bordered table-striped br-none compaign-table">
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
                  <tr className="winner__table" style={{ borderTop: "none" }}>
                    <td className="text-center check-bg">
                      <input
                        id="cb1"
                        className="checkbox"
                        type="checkbox"
                        defaultChecked=""
                      />
                    </td>
                    <td style={{ minWidth: 80 }}>
                       
                      <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                        alt=''
                        width={0}
                        height={0}
                        sizes='100vw'
                        loading='lazy'
                        style={{width:"auto", height:"auto"}}
                         className="manual-campaign-img"
                        />
                    </td>
                    <td>
                      <div className="product_details_content mamual_product_details_content">
                        <p>
                          Loras Choice V34 Purple Toothpaste Colour Corrector,
                          Tooth Stain Concealer, Teeth Whitening Booster, Colour
                          Correcting, Toothpaste Color Corrector Serum Brighten
                          and Whiten Teeth -30ml
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
                  <tr className="winner__table">
                    <td className="text-center">
                      <input
                        id="cb1"
                        type="checkbox"
                        defaultChecked=""
                        disabled=""
                      />
                    </td>
                    <td style={{ minWidth: 80 }}>
                    
                       <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                        alt=''
                        width={0}
                        height={0}
                        sizes='100vw'
                        loading='lazy'
                        style={{width:"auto", height:"auto"}}
                         className="manual-campaign-img"
                        />

                    </td>
                    <td>
                      <div className="product_details_content mamual_product_details_content">
                        <p>
                          Loras Choice V34 Purple Toothpaste Colour Corrector,
                          Tooth Stain Concealer, Teeth Whitening Booster, Colour
                          Correcting, Toothpaste Color Corrector Serum Brighten
                          and Whiten Teeth -30ml
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
                      
                       <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                        alt=''
                        width={0}
                        height={0}
                        sizes='100vw'
                        loading='lazy'
                        style={{width:"auto", height:"auto"}}
                         className="manual-campaign-img"
                        />
                    </td>
                    <td>
                      <div className="product_details_content mamual_product_details_content">
                        <p>
                          Loras Choice V34 Purple Toothpaste Colour Corrector,
                          Tooth Stain Concealer, Teeth Whitening Booster, Colour
                          Correcting, Toothpaste Color Corrector Serum Brighten
                          and Whiten Teeth -30ml
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
    <div className="compaign-bot-sec">
      <div className="container">
        <div className="row">
          <div>
            <p className="compaign-bot-content compaign-bot-content2">
              Set default bid
            </p>
          </div>
          <div className="col-lg-12">
            <div className="nnn_dform mt-1">
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <div className="registration_form_single-input">
                    <label htmlFor="f-name">Default bid</label>
                    {/* <input type="text"> */}
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="registration_form_single-input">
                    {/* <label for="f-name">Campaign Name</label> */}
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="compaign-1-outerhead">
            <h4>Add keywords</h4>
          </div>
          <div className="compaign-1-outer h-100">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div className="breadcome-heading pb--10">
                  <form role="search" className="sr-input-func sr-input-func3">
                    <input
                      type="text"
                      placeholder="Search keywords"
                      className="search-int search-int3 form-control"
                    />
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </form>
                </div>
              </div>
            </div>
            <div className="table-responsive ad3">
              <table
                className="table table-striped compaign-1-table"
                style={{ marginTop: 10 }}
              >
                <thead className="table__head key1">
                  <tr>
                    <th>Keyword</th>
                    <th className="text-center">Sugg. Bid</th>
                    <th className="text-center">Match Type</th>
                    <th className="text-center"> &nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">
                      <a href="#" className="Toothpaste_bg">
                        Toothpaste
                      </a>
                    </td>
                    <td>
                      <div className="pri_dfdj">
                        <ul>
                          <li>$2.21</li>
                          <li>$2.21</li>
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <ul className="phrase">
                        <li>Phrase</li>
                        <li>Exact</li>
                      </ul>
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
                        Paste
                      </a>
                    </td>
                    <td>
                      <div className="pri_dfdj">
                        <ul>
                          <li>$2.21</li>
                          <li>$2.21</li>
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <ul className="phrase">
                        <li>Phrase</li>
                        <li>Exact</li>
                      </ul>
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
                        Bottle
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
                        Watch
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-3 mt-md-0">
          <div className="compaign-1-outerhead">
            <h4>Targeting keywords</h4>
          </div>
          <div className="compaign-1-outer ">
            <div className="table-responsive">
              <table
                className="table table-striped compaign-1-table"
                style={{ marginTop: 10 }}
              >
                <thead className="table__head">
                  <tr className="winner__table border-bottom">
                    <th colSpan={15}>
                      <div className="table_menu">
                        <ul>
                          <li>
                            <a href="#" className="active">
                              Keywords (0)
                            </a>
                          </li>
                          <li>
                            <a href="#">Exclude Keywords (0)</a>
                          </li>
                        </ul>
                      </div>
                    </th>
                  </tr>
                  <tr className="winner__table">
                    <th colSpan={15}> </th>
                  </tr>
                  <tr className="winner__table key1">
                    <th width={150}>Keyword</th>
                    <th width={150}>Sugg. Bid</th>
                    <th width={150}>Match Type</th>
                    <th width={150} className="text-center">
                      Bid
                    </th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">
                      <a href="#" className="toothpaste_bg_bg_color">
                        Toothpaste
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>$2.21</li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <ul className="match_type">
                        <li>Phrase</li>
                      </ul>
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
                    <td>
                      <a href="#" className="toothpaste_bg_bg_color">
                        Paste
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>$2.45</li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <ul className="match_type">
                        <li>Exact</li>
                      </ul>
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
              <ul className="butereio">
                <li>
                  <a href="#">Save</a>{" "}
                </li>
                <li>
                  <a href="#" className="without_bg">
                    Cancel
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="compaign-bot-sec">
      <div className="container">
        <div className="row">
          <div>
            <p className="compaign-bot-content">Add Daily Budget</p>
          </div>
          <div className="col-lg-12">
            <div className="nnn_dform mt-3">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="registration_form_single-input">
                    <label htmlFor="f-name">
                      {" "}
                      <input id="cb1" type="checkbox" defaultChecked="" />{" "}
                      Select budget manually
                    </label>
                    {/* <input type="text"> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="registration_form_single-input">
                    {/* <label for="f-name">Campaign Name</label> */}
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="registration_form_single-input">
                    <label htmlFor="f-name">Set Timeframe</label>
                    {/* <input type="text"> */}
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="registration_form_single-input">
                    {/* <label for="f-name">Campaign Name</label> */}
                    <input type="date" placeholder="Start Date" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="registration_form_single-input">
                    {/* <label for="f-name">Campaign Name</label> */}
                    <input type="date" placeholder="End Date" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right_button">
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

export default Page