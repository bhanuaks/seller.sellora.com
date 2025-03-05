"use client"
import { baseUrl, createFormData, product_thumb_img_path1, product_thumb_img_path2, product_thumb_img_path3, product_thumb_img_path4 } from '@/Http/helper'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import $ from 'jquery'
// import '../../../../../public/front/error.css'
import '../../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import { AppContext } from '@/app/contaxtData/contextData'
import { useRouter, useSearchParams } from 'next/navigation'
import ProductImageSection from './productImageSection'
import UploadMainImageSection from './UploadMainImageSection'
import Link from 'next/link'
import { Suspense } from "react";
import KeyAttributeSection from './keyAttributeSection'

 


const page = ({params}) => {


    const AddProductPage =({params})=>{

     const {globalData, setGlobalData } = useContext(AppContext);
     const router = useRouter();
     const [sellor, setSellor] = useState(null); 
     const [category, setCategory] = useState(null); 
     const [subcategory, setSubcategory] = useState(null); 
     const [childcategory, setChildcategory] = useState(null); 
     const [brand, setBrand] = useState(null); 
     const [dynamicField, setDynamicField] = useState([]); 
     const [keyAttributes, setKeyAttributes] = useState([])
     
    const searchParams = useSearchParams();

    const category_id = searchParams.get('category')
    const subcategory_id = searchParams.get('subCategory')
    const childcategory_id = searchParams.get('childcategory')
    const brand_id = searchParams.get('brand')
    const product_id = searchParams.get('product_id') || ""
     const errorRedirctUtl = `${baseUrl}sellor-dashboard/categories`
    const [errors, setErrors] = useState({})

     const [image, setImage] = useState([])
    const [imagePath, setImagePath] = useState([]);


     const [productDetails, setProductDetails]  = useState({
        category_id:category_id,
        subcategory_id:subcategory_id,
        childcategory_id:childcategory_id,
        brand_id:brand_id,

        product_name:"",
        product_id_type:"",
        product_description:"",
        key_feature:[],
        search_keywords:"",
        target_gender:"",
        age_range:"",
        material:"",
        model_name:"",
        model_number:"",
        manufacture_part_number:"",
        safety_warning:"",
        country_of_origin:"",
        manufacturer_details:"",
        packer_details:"",
        importer_details:"",
        main_image:"",



        taxCode: "",
        taxRate: "",
        fulfillmentBy: "Sellora",
        shippingProvider: "Merchant",
        currency: "USD",


        packageWeight:"",
        packageBreadth:"",
        packageHeight:"",
        packageLength:""

        
     })
 

     const [keyFeature, setKeyFeature] = useState([''])
     const addMoreKeyFeature = () => {
        setKeyFeature([...keyFeature, '']);
      };
    
      const deleteMoreKeyFeature =(index)=>{
        const updatedProperty = keyFeature.filter((_,i)=> i !== index);
        setKeyFeature(updatedProperty); 
        setTimeout(() => {
            setProductDetails((preData)=>({
                ...preData,
                key_feature:keyFeature
            })) 
        }, 100);
      }

      function updateKeyFeature(index, value){
         
        setKeyFeature((prevData)=> 
            prevData.map((item,i)=>(i==index? value:item)), 
        )
        setTimeout(() => {
            setProductDetails((preData)=>({
                ...preData,
                key_feature:keyFeature
            })) 
        }, 100);
        
      }


    useEffect(()=>{  
        if(!category_id || !brand_id){
            router.push(errorRedirctUtl)
        }

        if(globalData.sellor){
          $('.loaderouter').css('display','flex') 
          fetch(`${baseUrl}api/sellor/get-category-and-brand`,{
            method:"POST", 
            body:JSON.stringify({
                seller_id:globalData.sellor._id,
                category_id,
                subcategory_id, 
                childcategory_id, 
                brand_id,
                seller:"yes",
                product_id:product_id,
                withData:"Compliance"
            })
          }).then((response)=>{
              if(!response.ok){
                $('.loaderouter').css('display','none')
                throw new Error('Network Error')
              }
              return response.json();
          }).then((res)=>{
              $('.loaderouter').css('display','none') 
              if(res.status){ 
               
                if(res.data.brand.status != 1){
                    router.push(errorRedirctUtl)
                }
                // if(subcategory_id && !(res.data.subcategory)){
                //     router.push(errorRedirctUtl)
                // }
                // if(childcategory_id && !(res.data.childcategory)){
                //     router.push(errorRedirctUtl)
                // }

                if(brand_id && !(res.data.brand)){
                    router.push(errorRedirctUtl)
                }

                if( !(res.data.category)){
                    router.push(errorRedirctUtl)
                }

                setProductDetails((prevData)=>({
                    ...prevData,
                    seller_id:res.data.seller._id
                }))  
                setSellor(res.data.seller)
                setCategory(res.data.category)
                setSubcategory(res.data.subcategory)
                setChildcategory(res.data.childcategory)
                setBrand(res.data.brand)
                setDynamicField(res.data.category.dynamicField)
                if(product_id){ 
                    const updateProd = res.data.product;
                    
                    // set dynamic field value start
                    if (updateProd.dynamicFields && updateProd.dynamicFields.length > 0) {
                        let updatedValue = res.data.category.dynamicField;   
                        updateProd.dynamicFields.forEach((element) => {
                            updatedValue = updatedValue.map((prevData) => {
                                if (prevData.field_name === element.field_name) {
                                    return { ...prevData, field_value: element.field_value };
                                }
                                return prevData;
                            });
                        }); 
                        setDynamicField(updatedValue); 
                    }
                    // set dynamic field value end
                    setKeyAttributes(updateProd.keyAttributes)

                    setProductDetails(updateProd)
                    if(updateProd.key_feature){ 
                        setKeyFeature(updateProd.key_feature.filter((item)=> item != ""))
                    }
                    
                    if(res.data.compliance){
                        Object.keys(res.data.compliance).map((data)=>{ 
                            if(data != "_id" && data != "__v"){
                                setProductDetails((prevData)=>({
                                    ...prevData,
                                    [data]:res.data.compliance[data]
                                }))  
                            }
                           
                        })
                    }
                     const imgPath = [];
                        const allImage = [];
                        if(updateProd.image_1){
                          imgPath.push(`${baseUrl}${product_thumb_img_path1}${updateProd.image_1}`)
                          allImage.push(`${updateProd.image_1}`)
                        }
                        if(updateProd.image_2){
                          imgPath.push(`${baseUrl}${product_thumb_img_path2}${updateProd.image_2}`)
                          allImage.push(`${updateProd.image_2}`)
                        }
                        if(updateProd.image_3){
                          imgPath.push(`${baseUrl}${product_thumb_img_path3}${updateProd.image_3}`)
                          allImage.push(`${updateProd.image_3}`)
                        }
                        if(updateProd.image_4){
                          imgPath.push(`${baseUrl}${product_thumb_img_path4}${updateProd.image_4}`)
                          allImage.push(`${updateProd.image_4}`)
                        }
                        setImagePath(imgPath)
                        setImage(allImage)  


                }
              }else{
                router.push(errorRedirctUtl)
              }
          }).catch((err)=>{
            console.log(err);
            $('.loaderouter').css('display','flex') 
          })
        }
    
      },[globalData.sellor])

      function changeProductInfoInput(e){
        const {name, value} = e.target;
        if(name == "taxRate"){
            const numericValue = value.replace(/[^0-9.]/g, '');
            setProductDetails((prevData)=>({
                ...prevData,
                [name]:numericValue
            }))  
            return
        }
        setProductDetails((prevData)=>({
            ...prevData,
            [name]:value
        }))  
      }


   

    //   =======================================================

    function saveProductInforemationData(e){
        e.preventDefault();
        $('.loaderouter').css('display',"flex") 
        const formData = createFormData({
            ...productDetails, 
            dynamicField:JSON.stringify(dynamicField),
            keyAttributes:JSON.stringify(keyAttributes),
            key_feature:keyFeature
        });
        
        fetch(`${baseUrl}api/sellor/product/add-single-product`,{
            method:"POST",
            body:formData
        }).then((response)=>{
            if(!response.ok){
                $('.loaderouter').css('display',"none") 
                throw new Error("Network Error")
            }
            return response.json();
        }).then((res)=>{
           
            if(res.status){
                router.push(`${baseUrl}sellor/product/add-variant?${searchParams}&product_id=${res.data.data._id}`)
            }else if(res.data.status_code == 400){ 
                setErrors(res.data.errors)
                if (Object.keys(res.data.errors)[0].includes('key_feature')) {
                    $(`input[name="key_feature"]`).focus();
                    $(`select[name="key_feature"]`).focus();
                }
                $(`input[name="${Object.keys(res.data.errors)[0]}"]`).focus();
                $(`select[name="${Object.keys(res.data.errors)[0]}"]`).focus();
                $(`textarea[name="${Object.keys(res.data.errors)[0]}"]`).focus();
                $('.loaderouter').css('display',"none") 
            }
        })
    }

    function changeDynamicFieldValue(key, e) {
        const { name, value } = e.target;
         
        const updatedValue = dynamicField.map((prevData, i) => {
            if (i === key) {
                return { ...prevData, [name]: value };
            }
            return prevData;  
        });
        
        setDynamicField(updatedValue);
    }
    return (
        <div>
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
                <div className="add-product-streep text-center">
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
                                            <span className="small-size2">{brand?`(${brand.name})`:''}</span>
                                        </li>
                                        <li className="step" data-step={3}> 
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
                            {/* <div className="row">
                                <div className="col-lg-12">
                                    <div className="preview_box">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="preview">Preview</div>
                                            </div>
                                            <div className="col-lg-2">
                                                <div style={{position:'relative', width:"100%", height:'100%'}}>
                                                <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                                                 
                                                fill /></div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="preview_text">
                                                    <p>
                                                        Lora's Choice Purple Toothpaste Colour Corrector, Tooth
                                                        Stain Concealer, Teeth Whitening Booster, Colour
                                                        Correcting, Toothpaste Color Corrector Serum Brighten and
                                                        Whiten Teeth
                                                    </p>
                                                    <div className="price_dfsdf">
                                                        
                                                        <span>$200</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <form action={"#"} onSubmit={(e)=>saveProductInforemationData(e)}> 
                            <div className="row">
                                <div className="col-lg-8">
                                    {/* =====================form-1-end======================== */}
                                    {/* ==================form2=open=============== */}
                                    <div className="head_dfd">
                                        <h3>Product Information</h3>
                                    </div>
                                    <div className="preview_box">
                                        <div className="form-container">
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="sku">
                                                            Product Name<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" 
                                                        name="product_name" 
                                                        value={productDetails.product_name}
                                                        onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                         {errors.product_name && ( 
                                                            <span className='error_message'>{errors.product_name}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="sale-price">
                                                            Brand Name<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="product_name" 
                                                         value={productDetails.product_name}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                          />
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="msrp">
                                                            Product Id<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         />
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="business-price">Product Id Type</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <select 
                                                            name="product_id_type" 
                                                            value={productDetails.product_id_type || "" }
                                                            onChange={(e)=>changeProductInfoInput(e)}
                                                        >
                                                            <option value="">Select</option>
                                                            <option value="UPC">UPC</option>
                                                            {/* <option value="inactive">...</option> */}
                                                        </select>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Product Description<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <textarea  
                                                         name="product_description" 
                                                         value={productDetails.product_description}
                                                         onChange={(e)=>changeProductInfoInput(e)}/>
                                                           {errors.product_description && ( 
                                                            <span className='error_message'>{errors.product_description}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {keyFeature.map((features, keys)=>(
                                                <div className="form-group" key={keys}>
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Key Features {keys+1}<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input type="text"
                                                         name="key_feature" 
                                                         value={keyFeature[keys]}
                                                         onChange={(e)=>updateKeyFeature(keys, e.target.value)} 
                                                         />
                                                          {errors[`key_feature_${keys}`] && (
                                                                    <span className='error_message'>{errors[`key_feature_${keys}`]}</span>
                                                                )}
                                                    </div>
                                                    <div className="col-lg-2">
                                                       {keys+1==keyFeature.length?(
                                                           <div className="add-more" style={{cursor:"pointer"}} onClick={()=>addMoreKeyFeature()}>+Add more</div> 
                                                       ):(
                                                           <div className="add-more" style={{cursor:"pointer"}} onClick={()=>deleteMoreKeyFeature(keys)}><i className="fas fa-trash-alt" /> Delete</div>

                                                       )} 
                                               
                                                    </div>
                                                </div>
                                              
                                            </div>
                                            ))}
                                            
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Search Keywords
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="search_keywords" 
                                                         value={productDetails.search_keywords}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.search_keywords && ( 
                                                            <span className='error_message'>{errors.search_keywords}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Target Gender<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <select
                                                            name="target_gender" 
                                                            value={productDetails.target_gender || ""}
                                                            onChange={(e)=>changeProductInfoInput(e)}
                                                        >
                                                            <option value="">Select</option>
                                                           
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                        {errors.target_gender && ( 
                                                            <span className='error_message'>{errors.target_gender}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Age Range
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <select
                                                             name="age_range" 
                                                             value={productDetails.age_range || ""}
                                                             onChange={(e)=>changeProductInfoInput(e)}
                                                        >
                                                            <option value="">Select</option>
                                                            {Array.from({ length: 80 }, (_, i) => (
                                                                <option key={i} value={i + 1}>{i + 1} Year</option>
                                                                ))}
                                                        </select>
                                                        {errors.age_range && ( 
                                                            <span className='error_message'>{errors.age_range}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Material<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <select
                                                            name="material" 
                                                            value={productDetails.material || ""}
                                                            onChange={(e)=>changeProductInfoInput(e)}
                                                        >
                                                            <option value="">Select</option>
                                                            <option value="Nylon">Nylon</option>
                                                            {/* <option value="inactive">...</option> */}
                                                        </select>
                                                        {errors.material && ( 
                                                            <span className='error_message'>{errors.material}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Model Name<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="model_name" 
                                                         value={productDetails.model_name}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                          />
                                                            {errors.model_name && ( 
                                                            <span className='error_message'>{errors.model_name}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Model Number<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"  
                                                        name="model_number" 
                                                        value={productDetails.model_number}
                                                        onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.model_number && ( 
                                                            <span className='error_message'>{errors.model_number}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Manufacture Part Number<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" 
                                                         name="manufacture_part_number" 
                                                         value={productDetails.manufacture_part_number}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                          />
                                                            {errors.manufacture_part_number && ( 
                                                            <span className='error_message'>{errors.manufacture_part_number}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Model Number<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="model_number" 
                                                         value={productDetails.model_number}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                          />
                                                            {errors.model_number && ( 
                                                            <span className='error_message'>{errors.model_number}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Safety Warning
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" 
                                                         name="safety_warning" 
                                                         value={productDetails.safety_warning}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.safety_warning && ( 
                                                            <span className='error_message'>{errors.safety_warning}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Country of Origin
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" 
                                                         name="country_of_origin" 
                                                         value={productDetails.country_of_origin}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.country_of_origin && ( 
                                                            <span className='error_message'>{errors.country_of_origin}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Manufacturer Details
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" 
                                                         name="manufacturer_details" 
                                                         value={productDetails.manufacturer_details}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.manufacturer_details && ( 
                                                            <span className='error_message'>{errors.manufacturer_details}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Packer Details
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="packer_details" 
                                                         value={productDetails.packer_details}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.packer_details && ( 
                                                            <span className='error_message'>{errors.packer_details}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Importer Details
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" 
                                                         name="importer_details" 
                                                         value={productDetails.importer_details}
                                                         onChange={(e)=>changeProductInfoInput(e)}/>
                                                           {errors.importer_details && ( 
                                                            <span className='error_message'>{errors.importer_details}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Currency<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <select name='currency'
                                                         value={productDetails.currency}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         >
                                                            <option value={'USD'}>USD</option>
                                                         </select>
                                                         
                                                           {errors.currency && ( 
                                                            <span className='error_message'>{errors.currency}</span>
                                                         )} 
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                           Tax Code <span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" 
                                                         name="taxCode" 
                                                         value={productDetails.taxCode || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}/>
                                                           {errors.taxCode && ( 
                                                            <span className='error_message'>{errors.taxCode}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Tax Rate<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" 
                                                         name="taxRate" 
                                                         value={productDetails?.taxRate || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}/>
                                                           {errors.taxRate && ( 
                                                            <span className='error_message'>{errors.taxRate}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Fullfilment By <span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        
                                                        
                                                    <select name='fulfillmentBy'
                                                         value={productDetails?.fulfillmentBy}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         >
                                                            <option value={'Sellora'}>Sellora</option>
                                                         </select>

                                                           {errors.fulfillmentBy && ( 
                                                            <span className='error_message'>{errors.fulfillmentBy}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Shipping Provider <span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <select name='shippingProvider'
                                                         value={productDetails.shippingProvider}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         >
                                                            <option value={'Merchant'}>Merchant</option> 
                                                         </select>
                                                        
                                                           {errors.shippingProvider && ( 
                                                            <span className='error_message'>{errors.shippingProvider}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Package Length (in cm)
                                                         
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <input type="text" name='packageLength'
                                                         value={productDetails.packageLength || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                             
                                                        
                                                           {errors.packageLength && ( 
                                                            <span className='error_message'>{errors.packageLength}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Package Breadth (in cm)

                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <input type="text"
                                                    name='packageBreadth'
                                                         value={productDetails.packageBreadth || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                             
                                                        
                                                           {errors.packageBreadth && ( 
                                                            <span className='error_message'>{errors.packageBreadth}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Package Height (in cm)

                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <input 
                                                    type='text'
                                                    name='packageHeight'
                                                         value={productDetails.packageHeight || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                          />
                                                             
                                                        
                                                           {errors.packageHeight && ( 
                                                            <span className='error_message'>{errors.packageHeight}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Package Weight (in Kg)

                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <input 
                                                    type='text'
                                                    name='packageWeight'
                                                         value={productDetails.packageWeight || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                          />
                                                        
                                                           {errors.packageWeight && ( 
                                                            <span className='error_message'>{errors.packageWeight}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* =========================================================== */}
                                        </div>
                                    </div>
                                    {/* ========================form-2-end===================== */}
                                    {/* ==================form3=open=============== */}
                                    <div className="head_dfd">
                                    {dynamicField.length>0 ?(
                                        <h3>Compliance and Other Attributes</h3>
                                    ):""}
                                    </div>
                                    {dynamicField.length>0 ?(
                                    <div className="preview_box">
                                        <div className="form-container">
                                             

                                            {dynamicField.length>0 ?
                                            dynamicField.map((fieldData, index)=>(
                                                <div className="form-group" key={index}>
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                           {fieldData.field_name}{fieldData.required=="Yes"?(<span>*</span>):""}
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {fieldData.field_type == "select" ?(
                                                             <select
                                                             name="field_value" 
                                                             value={fieldData.field_value || ''}
                                                             onChange={(e)=>changeDynamicFieldValue(index, e)}
                                                         >
                                                             <option value="">Select</option>
                                                             {fieldData.select_value.length ? fieldData.select_value.map((selectValue, selectKey)=>(
                                                                 <option value={selectValue} key={selectKey}>{selectValue}</option>
                                                             )):""}
                                                         </select>
                                                        ):(
                                                            <input type="text" 
                                                            name="field_value"
                                                            // placeholder={`Enter ${fieldData.field_name}`}
                                                            value={fieldData.field_value || ''}
                                                            onChange={(e)=>changeDynamicFieldValue(index, e)}
                                                            />
                                                        )}
                                                   
                                                        {errors[`${fieldData.field_name.toLowerCase().replace(/ /g, '_')}_error`] && ( 
                                                            <span className='error_message'>{errors[`${fieldData.field_name.toLowerCase().replace(/ /g, '_')}_error`]}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            )):""}

                                        </div>
                                    </div>
                                         ):""}
                                    {/* ========================form-3-end===================== */}
                                </div>
                                <div className="col-lg-4">
                                    <div className="head_dfd">
                                        <h3>&nbsp;</h3>
                                    </div>
                                    <div className="preview_box">
                                        <div className="image_right_guideline">
                                            <h2>Image Guidelines</h2>
                                            <ul>
                                                <li>
                                                    Images with text/Watermark are not acceptable in primary
                                                    images.
                                                </li>
                                                <li>Product image should not have any text</li>
                                                <li>Please add solo product image without any props.</li>
                                                <li>Images with minimum resolution of 200x1100 px</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <UploadMainImageSection  productDetails={productDetails} setProductDetails={setProductDetails}
                                       
                                       errors={errors}
                                       />
                                    <ProductImageSection productDetails={productDetails} setProductDetails={setProductDetails}
                                       image={image} setImage={setImage} imagePath={imagePath} setImagePath={setImagePath}
                                       errors={errors}/>

                                <KeyAttributeSection  errors={errors} changeProductInfoInput={changeProductInfoInput}
                                 productDetails={productDetails} keyAttributes={keyAttributes} setKeyAttributes={setKeyAttributes} />
                                    
                                </div>
                                <div className="row align-items-center">
                                    
                                    <div className="col-lg-8">
                                        <div className="sub_mit_cat">
                                            <ul>
                                                <li className="orange_09">
                                                    <button href="add-single-catalog-variant1.html">
                                                        Submit Catalog
                                                    </button>
                                                </li>
                                                <li>
                                                    <Link href={`${baseUrl}sellor-dashboard/listing`}>Cancel Catalog</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        {/* <a href="#" className="save-as-draft">
                                            Save as Draft
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>


        </div>
    )
}

    return (
            <Suspense fallback={<div>Loading...</div>}> 
              <AddProductPage params={params}/>
          </Suspense>
          )
}

export default page