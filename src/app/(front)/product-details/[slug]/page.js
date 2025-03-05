"use client";
import { baseUrl, variantArrayFormat } from '@/Http/helper'
import Link from 'next/link'
import React, { useState, useEffect, Suspense, lazy, useContext } from 'react'
import NavCategory from '../../frontComponents/productDetails/NavCategory';
import VariantImage from '../../frontComponents/productDetails/VariantImage';
import Variants from '../../frontComponents/productDetails/Variants';
import SpecialOfferP from '../../frontComponents/productDetails/SpecialOfferP';
// import SimilarItem from '../../frontComponents/productDetails/SimilarItem';
import KeyAttributes from '../../frontComponents/productDetails/KeyAttributes';
import QuickDelivery from '../../frontComponents/productDetails/QuickDelivery';
import QuestionsAnswers from '../../frontComponents/productDetails/QuestionsAnswers';
import CustomerReviews from '../../frontComponents/productDetails/CustomerReviews';
import ProductDescription from '../../frontComponents/productDetails/ProductDescription';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import ProductImageSkeletonLoader from '@/app/skeleton_loader/product_image';
import ProductDetailsSkeletonLoader from '@/app/skeleton_loader/productDetails';
import ListingLoaderSkeleton from '@/app/skeleton_loader/listingLoader';
import { CartContaxt } from '@/app/contaxtData/cartContaxt';

