


"use client"
import { baseUrl, createFormData, getPrecentageAmount, getVariantAttribute, main_medium_img_path, variant_thumb_img_path1, variant_thumb_img_path2, variant_thumb_img_path3, variant_thumb_img_path4 } from '@/Http/helper'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import $ from 'jquery'
// import '../../../../../public/front/error.css'
import '../../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import { AppContext } from '@/app/contaxtData/contextData'
import { useRouter, useSearchParams } from 'next/navigation'
// import '../../../../../public/front/assets/css/variant.css' 
import UploadImageSection from '../uploadImageSection'
import VariantAddedListC from '../VariantAddedListC' 
import Swal from 'sweetalert2'
import ThresholdLevelsSection from './thresholdLevelsSection'
import { Suspense } from "react";


const page = ({params}) => {

  const AddVariantPage=({params})=>{

    const [thresholdData, setThresholdData] = useState([
            { 
                unit: 0,
                discount: 0,
            } 
        ])
  const { globalData, setGlobalData } = useContext(AppContext);
  const router = useRouter();
  const [sellor, setSellor] = useState(null);
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [childcategory, setChildcategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const searchParams = useSearchParams();

  const category_id = searchParams.get('category')
  const subcategory_id = searchParams.get('subCategory')
  const childcategory_id = searchParams.get('childcategory')
  const product_id = searchParams.get('product_id')
  const brand_id = searchParams.get('brand')
  const errorRedirctUtl = `${baseUrl}sellor-dashboard/categories`
  const [productDetails, setProductDetails] = useState(null);
  const [showImage, setShowImage] = useState(false);
      const [errors, setErrors] = useState({}) 
        const [image, setImage] = useState([])
        const [imagePath, setImagePath] = useState([]);

        const [currentSection, setCurrentSection] = useState("Variant")
  
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
      discount_type:"discount_type"
    },
  );

  const [variantData, setVariantData] = useState(
    {
      product_id:product_id,
      category_id:category_id,
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
      withImage:'No',
      customAttributes: {},
       discount_type:"percentage"
    },
  );
  const [newVariants, setNewVariants] = useState([]);


  const handleCheckboxChange = (e) => {
    const { name, checked} = e.target;
    setShowImage(e.target.checked);
    setVariantData((prevVariants) => ({
      ...prevVariants,
      withImage: checked?"Yes":"No"
    }));
  };


 

  
  const handleInputChange = (e, index, key) => {
    const { value, name } = e.target;

    if(name == "msrp" || name == "consumerSalePrice" || name == "businessSalePrice"){
      const numericValue = value.replace(/[^0-9.]/g, '');
          setVariantData((prevVariants) => ({ 
            ...prevVariants,
            [name]: numericValue
          }));   
          return
      } 
      if(name == "stock"){
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
      customAttributes:{
        ...prevVariants.customAttributes,
        [name]: value
      }
    }));  
  };
  

  function clickSaveVariant(action){
    if(action == "next"){
      router.push(`${baseUrl}sellor-dashboard/listing`) 
      // setCurrentSection("Threshold") 
      return
    }
     const bodyData = createFormData({...variantData,threshold:thresholdData,variant:productDetails?.variant,  seller_id: globalData?.sellor._id,})
    const dynamicVariant = variantData.customAttributes?Object.keys(variantData.customAttributes):[];
    if(dynamicVariant.length == 0 && variants.length>0 && productDetails?.variant == "Yes"){
      Swal.fire({
        icon:"error",
          timer:5000,
          text:"please select atleast one variant", 
          title: "Validation Message"
      })
      return
    }
    else{
      let countVariantValidate = 0;
      dynamicVariant.forEach((data)=>{
          if(variantData.customAttributes[data] != ""){
            countVariantValidate++ 
          }
      })
      if(countVariantValidate == 0  && variants.length>0 && productDetails?.variant == "Yes"){
        Swal.fire({
          icon:"error",
          timer:5000,
          text:"please select atleast one variant", 
          title: "Validation Message"

        })
      return

      }

    }
    setErrors({})
    $('.loaderouter').css('display', 'flex');
    fetch(`${baseUrl}api/sellor/product/add-variant`,{
      method:"POST", 
      body:bodyData 
    }).then((response)=>{

      if(!response.ok){
        $('.loaderouter').css('display', 'none');
        throw new Error("Network error")
      }
      return response.json()
    }).then((res)=>{
      $('.loaderouter').css('display', 'none');
       console.log(res);
       if(res.status){ 
         setNewVariants(res.data.variantList) 
         // empty variant data

         setThresholdData([
            { 
                unit: 0,
                discount: 0,
            } 
        ])
        setVariantData({
          product_id:product_id,
          category_id:category_id,
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
          withImage:'No',
          customAttributes: {},
        })
        setImagePath([])
        setImage([])
        setShowImage(false)
        if(action == "save_and_next"){
           router.push(`${baseUrl}sellor-dashboard/listing`) 
          // setCurrentSection("Threshold") 
        }
       }else if(res.data.status_code && res.data.status_code == 400){
          setErrors(res.data.errors)
       }

    })
  }

  useEffect(() => {

    if (!category_id || !brand_id) {
      router.push(errorRedirctUtl)
    }

    
    if (globalData.sellor) {
      $('.loaderouter').css('display', 'flex')
      fetch(`${baseUrl}api/sellor/get-category-and-brand`, {
        method: "POST",
        body: JSON.stringify({
          seller_id: globalData.sellor._id,
          category_id,
          subcategory_id,
          childcategory_id,
          brand_id,
          seller: "yes",
          product_id
        })
      }).then((response) => {
        if (!response.ok) {
          $('.loaderouter').css('display', 'none')
          throw new Error('Network Error')
        }
        return response.json();
      }).then((res) => {
        $('.loaderouter').css('display', 'none')
        if (res.status) {

          // if(res.data.brand.status != 1){
          //     router.push(errorRedirctUtl)
          // }
          // if(subcategory_id && !(res.data.subcategory)){
          //     router.push(errorRedirctUtl)
          // }
          // if(childcategory_id && !(res.data.childcategory)){
          //     router.push(errorRedirctUtl)
          // }

          // if(brand_id && !(res.data.brand)){
          //     router.push(errorRedirctUtl)
          // }

          // if( !(res.data.category)){
          //     router.push(errorRedirctUtl)
          // }
          
          setSellor(res.data.seller)
          setCategory(res.data.category)
          setSubcategory(res.data.subcategory)
          setChildcategory(res.data.childcategory)
          setBrand(res.data.brand)
          setNewVariants(res.data.variantList)
          setProductDetails(res.data.product)
          if(res.data.product && !res.data.product.variant){
            setProductDetails((prevData)=>({
              ...prevData,
              variant:res.data.variantList.length>0?"Yes":'No'
            }))
          }
          setVariants(Object.entries(res.data.category.category_variant))

           
          if(Object.entries(res.data.category.category_variant).length ==0 || res.data.product.variant =="No"){
            // category variant not when update direct variant
            if(res.data.variantList && res.data.variantList.length>0){ 
              editVariant(res.data.variantList[0])
            }
          }

        } else {
          // router.push(errorRedirctUtl)
        }
      })
    }

  }, [globalData.sellor])

 

  const deleteVariant = (id) => { 
    $('.loaderouter').css('display',"flex")  
    fetch(`${baseUrl}api/sellor/product/add-variant`,{
        method:"DELETE", 
        body:JSON.stringify({_id:id})
    }).then((response)=>{ 
        if(!response.ok){
            $('.loaderouter').css('display',"none") 
            throw new Error("Network error")
        }
        return response.json();
    }).then((res)=>{
        if(res.status){ 
          const filterData = newVariants.filter((item) => item._id !== id) 
          setNewVariants(filterData);
        }
    $('.loaderouter').css('display',"none")     
    }) 
  };

  function editVariant(variantParam){
    setVariantData(variantParam)
    setThresholdData(variantParam.threshold)
    // console.log(variantParam);
    const imgPath = [];
    const allImage = [];
    if(variantParam.image_1){
      imgPath.push(`${baseUrl}${variant_thumb_img_path1}${variantParam.image_1}`)
      allImage.push(`${variantParam.image_1}`)
    }
    if(variantParam.image_2){
      imgPath.push(`${baseUrl}${variant_thumb_img_path2}${variantParam.image_2}`)
      allImage.push(`${variantParam.image_2}`)
    }
    if(variantParam.image_3){
      imgPath.push(`${baseUrl}${variant_thumb_img_path3}${variantParam.image_3}`)
      allImage.push(`${variantParam.image_3}`)
    }
    if(variantParam.image_4){
      imgPath.push(`${baseUrl}${variant_thumb_img_path4}${variantParam.image_4}`)
      allImage.push(`${variantParam.image_4}`)
    }
    setImagePath(imgPath)
    setImage(allImage)   
  }

  useEffect(()=>{
    setShowImage(variantData.withImage == "Yes")
  },[variantData.withImage])


  
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
      <div className="add-product-streep text-center">
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

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="add-product">Add Product</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg33 pt-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="">
                <ol className="steps">
                  <li className="step is-active" data-step={1}>
                    
                    <span>Categories</span>
                    <br />
                    <span className="small-size2">({category ? `${category.name}` : ''}  
                      {subcategory?'/'+subcategory.subCategoryName:''}
                      {childcategory?'/'+childcategory.childCategoryName:''}
                    )</span>
                  </li>
                  <li className="step is-active" data-step={2}>
                    
                    <span>Brand</span>
                    <br />
                    <span className="small-size2">{brand ? `(${brand.name})` : ''}</span>
                  </li>
                  <li className="step is-active" data-step={3}>
                    
                    <span>Add a Product</span>
                    <br />
                    <span className="small-size3">Add a Product</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="form_outer mt">
            <div className="row">
              {productDetails && (
                <div className="col-lg-12">
                <div className="preview_box">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="preview">Preview</div>
                    </div>
                    <div className="col-lg-2">

                      <div style={{ position: 'relative', width: "100%", height: '100%' }}>
                        <Image src={`${baseUrl}${productDetails?main_medium_img_path+productDetails.main_image:""}`}
                          fill
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          alt='img' />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="preview_text">
                        <p>
                          {productDetails?productDetails.product_name:""}
                        </p>
                        <div className="price_dfsdf">
                          
                          {/* <span>$200</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              )}
             
            </div>
            <div className="row">
            {currentSection == "Variant" && ( 
                <div className="col-lg-12">
                  {/* ===================================form-1================================== */}
                  <div className="head_dfd">
                    <h3>Image/Price/Inventory/Variation</h3>
                  </div>
                  <div className="preview_box">
                    <div className="form-container">
                      <div className="form-group">
                        <div className="row align-items-center">
                          <div className="preview_box">

                            <div className="form-container">
                              <div
                                className="form-group form-group2"
                                id="appendVariant"
                              >

                                <div className="row">
                                  <div className="col-3">
                                    <label htmlFor="sku">
                                      SKU<span>*</span>
                                    </label>
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
                                  <div className="col-3">
                                    <label htmlFor="sku">
                                      Listing Status<span>*</span>
                                    </label>
                                    <select name="listingStatus"
                                      value={variantData.listingStatus}
                                      onChange={(e) => handleInputChange(e, 0)}
                                    >
                                      {/* <option value={""}>Select</option> */}
                                      <option value={1}>Active</option>
                                      <option value={0}>Inactive</option>
                                    </select>
                                    {errors.listingStatus && ( 
                                          <span className='error_message'>{errors.listingStatus}</span>
                                        )}
                                  </div>

                                  <div className="col-3">
                                    <label htmlFor="sku">
                                      MSRP <span>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      name="msrp"
                                      value={variantData.msrp}
                                      onChange={(e) => handleInputChange(e, 0)}
                                    />
                                    {errors.msrp && ( 
                                          <span className='error_message'>{errors.msrp}</span>
                                        )}
                                  </div>
                                  <div className="col-3">
                                    <label htmlFor="sku">
                                      Consumer Sale Price <span>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      name="consumerSalePrice"
                                      value={variantData.consumerSalePrice}
                                      onChange={(e) => handleInputChange(e, 0)}
                                    />
                                    {errors.consumerSalePrice && ( 
                                          <span className='error_message'>{errors.consumerSalePrice}</span>
                                        )}
                                  </div>
                                  <div className="col-3">
                                    <label htmlFor="sku">
                                      Business Sale Price <span>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      name="businessSalePrice"
                                      value={variantData.businessSalePrice}
                                      onChange={(e) => handleInputChange(e, 0)}
                                    />
                                    {errors.businessSalePrice && ( 
                                          <span className='error_message'>{errors.businessSalePrice}</span>
                                        )}
                                  </div>
                                  
                                  <div className="col-3">
                                    <label htmlFor="sku">
                                      Stock<span>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      name="stock"
                                      value={variantData.stock}
                                      onChange={(e) => handleInputChange(e, 0)}
                                    />
                                    {errors.stock && ( 
                                          <span className='error_message'>{errors.stock}</span>
                                        )}
                                  </div>
                                  <div className="col-12 col-lg-12 mb-4" >
                                    <br />
                                        <h3 className='mb-1'>Variants</h3>
                                        <input
                                      type="radio"
                                      name="variant"
                                      value="Yes"
                                      checked={productDetails?.variant == "Yes"?true:false}
                                      onChange={(e) => {
                                        setProductDetails((prevData)=>({
                                          ...prevData,
                                          variant:'Yes'
                                        }))
                                      }}
                                    />Yes
                                    &nbsp;
                                     <input
                                      type="radio"
                                      name="variant"
                                      value="No"
                                      checked={productDetails?.variant == "No"?true:false}
                                      onChange={(e) => {
                                        setProductDetails((prevData)=>({
                                          ...prevData,
                                          variant:'No'
                                        }));
                                        setShowImage(false);
                                        setVariantData((prevVariants) => ({
                                          ...prevVariants,
                                          withImage: "No"
                                        }));
                                        Swal.fire({
                                          icon:'warning',
                                          title:"Warning",
                                          text:'If you select "NO" then all added variants will be removed'
                                        })
                                         
                                      }}
                                    />No
                                         
                                        </div>
                                  {productDetails && variants.length && productDetails.variant == "Yes" ? variants.map((variantItem, index) => (
                                    <div className="col-3" key={index}>
                                      <label htmlFor="sku">
                                        {variantItem[0]}<span>*</span>
                                      </label>
                                      <select
                                        name={`${variantItem[0]}`}
                                        value={variantData.customAttributes?.[variantItem[0]] || ""}
                                        onChange={(e) => handleInputChangeDynamicValue(e)} 
                                      >
                                        <option value={""}>select</option>
                                        {variantItem.length > 0 &&
                                          variantItem[1].map((variantValue, value_key) => (
                                            <option key={`${value_key}`} value={variantValue}>
                                              {variantValue}
                                            </option>
                                          ))}
                                      </select>

                                    </div>
                                  )):""}

                                  <div className="col-12 col-lg-12" />
                                  {productDetails && variants.length != 0 && productDetails.variant == "Yes" && (
                                      <div className="col-3">
                                      <label htmlFor="sku">
                                        &nbsp;
                                      </label>
                                      <input
                                        type="checkbox"
                                        name="with_image"
                                        onChange={handleCheckboxChange}
                                        value={"With Image"}
                                        checked={variantData.withImage =="Yes"}
                                      />
                                      Variant Image
                                    </div>
                                  )}
                                  

                                  <div className="col-4">
                                    <ul className="button_f">
                                      {/* <li><a href="#" class="delete3"><i class="far fa-trash"></i> Delete</a></li> */}
                                    </ul>
                                  </div>
                                </div>
                                {productDetails && showImage && productDetails.variant == "Yes" ?(
                                  <div className='mt-4'>
                                    <UploadImageSection variantData={variantData} setVariantData={setVariantData} 
                                    image={image} setImage={setImage} imagePath={imagePath} setImagePath={setImagePath}
                                    errors={errors}/>
                                  </div>
                                ):""}


                                {/* threshold start */}

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
                                                                    <label className="unit">Unit</label>
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
                                                                    <label className="unit">{variantData.discount_type == "percentage"?"% Off":"Off Amount"}</label>
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

                                                                    <label className="unit">&nbsp;</label>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="$190.00"
                                                                        className="unit_input"
                                                                        value={ variantData.discount_type == "percentage"?getPrecentageAmount(variantData.businessSalePrice*thresholdData[index].unit, thresholdData[index].discount):thresholdData[index].discount }
                                                                        readOnly={true}
                                                                        onChange={(e)=>console.log('')}
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
                                    {/* end threshold */}

                                <div className='button_container'>
                               
                                {variants.length > 0 && productDetails?.variant == "Yes" ? (
                                  <button type='button' className="" onClick={() => clickSaveVariant("save")}> Save Variant </button>
                                ):''}
                                  <button href='#' className=" save_n_next_button ml-2" onClick={() => clickSaveVariant("save_and_next")}> Save and next </button>
                                  {newVariants.length>0 && productDetails?.variant == "Yes" ?( 
                                    <a href='#' className=" save_n_next_button ml-2" onClick={() => clickSaveVariant("next")}> Skip </a>
                                  ):''}
                                </div> 
                              </div>
                            </div>
                              {variants.length > 0 && productDetails?.variant == "Yes"? (
                                <VariantAddedListC
                                  newVariants={newVariants}
                                  deleteVariant={deleteVariant}
                                  handleInputChange={handleInputChange}
                                  editVariant={editVariant}
                                />
                              ):''}
                            
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  </div>
              )}
                {currentSection == "Threshold" && ( 
                  <ThresholdLevelsSection  product_id={product_id}/>
                )}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
return (
    <Suspense fallback={<div>Loading...</div>}> 
      <AddVariantPage params={params} />
  </Suspense>
  )
}

export default page