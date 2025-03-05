"use client"
import { baseUrl, getOffPrecentage, main_thumb_img_path } from "@/Http/helper";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const SimilarItem = ({ productDetails }) => {

  const [similarProduct, setSimilarProduct] = useState([])
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [enableNavigation, setEnableNavigation] = useState(false);
  useEffect(() => {

    fetch(`${baseUrl}api/product/similar-product?product_id=${productDetails?._id || ""}`, {
      method: "GET"
    }).then((response) => {

      if (!response.ok) {
        throw new Error("Network Error");
      }
      return response.json();
    }).then((res) => {
      if (res.status) {
        setSimilarProduct(res.data.similarProduct)
      }
    }).catch((error) => {
      console.log(error);
    })
  }, [productDetails])


  // slide responsive data
  
  useEffect(() => {
    const updateSlidesPerView = () => {
      let newSlidesPerView = 1;

      if (window.innerWidth >= 1024) {
        newSlidesPerView = 5;
      } else if (window.innerWidth >= 768) {
        newSlidesPerView = 3;
      } else {
        newSlidesPerView = 1;
      }

      setSlidesPerView(newSlidesPerView);
      setEnableNavigation(similarProduct.length > newSlidesPerView);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);


  if(similarProduct.length == 0){
    return(<></>)
  }


  return (
    <>
      <div
        className="tranding-items-tab-area-start rts-section-gap mb--40"
        bis_skin_checked={1}
      >
        <div className="container" bis_skin_checked={1}>
          <div className="row" bis_skin_checked={1}>
            <div className="col-lg-12" bis_skin_checked={1}>
              <div className="title-area-between" bis_skin_checked={1}>
                <h2 className="title-left"> Similar item</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Swiper
            spaceBetween={30}  
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}  
            className="swiper-container"
            slidesPerView={slidesPerView}
            navigation={enableNavigation}
          >
            {similarProduct.length > 0 ? similarProduct.map((product, index)=>(
              <SwiperSlide key={index}>
              <div className="slide-content"><div className="swiper-slide">
                <div className="single-shopping-card-one deals-of-day">
                  <div className="image-and-action-area-wrapper">
                    <a href={`${baseUrl}/product-details/${product.slug}?pId=${product._id}&vId=${product.variant?._id}`}>
                      <img
                        src={`${baseUrl}${main_thumb_img_path}${product.main_image}`}
                        alt="grocery"
                      />
                    </a>
                    <div className="action-share-option">
                      <div className="single-action openuptip message-show-action">
                        <i className="fa-light fa-heart" />
                      </div>
                      <div className="single-action openuptip cta-quickview product-details-popup-btn">
                        <i className="fa-regular fa-eye" />
                      </div>
                    </div>
                  </div>
                  <div className="body-content">
                    <div className="start-area-rating">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <a href={`${baseUrl}/product-details/${product.slug}?pId=${product._id}&vId=${product.variant?._id}`}>
                      <h4 className="title">{product.product_name}</h4>
                    </a>
                    <div className="price-area">
                      <span className="current">${product.variant && product.variant.consumerSalePrice.toFixed(2)}</span>
                      <div className="previous">${product.variant && product.variant.msrp.toFixed(2)}</div>
                    </div>
                    <div className="min-off">
                      Min. {product.variant? getOffPrecentage(product.variant.msrp, product.variant.consumerSalePrice).toFixed(2):0}% <span>Off</span>
                    </div>
                    <div className="cart-counter-action">
                      <a href="#" className="rts-btn btn-primary radious-sm with-icon"  >
                        <div className="btn-text"> Add To Cart </div>
                        <div className="arrow-icon"> <i className="fa-regular fa-cart-shopping" />
                        </div>
                        <div className="arrow-icon">   <i className="fa-regular fa-cart-shopping" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </SwiperSlide>
            )):null}
            

          </Swiper>

        </div>

      </div>

    </>
  )
}
export default SimilarItem;