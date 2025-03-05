
"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState} from 'react'
import '../../../../public/front/loader.css'
// import '../../../../public/front/error.css'
import { AppContext } from '@/app/contaxtData/contextData'
import $ from 'jquery'
import { baseUrl } from '@/Http/helper'
import { ToastContainer, toast } from 'react-toastify';
// import 'nice-select2/dist/css/nice-select2.css';
import NiceSelect from 'nice-select2';
import { useRouter, useSearchParams } from 'next/navigation'
import SearchBrandSection from './searchSection'


const BrandChoosePage = () => { 

  const {globalData, setGlobalData } = useContext(AppContext);
   const [searchTerm, setSearchTerm] = useState('');
      const [sellor, setSellor] = useState(null); 
      const [brandStatus, setBrandStatus] = useState(null); 
      const [productAddLink, setProductAddLink] = useState(null); 
      const [errors, setErrors] = useState({}); 
      const router = useRouter();
      const searchRef = useRef();
      const searchParams =  useSearchParams();
      const [brandList, setBrandList] = useState([]); 
      const [brandListData, setBrandListData] = useState([]); 
      const [brand, setBrand] = useState({
        seller_id:"",
        name:""
      })


  function  handleChangeInput(e){
     const {name, value} = e.target 
    setBrand((predata)=>({
      ...predata,
      [name]:value
    }))
  }
 
   
    
    useEffect(() => {
      const searchRefNiceSelect = searchRef.current
        ? new NiceSelect(searchRef.current, {
            searchable: true,
            placeholder: brand.name?brand.name:'choose a Brand',
          })
        : null;
   
      return () => {
        // Cleanup each instance of NiceSelect
        searchRefNiceSelect?.destroy();
        
      };
    }, [brandList.length]);

    useEffect(()=>{ 
      if(globalData.sellor){
        $('.loaderouter').css('display','flex') 
        fetch(`${baseUrl}api/sellor/get-profile?user_id=${globalData.sellor._id}&with_data=brands`,{
          method:"GET", 
        }).then((response)=>{
            if(!response.ok){
              $('.loaderouter').css('display','none')
              throw new Error('Network Error')
            }
            return response.json();
        }).then((res)=>{
            $('.loaderouter').css('display','none') 
            if(res.status){ 
              setSellor(res.data.data)
              setBrand((predata)=>({
                ...predata,
                seller_id:res.data.data._id
              }))
              setBrandList(res.data.referData.map((item)=>item.name))
              setBrandListData(res.data.referData)
            }
        })
      }
  
    },[globalData.sellor])


    function submitVerify(e){
      e.preventDefault();
      setErrors({})
      setBrandStatus(null)
      $('.loaderouter').css('display','flex') 
      fetch(`${baseUrl}api/sellor/verify-brand`,{
        method:"POST", 
        body:JSON.stringify({...brand, name:searchTerm})
      }).then((response)=>{
          if(!response.ok){
            $('.loaderouter').css('display','none')
            throw new Error('Network Error')
          }
          return response.json();
      }).then((res)=>{
          $('.loaderouter').css('display','none') 
          if(res.status){ 
            setBrandStatus('verify')
           const selectedBrand =  brandListData.filter((item)=>item.name == searchTerm)
           setProductAddLink(`${baseUrl}sellor/product/add-product?${searchParams}&brand=${selectedBrand.length>0 ? selectedBrand[0]._id:''}`)
            // router.push(`${baseUrl}sellor/product/add-product?${searchParams}&brand=${selectedBrand.length>0 ? selectedBrand[0]._id:''}`)
          }else if(res.data.status_code && res.data.status_code ==403){
           
            if(res.data.errors.name =="invalid brand"){ 
              setBrandStatus('not_found')
            }else{
              setErrors(res.data.errors)
            }
          }
      })

    }


  return (
    <div className="bg33">
      
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
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="navigator-breadcrumb-wrapper">
            <h3>Bulk Catalog Upload</h3>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li><Link href="#"><img src={`${baseUrl}front/assets/images/hand_shaking.png`} />Help</Link> </li>
              <li><Link href="#"><i className="fa-solid fa-video" />Learn How to do Listing</Link> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-3">
        <div className="margin-50">
          <ol className="steps">
            <li className="step is-active" data-step={1}>
              <span>Categories</span>
            </li>
            <li className="step is-active" data-step={2}>
              <span>Brand</span>
            </li>
            <li className="step is-active" data-step={3}>
              <span>Download</span>
            </li>
          </ol>
          <div className="form_outer">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="form_s">
                  <h2>Make sure the brand you want to sell</h2>
                  <form action={"#"} onSubmit={(e)=>submitVerify(e)}>
                  <div className="col-lg-12">
                    <div className="lable">
                      {/* <input type="text" className="form-control" placeholder="Enter Brand Name"
                      name="name"
                      value={brand.name}
                      onChange={(e)=>handleChangeInput(e)} 
                      /> */}
                      <SearchBrandSection brandList={brandList} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

                        {/* <select  className="form-control mb-4" 
                            ref={searchRef}
                              name="name"
                              value={brand.name}
                              onChange={(e)=>handleChangeInput(e)} 
                              >
                                {brandList.length>0 ? brandList.map((brandItem, index)=>( 
                                    <option value={brandItem._id} key={index}>{brandItem.name}</option>
                                )):null}

                              
                          </select> */}
                          {errors.name && errors.name != ""? ( 
                            <>
                                <span id="name_error" className="input-error-tip mb-2" style={{display: 'inline-block', color:'red'}}>{errors.name} </span> 
                            </>
                          ):''}
                         </div>
                      
                        
                    <Link href="add-single-catalog.html" target="_blank">
                    <button type='submit' className="rts-btn btn-primary mb-10">Verify
                        Brand</button>
                        </Link>
                        {brandStatus && (
                          <div className='show_brand_status'>
                            {brandStatus == "verify" ?(
                               <p>This brand has been verified successfully.</p>
                            ):""}
                         
                         {brandStatus == "not_found" ?(
                          <p>{searchTerm} Brand not exist in brand list</p>
                         ):""}

                            <div className='brand_button_container'>
                              {brandStatus == "verify" ?(
                                <Link href={productAddLink} className='create_listing_btn'>Create New Listing</Link>
                                ):""}
                              {brandStatus == "not_found" ?(
                                <Link href={`${baseUrl}sellor-dashboard/brand-aproval-page?brandName=${searchTerm}`} className='create_listing_btn'>Apply {searchTerm} Brand</Link>
                                ):""}
                              
                            </div> 
                        </div>
                        )}
                        
                    <Link href="/sellor-dashboard/brand-aproval-page">
                      <div className="register_for_new">Apply for Brand Approval</div>
                    </Link>
                    <div className="notification">
                      <h4>Basic brand name guidelines to follow</h4>
                      <ul>
                        <li>Check the correct spelling</li>
                        <li>Use full forms</li>
                      </ul>
                    </div>
                    <button type='button' className="rts-btn btn-primary mb-10 download_templates">Download template</button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default BrandChoosePage