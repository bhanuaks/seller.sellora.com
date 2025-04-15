"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Sidebar from '../afterlogincomponent/Sidebar'
import Link from 'next/link'
import TopButton from '../afterlogincomponent/TopButton'
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { AppContext } from '@/app/contaxtData/contextData'
import $ from 'jquery'
import { baseUrl } from '@/Http/helper'
import { useRouter } from 'next/navigation'
import '../../../../../public/front/error.css'
import '../../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import CompletePercentage from '../afterlogincomponent/completePercentage'

const page = () => {


  const { globalData, setGlobalData } = useContext(AppContext)

  const countryRef = useRef()
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [sellor, setSellor] = useState(null);
  const [taxInformation, setTaxInformation] = useState({
    tax_classication: 'Individual',
    u_s_resident: "Yes",
    federal_tax_classication: "",
    llc_type: "",
    employer_identification_number: "Employer Identification Number",
    full_name: "",
    trade_name: "",  
    tin_number: "", 
    image: null,  
    country: "",
    address_line_1: "",
    city: "",
    address_line_2: "",  
    state: "",          
    zip_code: "",
  })


  useEffect(() => {
    if (globalData.sellor) {
      $('.loaderouter').css('display', 'flex')
      fetch(`${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}&with_data=taxInformation`, {
        method: "GET",
      }).then((response) => {
        if (!response.ok) {
          $('.loaderouter').css('display', 'none')
          throw new Error('Network Error')
        }
        return response.json();
      }).then((res) => {
        $('.loaderouter').css('display', 'none')
        if (res.status) {
          // check complete step
          if(!res.data.data.complete_step ||  res.data.data.complete_step < 5){
            router.push('/seller/al/contact-details')
          }
          setSellor(res.data.data)
          if (res.data.referData) {
            setTaxInformation(res.data.referData)
          }
          setTaxInformation((preData) => ({
            ...preData,
            seller_id: res.data.data._id
          }))

        }
      })
    }

  }, [globalData.sellor])




  const updateInputData = (e) => {

    const { name, value, checked, files } = e.target;



    if (name == "image") {
      const file = files?.[0] || null;

      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
      if (!allowedTypes.includes(file.type)) {
        alert("Only JPG, PNG, and PDF files are allowed.");
        return;
      }
      const maxSize = 10 * 1024 * 1024;
      if (file.size >= maxSize) {
        alert("File size must be less than 10MB.");
        return;
      }

      setTaxInformation((preData) => ({
        ...preData,
        [name]: file
      }))
      const fileName = file ? file.name : "Select file";
      setTimeout(() => {
        const fileLabel = document.getElementById(`${name}_name`);
        if (fileLabel) fileLabel.textContent = fileName;
      }, 300);
      

      // =============================
      if (value == "") {
        setErrors((preError) => ({
          ...preError,
          [name]: `${name.replace('_', ' ')} is required`
        }))
      } else {
        setErrors((preError) => ({
          ...preError,
          [name]: ``
        }))
      } 
      return
    }

    if(name=="tin_number"){
      let numericValue = value.replace(/\D/g, "");
      let formattedData = numericValue.slice(0, 9); 
      let formattedValue = formattedData.replace(/(\d{2})(\d{7})/, '$1-$2'); 
        setTaxInformation((preData) => ({
        ...preData,
        [name]: formattedValue
      }))
      return
    }

    setTaxInformation((preData) => ({
      ...preData,
      [name]: value
    }))

    if (value == "") {
      setErrors((preError) => ({
        ...preError,
        [name]: `${name.replace('_', ' ')} is required`
      }))
    } else {
      setErrors((preError) => ({
        ...preError,
        [name]: ``
      }))
    }

  }



  function submitUpdateForm(e) {
    e.preventDefault();
    setErrors({});
    $('.loaderouter').css('display', 'flex');
    const formData = createFormData(taxInformation)
    fetch(`${baseUrl}api/seller/update-profile?update=taxInformation`, {
      method: "POST",
      body: formData
    }).then((response) => {
      if (!response.ok) {
        $('.loaderouter').css('display', 'none')
        throw new Error('Network Error')
      }
      return response.json();
    }).then((res) => {
      $('.loaderouter').css('display', 'none')
      if (res.status) {
        toast.success('Success! Business Details Saved.');
        router.push('/seller/al/shipping-setting')
      } else if (res.data.status_code == 403) {
        setErrors(res.data.errors)
      }
    })


  }

  const createFormData = (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (typeof value === "object" && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value);
      }
    });

    return formData;
  };






  return (
    <div className="seller_panel_mmmm">

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
      <div className="loaderouter">
        <div className="loader"></div>
        </div>
      {/* loader end */} 
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3" />
          <div className="col-lg-6">
            <div className="onboarding_form">
              <h3>Onboarding Dashboard</h3>
            </div>
          </div>
          <div className="col-lg-3">
            <TopButton />
          </div>
        </div>
        <form action={'#'} onSubmit={(e)=>submitUpdateForm(e)}> 
        <div className="row">
          <div className="col-lg-3">
            <div className="left_side_panel"> 
              <div className="card-6-inner">
                <p>Your onboarding completion status</p>
                <div className="meter orange nostripes"> 
                <CompletePercentage sellor={sellor}/>
                </div>
              </div>
              <Sidebar sellor={sellor}/>

            </div>
          </div>
          <div className="col-lg-6">
            <div className="mm_rts-cart-list-area2">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div
                    className="nnn_dform"
                    style={{ paddingBottom: 0, marginBottom: 0 }}
                  >
                    <h2>Tax Information</h2>
                    <div className="registration_form_single-input">
                      <label htmlFor="f-name">What is your tax classication?<span className='mandatory_field'>*</span></label>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className={`button_33 mt--20 ${taxInformation.tax_classication == "Individual" ? "select" : ''}`}>
                            <Link href="#" onClick={(e) => {
                              e.preventDefault();
                              setTaxInformation((preData) => ({
                                ...preData,
                                tax_classication: "Individual"
                              }))
                            }}>Individual</Link>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className={`button_33 mt--20 ${taxInformation.tax_classication == "Business" ? "select" : ''}`}>
                            <Link href="#" onClick={(e) => {
                              e.preventDefault();
                              setTaxInformation((preData) => ({
                                ...preData,
                                tax_classication: "Business"
                              }))
                            }}
                            >Business</Link>
                          </div>
                        </div>
                      </div>
                      <div className="individual_p">
                        <p>
                          "Individual" includes Sole Proprietors or Disregarded
                          Entity where the owner is an individual
                        </p>
                      </div>
                    </div>
                    <div className="registration_form_single-input">
                      <label htmlFor="f-name">
                        Are you a U.S. resident entity?<span className='mandatory_field'>*</span>
                      </label>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className={`button_33 mt--20 ${taxInformation.u_s_resident == "Yes" ? "select" : ''}`}>
                            <Link href="#" onClick={(e) => {
                              e.preventDefault();
                              setTaxInformation((preData) => ({
                                ...preData,
                                u_s_resident: "Yes"
                              }))
                            }} >Yes</Link>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className={`button_33 mt--20 ${taxInformation.u_s_resident == "No" ? "select" : ''}`}>
                            <Link href="#" onClick={(e) => {
                              e.preventDefault();
                              setTaxInformation((preData) => ({
                                ...preData,
                                u_s_resident: "No"
                              }))
                            }}>No</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {taxInformation.u_s_resident == "Yes" ? (<>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">Federal tax classication<span className='mandatory_field'>*</span></label>
                        <select type="text" placeholder="Limited liability company" 
                          name='federal_tax_classication'
                          value={taxInformation.federal_tax_classication || ""}
                          onChange={(e) => updateInputData(e)}
                        >
                          <option value="">select</option>
                          <option value="C corporations">C corporation</option>
                          <option value="S corporations">S corporation</option>
                          <option value="Partnership">Partnership</option> 
                          <option value="trust/estate">Trust/estate</option> 
                          <option value="Limited liability company">Limited liability company</option>
                          <option value="Other">Other</option>
                        </select>
                        
                        {errors.federal_tax_classication && errors.federal_tax_classication != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.federal_tax_classication}</span>
                      ):''}
                      </div>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">LLC type<span className='mandatory_field'>*</span></label>
                        <select type="text" placeholder="Partnership"
                          name='llc_type'
                          value={taxInformation.llc_type}
                          onChange={(e) => updateInputData(e)}
                        >
                         <option value="">select</option>
                          <option value="C corporations">C corporation</option>
                          <option value="S corporations">S corporation</option>
                          <option value="Partnership">Partnership</option>  
                        </select>

                     {errors.llc_type && errors.llc_type != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.llc_type}</span>
                      ):''}
                      </div>
                      <div className="col-lg-12">
                        <h3>Tax Identity Information</h3>
                      </div>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">Full name<span className='mandatory_field'>*</span></label>
                        <input type="text" placeholder="Mailed It, LLC"
                          name='full_name'
                          value={taxInformation.full_name}
                          onChange={(e) => updateInputData(e)}
                        />
                        {errors.full_name && errors.full_name != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.full_name}</span>
                      ):''}
                      </div>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                          Doing business as “DBA” or trade name (Optional)
                        </label>
                        <input type="text" placeholder="Mailed It, LLC"
                          name='trade_name'
                          value={taxInformation.trade_name}
                          onChange={(e) => updateInputData(e)}
                        />
                        {/* {errors.trade_name && errors.trade_name != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.trade_name}</span>
                      ):''} */}
                      </div>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                          Taxpayer Identication Number (TIN)<span className='mandatory_field'>*</span>
                        </label>
                        <select 
                         name='employer_identification_number'
                         value={taxInformation.employer_identification_number}
                         onChange={(e) => updateInputData(e)}
                         > 
                          <option value={"Employer Identification Number"}>Employer Identification Number</option>
                        </select>
                        <input type="text" placeholder="XX-XXXXXXX"
                          name='tin_number'
                          value={taxInformation.tin_number}
                          onChange={(e) => updateInputData(e)}
                        />
                        {errors.tin_number && errors.tin_number != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.tin_number}</span>
                      ):''}
                      </div>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">Attach File<span className='mandatory_field'>*</span></label>
                        <div className="file-placeholder">
                          <label />
                          <input type="file" className="fileUpload"
                            name='image'
                            onChange={(e) => updateInputData(e)} />
                          <div className="file-browse">

                            <span className="file-browse-txt" id='image_name'>
                              
                              {  taxInformation.image && typeof taxInformation.image =="string" ? (
                                  taxInformation.image.split('/').length ==3 ?taxInformation.image.split('/')[2]:"select file"
                            ):"Select file"}
                            </span>
                            <span className="browse">Upload</span>
                          </div>
                          <span className="text-danger"><strong>Note:</strong> Allowed file types: .jpg, .png, .pdf. Maximum file size: 10MB.</span>

                        </div>
                     
                       {  taxInformation.image && typeof taxInformation.image =="string" ? (
                          <a target='_blank'  className='view_image' href={`${baseUrl}${taxInformation.image}`}>View File</a>
                        ):null}
                         </div>

                      {errors.image && errors.image != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.image}</span>
                      ):''}
                    </>) : null}

                  </div>
                </div>

                <div className="col-lg-10 offset-lg-1">
                  <div className="nnn_dform">
                    {taxInformation.u_s_resident == "Yes" ? (<>
                      <div className="col-lg-12">
                        <h3 className="text-center">Address</h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">Country<span className='mandatory_field'>*</span></label>
                            {/* <input type="text" placeholder="United States" /> */}
                            <select
                              name='country'
                              value={taxInformation.country}
                              onChange={(e) => updateInputData(e)}
                            >

                              <option value="">Select Country</option>
                              <option value="Afghanistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">American Samoa</option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                              <option value="Anguilla">Anguilla</option>
                              <option value="Antarctica">Antarctica</option>
                              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                              <option value="Argentina">Argentina</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Australia">Australia</option>
                              <option value="Austria">Austria</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahamas">Bahamas</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Barbados">Barbados</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Belize">Belize</option>
                              <option value="Benin">Benin</option>
                              <option value="Bermuda">Bermuda</option>
                              <option value="Bhutan">Bhutan</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                              <option value="Botswana">Botswana</option>
                              <option value="Brazil">Brazil</option>
                              <option value="Brunei">Brunei</option>
                              <option value="Bulgaria">Bulgaria</option>
                              <option value="Burkina Faso">Burkina Faso</option>
                              <option value="Burundi">Burundi</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Cameroon">Cameroon</option>
                              <option value="Canada">Canada</option>
                              <option value="Cape Verde">Cape Verde</option>
                              <option value="Central African Republic">Central African Republic</option>
                              <option value="Chad">Chad</option>
                              <option value="Chile">Chile</option>
                              <option value="China">China</option>
                              <option value="Colombia">Colombia</option>
                              <option value="Comoros">Comoros</option>
                              <option value="Congo">Congo</option>
                              <option value="Costa Rica">Costa Rica</option>
                              <option value="Croatia">Croatia</option>
                              <option value="Cuba">Cuba</option>
                              <option value="Cyprus">Cyprus</option>
                              <option value="Czech Republic">Czech Republic</option>
                              <option value="Denmark">Denmark</option>
                              <option value="Djibouti">Djibouti</option>
                              <option value="Dominica">Dominica</option>
                              <option value="Dominican Republic">Dominican Republic</option>
                              <option value="Ecuador">Ecuador</option>
                              <option value="Egypt">Egypt</option>
                              <option value="El Salvador">El Salvador</option>
                              <option value="Equatorial Guinea">Equatorial Guinea</option>
                              <option value="Eritrea">Eritrea</option>
                              <option value="Estonia">Estonia</option>
                              <option value="Ethiopia">Ethiopia</option>
                              <option value="Fiji">Fiji</option>
                              <option value="Finland">Finland</option>
                              <option value="France">France</option>
                              <option value="Gabon">Gabon</option>
                              <option value="Gambia">Gambia</option>
                              <option value="Georgia">Georgia</option>
                              <option value="Germany">Germany</option>
                              <option value="Ghana">Ghana</option>
                              <option value="Greece">Greece</option>
                              <option value="Grenada">Grenada</option>
                              <option value="Guatemala">Guatemala</option>
                              <option value="Guinea">Guinea</option>
                              <option value="Guyana">Guyana</option>
                              <option value="Haiti">Haiti</option>
                              <option value="Honduras">Honduras</option>
                              <option value="Hungary">Hungary</option>
                              <option value="Iceland">Iceland</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Iran">Iran</option>
                              <option value="Iraq">Iraq</option>
                              <option value="Ireland">Ireland</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Jamaica">Jamaica</option>
                              <option value="Japan">Japan</option>
                              <option value="Jordan">Jordan</option>
                              <option value="Kazakhstan">Kazakhstan</option>
                              <option value="Kenya">Kenya</option>
                              <option value="Kuwait">Kuwait</option>
                              <option value="Kyrgyzstan">Kyrgyzstan</option>
                              <option value="Laos">Laos</option>
                              <option value="Latvia">Latvia</option>
                              <option value="Lebanon">Lebanon</option>
                              <option value="Lesotho">Lesotho</option>
                              <option value="Liberia">Liberia</option>
                              <option value="Libya">Libya</option>
                              <option value="Lithuania">Lithuania</option>
                              <option value="Luxembourg">Luxembourg</option>
                              <option value="Madagascar">Madagascar</option>
                              <option value="Malawi">Malawi</option>
                              <option value="Malaysia">Malaysia</option>
                              <option value="Maldives">Maldives</option>
                              <option value="Mali">Mali</option>
                              <option value="Malta">Malta</option>
                              <option value="Mauritius">Mauritius</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Mongolia">Mongolia</option>
                              <option value="Morocco">Morocco</option>
                              <option value="Nepal">Nepal</option>
                              <option value="Netherlands">Netherlands</option>
                              <option value="New Zealand">New Zealand</option>
                              <option value="Nigeria">Nigeria</option>
                              <option value="Norway">Norway</option>
                              <option value="Oman">Oman</option>
                              <option value="Pakistan">Pakistan</option>
                              <option value="Panama">Panama</option>
                              <option value="Peru">Peru</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Poland">Poland</option>
                              <option value="Portugal">Portugal</option>
                              <option value="Qatar">Qatar</option>
                              <option value="Romania">Romania</option>
                              <option value="Russia">Russia</option>
                              <option value="Saudi Arabia">Saudi Arabia</option>
                              <option value="South Africa">South Africa</option>
                              <option value="Spain">Spain</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">United Arab Emirates</option>
                              <option value="United Kingdom">United Kingdom</option>
                              <option value="United States">United States</option>
                              <option value="Vietnam">Vietnam</option>
                              <option value="Zambia">Zambia</option>
                              <option value="Zimbabwe">Zimbabwe</option>
                            </select>

                            {errors.country && errors.country != "" ? (
                              <span id="name_error" className="input-error-tip" style={{ display: 'inline-block' }}>{errors.country}</span>
                            ) : ''}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">Address line 1<span className='mandatory_field'>*</span></label>
                            <input type="text" placeholder="980 Kuhio Place"
                              name='address_line_1'
                              value={taxInformation.address_line_1}
                              onChange={(e) => updateInputData(e)}
                            />
                            {errors.address_line_1 && errors.address_line_1 != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.address_line_1}</span>
                      ):''}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">City<span className='mandatory_field'>*</span></label>
                            <input type="text" placeholder="WAILUKU"
                              name='city'
                              value={taxInformation.city}
                              onChange={(e) => updateInputData(e)}
                            />
                            {errors.city && errors.city != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.city}</span>
                      ):''}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">Address line 2 (Optional)</label>
                            <input
                              type="text"
                              placeholder="Apartment, suite, unit, building, oor etc."
                              name='address_line_2'
                              value={taxInformation.address_line_2}
                              onChange={(e) => updateInputData(e)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">State / Province / Region<span className='mandatory_field'>*</span></label>
                            <input type="text" placeholder="Hawaii"
                              name='state'
                              value={taxInformation.state}
                              onChange={(e) => updateInputData(e)}
                            />
                            {errors.state && errors.state != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.state}</span>
                      ):''}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">Zip / Postal code<span className='mandatory_field'>*</span></label>
                            <input type="text" placeholder={96793}
                              name='zip_code'
                              value={taxInformation.zip_code}
                              onChange={(e) => updateInputData(e)}
                            />
                            {errors.zip_code && errors.zip_code != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.zip_code}</span>
                      ):''}
                          </div>
                        </div>
                      </div>
                    </>) : null}
                  </div>
                  <button className="save">Save</button>
                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="breadcrumb_dashboard_right_box">
              <div className="need-help">
                {" "}
                <i className="far fa-question-circle" aria-hidden="true" /> Need
                help?{" "}
              </div>
              <p>
                Our expert team is here to guide you through setting up your shop on
                Sellora.
              </p>
              <div className="send_request_for_call">
                {" "}
                <Link href="#">Send request for call</Link>{" "}
              </div>
            </div>
            <div className="breadcrumb_dashboard_right_box">
              <div className="need-help">Frequently Asked Questions</div>
              <div className="faq_outer">
                <div className="accordion" id="accordionExample">
                  {/*    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           How do you plan to utilize this data in your business strategy?
        </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>
      </div> */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        {" "}
                        How do you plan to utilize this data in your business
                        strategy?{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading-0">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-0"
                        aria-expanded="false"
                        aria-controls="collapse-0"
                      >
                        {" "}
                        Where will this information be used?{" "}
                      </button>
                    </h2>
                    <div
                      id="collapse-0"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading-0"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading-3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                      >
                        {" "}
                        In which sections of your research paper will you
                        incorporate this information?{" "}
                      </button>
                    </h2>
                    <div
                      id="collapse-3"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading-3"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="send_request_for_call">
                {" "}
                <Link href="#">More</Link>{" "}
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>

  )
}

export default page