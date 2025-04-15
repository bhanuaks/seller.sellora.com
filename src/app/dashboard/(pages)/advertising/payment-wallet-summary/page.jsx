"use client"
import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Page() {
  
  const [openModal, setOpenModal] = useState(false);
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
        <div className="col-lg-4 col-md-4 col-6">
          <div className="navigator-breadcrumb-wrapper text-center">
            <h3>Wallet Summary</h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-6">
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
                            /> 
                   Help
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
          {/* <div class="col-lg-12 text-center">
                  <a href="#" class="campaign-btn">Create Campaign</a>
              </div> */}
          <div className="col-12">
            <div className="manager walletS">
              <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 align-items-center">
                <div className="col">
                  <div className="manager_boxs">
                    <h5>Ads Wallet Balance</h5>
                    <h6>$200.00</h6>
                  </div>
                </div>
                <div className="col">
                  <div className="manager_boxs">
                    <h5>Accruing charges</h5>
                    <h6>$0.00</h6>
                  </div>
                </div>
                <div className="col">
                  <div className="manager_boxs">
                    <h5>Ads Billed Amount</h5>
                    <h6>$100.00</h6>
                  </div>
                </div>
                <div className="col">
                  <div className="manager_boxs">
                    <h5>Total balance</h5>
                    <h6>$100.00</h6>
                  </div>
                </div>
                <div className="col">
                  <a
                    href="#"
                    className="campaign-btn mb-1" 
                   onClick={()=>setOpenModal(true)}
                  >
                    Add Money
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt--30 campaigns-table transaction">
      <div className="row pt-5">
        <div className="col-lg-6 col-12">
          <div className="row align-items-center">
            <div className="col-md-3 col-12">
              <h5>All Transactions</h5>
            </div>
            <div className="col-md-6 col-12">
              <div className="searchCam position-relative">
                <form role="search" className="sr-input-func col-lg-auto">
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                  <input
                    type="text"
                    placeholder="Search Campaign "
                    className="search-int form-control"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="table-responsive wall1">
          <table
            className="table table-bordered table-striped"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table position-relative export">
                <th colSpan={12}>
                  <div className="table_menu">
                    <ul>
                      <li>
                        <Link href={`${baseUrl}dashboard/advertising/ads-bills-wallet-summary`}>Ads Bills</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/advertising/payment-wallet-summary`} className="active">
                          Payment{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <a href="#" className="campaign-btn mb-0">
                      Export All
                    </a>
                  </span>
                </th>
              </tr>
              <tr className="winner__table">
                <th>Date Paid</th>
                <th>Type </th>
                <th>Deposit Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="winner__table">
                <td className="text-center">Dec 3, 2024</td>
                <td className="text-center small-size">Online payment</td>
                <td className="text-center small-size">$200.00</td>
                <td className="text-center small-size">Success</td>
                <td className="text-center small-size">
                  <a className="downpdf" href="file.pdf" download="file.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr className="winner__table">
                <td className="text-center">Dec 3, 2024</td>
                <td className="text-center small-size">Online payment</td>
                <td className="text-center small-size">$200.00</td>
                <td className="text-center small-size">Success</td>
                <td className="text-center small-size">
                  <a className="downpdf" href="file.pdf" download="file.pdf">
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  </div>

  
  {openModal && ( 
       

<div className="modal fade show d-block view_reasons" tabIndex={-1} role="dialog">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title text-center" id="exampleModalLabel">
          Add Money
        </h2>
        <button
          type="button"
          className="btn-close"
          onClick={()=>setOpenModal(false)}
        />
      </div>
      <div className="modal-body">
        <div className="money-box">
          <div className="row pb-5">
            <div className="col-lg-4 col-12">
              <h4 className="mb-0">Enter Amount</h4>
            </div>
            <div className="col-lg-6 col-12">
              <input type="text" className="amount" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 pt-3">
              <div className="mb-3">
                <input
                  id="cb1"
                  className="checkbox"
                  type="radio"
                  defaultChecked=""
                />
                <span>Credit/Debit Cards</span>
              </div>
              <div>
                <input id="cb1" className="checkbox" type="radio" />
                <span>Net Banking</span>
              </div>
            </div>
            <div className="col-12 pt-5 text-center">
              <a href="#" className="campaign-btn mb-1">
                Proceed to Pay
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="modal-footer">
                  <button type="button" class="btn btn-primary">Proceed to Pay</button>
              </div> */}
    </div>
  </div>
</div>




    
  )}
  
  {openModal && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}



</>

  )
}

export default Page