"use client"
import { baseUrl, getPrecentageAmount, getVariantAttribute } from '@/Http/helper'
import React, { useContext, useEffect, useState } from 'react'
import $ from 'jquery'
import '../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { AppContext } from '@/app/contaxtData/contextData'

const VariantEditModel = ({ openModel, closeVariantModal, productVariant, refreshList, setRefreshList, thresholdData, setThresholdData }) => {
  const {globalData, setGlobalData} = useContext(AppContext)

    const [variant, setVariant] = useState(null)
    const [errors, setErrors] = useState({})

   
    const [variants, setVariants] = useState(
        {
            sku: "",
            listingStatus: 1,
            msrp: "",
            consumerSalePrice: "",
            businessSalePrice: "",
            currency: "USD",
            taxCode: "",
            taxRate: "",
            fulfillmentBy: "Sellora",
            shippingProvider: "Merchant",
            stock: "",
            customAttributes: {},
        },
    );

    const [variantData, setVariantData] = useState(
        {
            product_id: '',
            category_id: '',
            sku: "",
            listingStatus: 1,
            msrp: "",
            consumerSalePrice: "",
            businessSalePrice: "",
            currency: "USD",
            taxCode: "",
            taxRate: "",
            fulfillmentBy: "Sellora",
            shippingProvider: "Merchant",
            stock: "",
            withImage: 'No',
            customAttributes: {},
            discount_type:"percentage"
        },
    );



    const handleInputChange = (e, index, key) => {
        const { value, name } = e.target;

        if (name == "msrp" || name == "consumerSalePrice" || name == "businessSalePrice") {
            const numericValue = value.replace(/[^0-9.]/g, '');
            setVariantData((prevVariants) => ({
                ...prevVariants,
                [name]: numericValue
            }));
            return
        }
        if (name == "stock") {
            const numericValue = value.replace(/[^0-9]/g, '');
            setVariantData((prevVariants) => ({
                ...prevVariants,
                [name]: numericValue
            }));
            return
        }
        
        setVariantData((prevVariants) => ({
            ...prevVariants,
            [name]: value
        }));

    };

    const handleInputChangeDynamicValue = (e) => {
        const { value, name } = e.target;
        setVariantData((prevVariants) => ({
            ...prevVariants,
            customAttributes: {
                ...prevVariants.customAttributes,
                [name]: value
            }
        }));
    };





    useEffect(() => {
        if (productVariant) {
            fetch(`${baseUrl}api/seller/product/get-variant`, {
                method: "POST",
                body: JSON.stringify({
                    category_id: productVariant ? productVariant.category_id : ''
                })
            }).then((response) => {
                if (!response.ok) {
                    throw new Error("Network Error")
                }
                return response.json();
            }).then((res) => {
                if (res.status) {
                    // setVariants(Object.entries(res.data.variants))
                    setVariantData(productVariant.variants)
                    if(res.data.category.category_variant){ 
                        setVariants(Object.entries(res.data.category.category_variant))
                    }
                }
                
            })
        }
    }, [productVariant])



    function saveVariantEditData(e) {
        e.preventDefault();


        const dynamicVariant = variantData.customAttributes ? Object.keys(variantData.customAttributes) :[]
        if (dynamicVariant.length == 0 && variants.length > 0) {
            Swal.fire({
                icon: "error",
                //   timer:5000,
                text: "please select atleast one variant",
                title: "Validation Message"
            })
            return
        }
        else {
            let countVariantValidate = 0;
            dynamicVariant.forEach((data) => {
                if (variantData.customAttributes[data] != "") {
                    countVariantValidate++
                }
            })
            if (countVariantValidate == 0 && variants.length > 0) {
                Swal.fire({
                    icon: "error",
                    //   timer:5000,
                    text: "please select atleast one variant",
                    title: "Validation Message"

                })
                return
            }
        }

        setErrors({})

        $('.loaderouter').css('display', 'flex')
        fetch(`${baseUrl}api/seller/product/update-and-copy-variant`, {
            method: "POST",
            body: JSON.stringify({
                ...variantData,
                threshold:thresholdData,
                seller_id: globalData?globalData.sellor._id:'',
                opration:productVariant.opration
            })
        }).then((response) => {
            if (!response.ok) {
                $('.loaderouter').css('display', 'none')
                throw new Error("Network Error")
            }
            return response.json();
        }).then((res) => {
            $('.loaderouter').css('display', 'none')
            if (res.status) {
                closeVariantModal()
                Swal.fire({
                    icon: "success",
                    text: "Saved successfully",
                    title: "Success",
                    confirmButtonText: "Okay"

                }).then(() => {
                    setRefreshList(refreshList + 1);
                })
            } else if (res.data.status_code && res.data.status_code == 400) {
                setErrors(res.data.errors)
            }
        })
    }

    function updateThresholdData(key, e){
        const { name, value } = e.target;

        const updatedthresholdData = thresholdData.map((prevData, i) =>
            i === key ? { ...prevData, [name]: value } : prevData
          );
            
        setThresholdData(updatedthresholdData)
    }

        function addMoreThreshold(e){
            e.preventDefault(); 
            setThresholdData([...thresholdData, { unit: 0,discount: 0,}])
        } 
        
        function deleteThreshold(index){ 
            const updatedthresholdData = thresholdData.filter((_, i) => i !=  index ); 
            setThresholdData(updatedthresholdData)
        } 

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            {/* loader start */}
            <div className="loaderouter"><div className="loader"></div></div>
            {/* loader end */}
            {/* The Modal */}
            <div id="myModal" className="modal" style={{ display: `${openModel ? "block" : ''}` }}>
                <div className="modal-content">
                    <h2>Edit listing</h2> <span className="close-btn" onClick={() => closeVariantModal()}>x</span>
                    <div className="container">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="choice_outer">
                                <div>
                                    <img src={`${baseUrl}${productVariant && productVariant.variants.image_1 ? productVariant.variants.image_1 : productVariant?.image_1}`} />
                                </div>
                                <p>
                                    {productVariant ? productVariant.product_name : ''}
                                </p>
                                <ul>
                                    <li>
                                        <span>SKU ID:</span> {productVariant ? productVariant.variants.sku : ''}
                                    </li>
                                    {/* <li>
                  <span>SIN:</span> B0D8W995465894
                </li>
                <li>
                  <span>Price:</span> $250
                </li> */}
                                </ul>
                            </div>
                            <form>
                                <div className="edit-listing_form">
                                    <h1>Listing information</h1>
                                    <div className="form-group">
                                        <div className="row align-items-center">
                                            <div className="col-lg-3">
                                                <label htmlFor="sku">

                                                    SKU Id<span>*</span>
                                                </label>
                                            </div>
                                            <div className="col-lg-5 col-10">
                                                <input
                                                    type="text"
                                                    name="sku"
                                                    value={variantData.sku}
                                                    onChange={(e) => handleInputChange(e, 0)}
                                                />
                                                {errors.sku && (
                                                    <span className='error_message'>{errors.sku}</span>
                                                )}
                                            </div>
                                            <div className="col-lg-1 col-2">
                                                <div>
                                                    <img src={`${baseUrl}front/assets/images/lock.jpg`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2>Status Details</h2>
                                    <div className="form-group">
                                        <div className="row align-items-center">
                                            <div className="col-lg-3">
                                                <label htmlFor="listing-status">
                                                    Listing Status<span>*</span>
                                                </label>
                                            </div>
                                            <div className="col-lg-5">
                                                <select
                                                name='listingStatus'
                                                    value={variantData.listingStatus}
                                                    onChange={(e) => handleInputChange(e, 0)}
                                                >
                                                    <option value="">Select</option>
                                                    <option value="1">Active</option>
                                                    <option value="0">Inactive</option>
                                                </select>
                                                {errors.listingStatus && (
                                                    <span className='error_message'>{errors.listingStatus}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <h2>Price details</h2>
                                    <div className="form-group">
                                        <div className="row align-items-center">
                                            <div className="col-lg-3">
                                                <label htmlFor="sale-price">
                                                    Selling price<span>*</span>
                                                </label>
                                            </div>
                                            <div className="col-lg-2 col-4">
                                                <input type="number" placeholder="$ 250"
                                                    name="consumerSalePrice"
                                                    value={variantData.consumerSalePrice}
                                                    onChange={(e) => handleInputChange(e, 0)}
                                                />
                                                {errors.consumerSalePrice && (
                                                    <span className='error_message'>{errors.consumerSalePrice}</span>
                                                )}
                                            </div>
                                            <div className="col-lg-2 col-4">
                                                <label htmlFor="sale-price" className="msrp">
                                                    MSRP
                                                </label>
                                            </div>
                                            <div className="col-lg-2 col-4">
                                                <input type="number" placeholder="$ 300"
                                                    name="msrp"
                                                    value={variantData.msrp}
                                                    onChange={(e) => handleInputChange(e, 0)}
                                                />
                                                {errors.msrp && (
                                                    <span className='error_message'>{errors.msrp}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row align-items-center">
                                            <div className="col-lg-3">
                                                <label htmlFor="msrp">Business Price</label>
                                            </div>
                                            <div className="col-lg-2 col-4">
                                                <input type="number" placeholder="$ 200"
                                                    name="businessSalePrice"
                                                    value={variantData.businessSalePrice}
                                                    onChange={(e) => handleInputChange(e, 0)}
                                                />
                                                {errors.businessSalePrice && (
                                                    <span className='error_message'>{errors.businessSalePrice}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row align-items-center">
                                            <div className="col-lg-8">
                                                <div className="quantity">

                                                    Quantity Base Discount Type
                                                </div>
                                                <div className="discount-type">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="discount_type"
                                                            defaultValue="percentage" 
                                                            checked={variantData.discount_type=="percentage"}
                                                            onChange={(e) => handleInputChange(e, 0)}
                                                        />
                                                        % Off
                                                    </label>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="discount_type"
                                                            defaultValue="fixed"
                                                            checked={variantData.discount_type=="fixed"}
                                                            onChange={(e) => handleInputChange(e, 0)}
                                                        />
                                                        Fixed Price
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="threshold-container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-8">
                                                <div className="form-group">
                                                    <div className="row align-items-center">
                                                        {thresholdData && thresholdData.length && thresholdData.map((data, index) => (
                                                            <div key={index} className="row col-lg-12 col-12">
                                                                <div className="col-lg-3 col-3">
                                                                    <span className="unit">Unit</span>
                                                                    <input
                                                                        type="number"
                                                                        placeholder={''}
                                                                        className="unit_input"
                                                                        name='unit'
                                                                        value={thresholdData[index].unit}
                                                                        onChange={(e)=>updateThresholdData(index, e)}
                                                                    />
                                                                     {thresholdData[index].unit && thresholdData[index].unit>0 ?( 
                                                                      <span>{thresholdData[index].unit} or above </span>
                                                                    ) :''}
                                                                </div>
                                                                <div className="col-lg-3 col-4">
                                                                    <span className="unit">{variantData.discount_type == "percentage"?"% Off":"Off Amount"}</span>
                                                                    <input
                                                                        type="number"
                                                                        placeholder=""
                                                                        className="unit_input"
                                                                        name='discount'
                                                                        value={thresholdData[index].discount}
                                                                        onChange={(e)=>updateThresholdData(index, e)}
                                                                    />
                                                                </div>
                                                                <div className="col-lg-1 col-1">
                                                                    <span className="unit">&nbsp;</span>
                                                                    <div className="equal">=</div>
                                                                </div>
                                                                <div className="col-lg-3 col-4">

                                                                    <span className="unit">&nbsp;</span>
                                                                    <input
                                                                        type="text"
                                                                        placeholder=""
                                                                        className="unit_input"
                                                                        value={ variantData.discount_type == "percentage"?getPrecentageAmount(variantData.businessSalePrice*1, thresholdData[index].discount):thresholdData[index].discount }
                                                                        onChange={(e)=>console.log('object')}
                                                                        readOnly={true}
                                                                    />
                                                                </div>
                                                                <div className="col-lg-1 col-1">
                                                                    <span className="unit">&nbsp;</span>
                                                                    {index !== 0 ?( 
                                                                        <div className="equal " style={{cursor:"pointer"}} ><i className='fa fa-trash' onClick={()=>deleteThreshold(index)} /></div>
                                                                    ):''}
                                                                </div>

                                                            </div>
                                                        ))}



                                                        <div className="col-lg-12"> 
                                                        {thresholdData.length <5 ? (
                                                            <a href="#" className="add-threshold"
                                                            onClick={(e)=>addMoreThreshold(e)}>
                                                                Add Threshold Levels
                                                            </a>
                                                        ):''}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2>Inventory details</h2>
                                     
                                    <div className="form-group">
                                        <div className="row align-items-center">
                                            <div className="col-lg-3">
                                            <label htmlFor="listing-status" >
                                                Procurement type<span>*</span>
                                            </label>
                                            </div>
                                            <div className="col-lg-3">
                                            <select 
                                                name="stock_status"
                                                value={variantData.stock_status}
                                                onChange={(e) => handleInputChange(e, 0)}
                                            >
                                                <option value="In Stock">In Stock</option>
                                                <option value="out Of stock">Out Of Stock</option>
                                            </select>
                                            </div>
                                        </div>
                                        </div>
                                    <div className="form-group">
                                        <div className="row align-items-center">
                                            <div className="col-lg-3">
                                                <label htmlFor="listing-status">
                                                    Stock<span>*</span>
                                                </label>
                                            </div>
                                            <div className="col-lg-3">
                                                <input type="text" placeholder={1}
                                                    name="stock"
                                                    value={variantData.stock}
                                                    onChange={(e) => handleInputChange(e, 0)}
                                                />
                                                {errors.stock && (
                                                    <span className='error_message'>{errors.stock}</span>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                    
                                    <h2>Shipping Package Info</h2>
                                    {variants.length>0 ? variants.map((variantItem, index) => (
                                        <div className="form-group" key={index+3}>
                                            <div className="row align-items-center">
                                                <div className="col-lg-3" key={index}>
                                                    <label htmlFor="listing-status">
                                                        {variantItem[0]}
                                                        {/* <span>*</span> */}
                                                    </label>
                                                </div>
                                                <div className="col-lg-3  ">
                                                    <select
                                                        name={`${variantItem[0]}`}
                                                        value={variantData.customAttributes?.[variantItem[0]] || ""}
                                                        onChange={(e) => handleInputChangeDynamicValue(e)}

                                                    >
                                                        <option value={""}>select</option>
                                                        {variantItem.length > 1 &&
                                                            variantItem[1].map((variantValue, value_key) => (
                                                                <option key={`${index}${value_key}`} value={variantValue}>
                                                                    {variantValue}
                                                                </option>
                                                            ))}
                                                    </select>
                                                    {/* <input type="text" placeholder={28} /> */}
                                                </div>

                                            </div>
                                        </div>
                                    )):''}

                                    
                                    {/* <h2>Manufacturing Details</h2>
                <div className="form-group">
                  <div className="row align-items-center">
                    <div className="col-lg-3">
                      <label htmlFor="listing-status">
                        Country Of Origin<span>*</span>
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <select>
                        <option value="">US</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row align-items-center">
                    <div className="col-lg-3">
                      <label htmlFor="listing-status">
                        Manufacturer Name<span>*</span>
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <input type="text" placeholder="Lora s Choice" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row align-items-center">
                    <div className="col-lg-3">
                      <label htmlFor="listing-status">
                        Packer Name<span>*</span>
                      </label>
                    </div>
                    <div className="col-lg-3">
                      <input type="text" placeholder="Lora s Choice" />
                    </div>
                  </div>
                </div> */}
                                    <div className="save_all">
                                        <span type='button' href="#" onClick={() => closeVariantModal()} className='mr-3 cencel_button'>cancel </span>
                                        <a href="#" onClick={(e) => saveVariantEditData(e)}>{productVariant && productVariant.opration =="copy"?"Copy":"Save All"}</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default VariantEditModel