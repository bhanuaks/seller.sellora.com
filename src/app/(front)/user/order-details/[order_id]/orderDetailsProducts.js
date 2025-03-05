import { baseUrl, currencyCode, main_thumb_img_path, variant_thumb_img_path1 } from '@/Http/helper'
import React from 'react'

const OrderDetailsProducts = ({prodData}) => {
  return (
    <div className="oreder_dfdjkl"  >
                        <div className="itemDetails">
                          <div className="itemInfo">
                            <div className="itemImg">
    
                              {prodData.variant_id?.withImage == "Yes" ? (
                                <img src={`${baseUrl}${variant_thumb_img_path1}${prodData.variant_id?.image_1}`} />
                              ) : (
                                <img src={`${baseUrl}${main_thumb_img_path}${prodData.product_id?.main_image}`} />
                              )}
                            </div>
                            <div className="itemDesc">
                              {prodData.order_status === 4 && (
                                <h3> Delivered 
                                        {/* <b>08-Nov-2024</b> */}
                                </h3>
                              )}
                              {prodData.order_status === 0 && (
                                <h3 style={{color:'#bdbd17'}}>Pending</h3>
                              )}
                             
                             
                              <h4>
                                {prodData.product_name}
                              </h4>
                              <div className='row'>
                                <div className='col-lg-4'>
                                  {prodData.variants && (
                                    Object.entries(prodData.variants).map((item, index) => (
                                      <p key={index}>{item[0]}: <span>{item[1]}</span></p>
                                    ))
                                  )}
                                  <span className="itemPrice2">{currencyCode(prodData.currency)}{prodData.price.toLocaleString()}</span>
                                </div>
                                <div className="col-lg-8">
                                  {prodData.order_status !== 4 && prodData.order_status !== 0 ? (
                                    <div className="progress-container ">
                                    <div className={`step33  ${prodData.order_status >=1? "active":""}`}>
                                      <div className={`step33-circle ${prodData.order_status >=1? "active":""}`} />
                                      <div className="step33-text">Order Confirmed</div>
                                      <div className="step33-date">(09-11-2024)</div>
                                    </div>
                                    <div className={`step33 ${prodData.order_status >=2? "active":""}`}>
                                      <div className={`step33-circle ${prodData.order_status >=2? "active":""}`} />
                                      <div className="step33-text">Shipped</div>
                                      <div className="step33-date">(11-11-2024)</div>
                                    </div>
                                    <div className={`step33 ${prodData.order_status >=3? "active":""}`}>
                                      <div className={`step33-circle ${prodData.order_status >=3? "active":""}`} />
                                      <div className="step33-text">Out for delivery</div>
                                      <div className="step33-date">(12-11-2024)</div>
                                    </div>
                                    {prodData.order_status == 4 && (
                                        <div className={`step33 ${prodData.order_status >=4? "active":""}`}>
                                      <div className={`step33-circle ${prodData.order_status >=4? "active":""}`} />
                                      <div className="step33-text">Delivered</div>
                                      <div className="step33-date">(09-11-2024)</div>
                                    </div>
                                    )}
                                    {prodData.order_status == 5 && (
                                        <div className={`step33 cancel_order ${prodData.order_status >=5? "active":""}`}>
                                      <div className={`step33-circle ${prodData.order_status >=5? "active":""}`} />
                                      <div className="step33-text">Cancelled</div>
                                      <div className="step33-date">(09-11-2024)</div>
                                    </div>
                                    )}
                                    {prodData.order_status == 6 && (
                                        <div className={`step33 ${prodData.order_status >=6? "active":""}`}>
                                      <div className={`step33-circle ${prodData.order_status >=6? "active":""}`} />
                                      <div className="step33-text">Refunded</div>
                                      <div className="step33-date">(09-11-2024)</div>
                                    </div>
                                    )}
                                    

                                    
                                  </div>
                                  ):''}
                                  
                                </div>
                              </div>
                              <div className="d-flex">
                                {prodData.order_status === 4 && prodData.variant_id.stock > 0 && prodData.variant_id.stock_status == "In Stock" ? (
                                  <>
                                    <button className="buy_again mr_10">
                                      Buy it again
                                    </button>
                                    <button className="buy_again mr_10" onClick={(e) => addToCart(e, prodData.product_id?._id, prodData.variant_id?._id)}>Add To Cart</button>
                                  </>
                                ) : ""}
    
                              </div>
                               {prodData.order_status === 4 && (
                                <p>
                                  <strong>
                                    Return window will no longer be accepted after
                                    08-Dec-2024.
                                  </strong>
                                </p>
                               )}
                              
                            </div>
                          </div>
                          <div className="btn_group">
    
                            <a href="#">
                              <button className="gift_btn return">Order Status</button>
                            </a>
                            <a href="#">
                              <button className="gift_btn return">
                                Write a Product Review
                              </button>
                            </a>
                            <button className="buy_again">Seller Feedback</button>
                            <button className="get_support">Get Support</button>
                          </div>
                        </div>
                        <div className="clear" />
                      </div>
  )
}

export default OrderDetailsProducts