const SimilarItem = lazy(() => import('../../frontComponents/productDetails/SimilarItem'))
const page = () => {

  const ProductDetails = () => {

    const router = useRouter();
    const { addToCartProduct } = useContext(CartContaxt)
    const [productDetails, setProductDetails] = useState(null);
    const [variantList, setVariantList] = useState([]);
    const [variantArrayList, setVariantArrayList] = useState([]);
    const [selectedVariant, setSelectedVariant] = useState({});
    const [changeVariant, setChangeVariant] = useState({});
    const [onClickVarient, setOnClickVarient] = useState({});
    const [attributes, setAttributes] = useState([]);
    // const attributes = variantArrayFormat(variantList);
    const [proccess, setProccess] = useState(false)
    const searchParams = useSearchParams();
    const { slug } = useParams();
    const productId = searchParams.get('pId');
    const variantId = searchParams.get('vId');

    const fetchProduct = async (filters = {}) => {
      try {
        const url = new URL(`${baseUrl}/api/product-details`);

        Object.keys(filters).forEach((key) => {
          if (filters[key]) {
            url.searchParams.append(key, filters[key]);
          }
        });

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProductDetails(data.data.productData);
        setVariantList(data.data.variantList);
        
        setAttributes(variantArrayFormat(data.data.variantList))
        setVariantArrayList(data.data.variantArray) 
        
      } catch (error) {
        console.error('Error fetching products:', error);
        return [];
      }
    }


    useEffect(() => {

      if (slug || productId) {
        fetchProduct({ slug, productId });
      }

    }, [slug, productId]);


    async function addToCart(e) {
      e.preventDefault()
      setProccess(true)
      const resData = await addToCartProduct(productDetails._id, selectedVariant.variant_id, 1)
      if (resData) {
        router.push(`${baseUrl}cart`)
      }
      setProccess(false)
    }








    if (!productDetails) {
      return (
        <div className='row' style={{ margin: '40px 0px' }}>
          <div className="col-lg-7">
            <ProductImageSkeletonLoader />
          </div>
          <div className="col-lg-5">
            <ProductDetailsSkeletonLoader />
          </div>
        </div>
      )
    }


    return (
      <div className="details_page_outer">

        
        <NavCategory productDetails={productDetails}></NavCategory>

        <div className="section-seperator">
          <div className="container">
            <hr className="section-seperator" />
          </div>
        </div>

        <div className="rts-chop-details-area rts-section-gap">
          <div className="container">
            <div className="shopdetails-style-1-wrapper">
              <div className="row">
                <div className="col-lg-7">
                  <VariantImage variantList={variantList} productDetails={productDetails} changeVariant={changeVariant} />

                  <ProductDescription productDetails={productDetails} ></ProductDescription>

                </div>
                <div className="col-lg-5">
                  <div className="contents">
                    <div className="pro-details-brand">

                      <span>

                        Brand:
                        {productDetails && Object.keys(productDetails).length > 0 && (
                          <Link href="#">{productDetails.brand_id.name}</Link>
                        )}

                      </span>
                    </div>
                    <span className="product-title">
                      {productDetails && Object.keys(productDetails).length > 0 && (
                        <h2 className="product-title">{productDetails.product_name}</h2>
                      )}
                    </span>
                    <div className="product-status">
                      <div className="rating-stars-group">
                        <div className="rating-star">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-star">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-star">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-star">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-star">
                          <i className="fas fa-star" />
                        </div>
                        <span>(4.6) 10 Reviews</span>
                      </div>
                    </div>

                    <Variants attributes={attributes}
                      setChangeVariant={setChangeVariant}
                      setOnClickVarient={setOnClickVarient}
                      variantArrayList={variantArrayList}
                      selectedVariant={selectedVariant}
                      setSelectedVariant={setSelectedVariant}
                      variantId={variantId}
                      productDetails={productDetails}
                    ></Variants>
                    <div className="mt-5 product-bottom-action">

                     
                      {changeVariant.stock <= 0 || changeVariant.stock_status == "out Of stock"? (
                        <div style={{color:'red', fontSize:'15px'}}>out of stock</div>
                      ):(
                        <>
                        {/* add to cart button */}
                        <Link href="/cart" className={`add_to_cart radious-sm `} onClick={(e) => addToCart(e)}
                            style={{pointerEvents:`${proccess?"none":""}`}}> 
                              <div className="btn-text">
                                <div style={{display:'flex', justifyContent:'center', alignItems:'center',gap:'2px'}}> 
                                {proccess && (<button className="loading" > continue</button>)}  Add To Cart</div> 
                                </div> 
                            </Link>

                           {/* buy now  button */}
                          <Link href="cart" className="buy_now ml--20">
                              <div className="btn-text"> Buy Now </div>
                            </Link>
                        </>
                      )}
                      
                    </div>
                    <div className="product-uniques">
                      <ul>
                        <li>
                          <span>Ships from</span>
                          <span className="colon">: </span> Gadget Zone
                        </li>
                        <li>
                          <span>Seller</span>
                          <span className="colon">: </span>
                          <Link href={`${baseUrl}seller-details/${productDetails?.seller_id}`}>
                            <strong>Gadget Zone</strong>
                          </Link>
                          <span className="rating_2312">4.7*</span>
                        </li>
                        <li>
                          <span>Returns</span>
                          <span className="colon">: </span> 30 day refund/replacement
                        </li>
                      </ul>
                    </div>
                    <div className="brand_list">
                      <ul>
                        {Object.keys(onClickVarient).map((key, item) => (
                          <li key={key}>
                            <span>{key.toUpperCase()}</span> {onClickVarient[key]}
                          </li>
                        ))}
                        <li>
                          <span>Manufacture </span>
                          {productDetails && Object.keys(productDetails).length > 0 && (
                            <>
                              {productDetails.manufacturer_details}
                            </>
                          )}
                        </li>
                      </ul>
                    </div>

                    <SpecialOfferP></SpecialOfferP>

                    <div className="row">
                      <div className="col-lg-8">
                        <div className="shop-sight-sticky-sidevbar mb--20">
                          <h6>
                            Protections for this product
                            <i className="fa fa-angle-right" />
                          </h6>
                          <div className="single-offer-area">
                            <div className="icon">
                              <img src={`${baseUrl}front/assets/images/secure.jpg`} alt="icon" />
                            </div>
                            <div className="details">
                              <h2>Secure payments</h2>
                              <p>
                                Every payment you make on Alibaba.com is secured with
                                strict SSL encryption and PCI DSS data protection
                                protocols
                              </p>
                            </div>
                          </div>
                          <div className="single-offer-area">
                            <div className="icon">
                              <img src={`${baseUrl}front/assets/images/refund.jpg`} alt="icon" />
                            </div>
                            <div className="details">
                              <h2>Easy Return &amp; Refund</h2>
                              <p>
                                Claim a refund if your order is missing or arrives
                                with product issues, plus free local returns for
                                defects on qualifying purchases
                              </p>
                            </div>
                          </div>
                          <div className="not_2">
                            <p>
                              Sellora.com protects all your orders placed and paid on
                              the platform with
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <Suspense fallback={
          <div className='row'>
            <ListingLoaderSkeleton />
            <ListingLoaderSkeleton />
            <ListingLoaderSkeleton />
            <ListingLoaderSkeleton />
            <ListingLoaderSkeleton />
            <ListingLoaderSkeleton />
          </div>}>
          <SimilarItem productDetails={productDetails} />
        </Suspense>

        <KeyAttributes productDetails={productDetails} />

        <QuickDelivery></QuickDelivery>

        <QuestionsAnswers></QuestionsAnswers>

        <CustomerReviews></CustomerReviews>
      </div>

    )
  }


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetails />
    </Suspense>
  )



}


export default page