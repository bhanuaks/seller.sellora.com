import React from 'react'

const page = () => {
  return (
    <div className="rts-register-area job-apply-sectin">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="discription-content job-apply-heading">
          <h1>Applying to Senior Technical Program Manager </h1>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="registration-wrapper-1 job-apply-wrapper mb--20 mt--10">
          <div className="main-register fl-wrap">
            <div className="row">
              <div className="col-lg-12">
                <div className="mrl_20 mb--20 mt--20 job-form-ml">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="custom-form">
                          <form
                            action="#"
                            className="registration-form job-apply-form"
                          >
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  <label>
                                    Upload Resume{" "}
                                    <span className="star">*</span>
                                  </label>
                                </div>
                                <div className="col-lg-9">
                                  <div
                                    className="input-group file-input-group"
                                    data-controller="file-input"
                                  >
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="No file selected"
                                      readOnly=""
                                      data-target="file-input.value"
                                    />
                                    <input
                                      type="file"
                                      className="form-control"
                                      id="customFile"
                                      data-target="file-input.input"
                                      data-action="file-input#display"
                                    />
                                    <div className="input-group-append">
                                      <label
                                        className="btn choose-filebtn mb-0"
                                        htmlFor="customFile"
                                      >
                                        Choose file...
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <div class="input-wrapper job-input-wrapper">
                                                          <div class="row align-items-center">
                                                              <div class="col-lg-3"><label>Upload Resume <span
                                                                          class="star">*</span></label></div>
                                                              <div class="col-lg-9"><input type="file"
                                                                      placeholder="">
                                                              </div>
                                                          </div>
                                                      </div> */}
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  <label>
                                    {" "}
                                    Name <span className="star">*</span>
                                  </label>
                                </div>
                                <div className="col-lg-9">
                                  <input type="text" placeholder="" />
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label>
                                    Email <span className="star">*</span>
                                  </label>
                                </div>
                                <div className="col-lg-9">
                                  {" "}
                                  <input type="email" placeholder="" />
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label>
                                    Phone Number <span className="star">*</span>
                                  </label>
                                </div>
                                <div className="col-lg-9">
                                  {" "}
                                  <input
                                    type="text"
                                    id="mobile_code"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label>
                                    Total Experience (in years){" "}
                                    <span className="star">*</span>
                                  </label>
                                </div>
                                <div className="col-lg-9">
                                  {" "}
                                  <input
                                    type="text"
                                    id="mobile_code"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  <label>
                                    Gender <span className="star">*</span>
                                  </label>
                                </div>
                                <div className="col-lg-9">
                                  <select>
                                    <option>-- Please Select Gender--</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>other</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label>
                                    Current Location
                                    <span className="star">*</span>
                                  </label>
                                </div>
                                <div className="col-lg-9">
                                  {" "}
                                  <input
                                    type="text"
                                    id="mobile_code"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label>
                                    Qualification<span className="star">*</span>
                                  </label>
                                </div>
                                <div className="col-lg-9">
                                  {" "}
                                  <input
                                    type="text"
                                    id="mobile_code"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label>
                                    College Name<span className="star">*</span>
                                  </label>
                                </div>
                                <div className="col-lg-9">
                                  {" "}
                                  <input
                                    type="text"
                                    id="mobile_code"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label>
                                    Year Of Passing{" "}
                                    <span className="star">*</span>
                                  </label>
                                </div>
                                <div className="col-lg-9">
                                  {" "}
                                  <input
                                    type="text"
                                    id="mobile_code"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label>Current Industry</label>
                                </div>
                                <div className="col-lg-9">
                                  {" "}
                                  <input
                                    type="text"
                                    id="mobile_code"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label>Current Company Name</label>
                                </div>
                                <div className="col-lg-9">
                                  {" "}
                                  <input
                                    type="text"
                                    id="mobile_code"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label>Role Applied for </label>
                                </div>
                                <div className="col-lg-9">
                                  {" "}
                                  <input
                                    type="text"
                                    id="mobile_code"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label>
                                    Fixed Compensation
                                    <span className="star">*</span>
                                  </label>
                                </div>
                                <div className="col-lg-9">
                                  {" "}
                                  <input
                                    type="text"
                                    id="mobile_code"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label>Variable Compensation</label>
                                </div>
                                <div className="col-lg-9">
                                  {" "}
                                  <input
                                    type="text"
                                    id="mobile_code"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label className="mob-none">&nbsp;</label>
                                </div>
                                <div className="col-lg-9">
                                  <button className="rts-btn btn-primary jon-apply-btn">
                                    Submit
                                  </button>
                                </div>
                              </div>
                              {/* <div class="input-wrapper" style="margin-bottom:10px">
                                                          <div class="row">
                                                              <div class="col-lg-4">
                                                                  <label for="email">Please select trade role
                                                                      <span class="star">*</span></label>
                                                              </div>
                                                              <div class="col-lg-8">
                                                                  <div class="radio_button">
                                                                      <label>
                                                                          <input type="radio" class="input-radio"
                                                                              checked name="pilih">
                                                                          Buyer</label>
                                                                      <label>
                                                                          <input type="radio" class="input-radio"
                                                                              name="pilih">
                                                                          Seller</label>
                                                                      <label>
                                                                          <input type="radio" class="input-radio"
                                                                              name="pilih">
                                                                          Both</label>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div> */}
                              {/*    <div class="input-wrapper">
                  <div class="row">
                  <div class="col-lg-4"> <label>Verify </label></div>
                  <div class="col-lg-8"> <input type="text" placeholder="Enter company Name"></div>
                  </div>
                  </div> */}
                              {/* <div class="ter_ms">
                                                          <input type="checkbox" name=""> I agree to (a) <a
                                                              href="#">Free Membership Agreement</a>, (b) <a
                                                              href="#">Terms of Use</a>, and (c) <a
                                                              href="#">Privacy Policy</a>. I agree to receive more
                                                          information from sellora.com about its products and
                                                          services.
                                                      </div> */}
                              {/* <button class="rts-btn btn-primary jon-apply-btn mt-5">Submit</button> */}
                              {/* <div class="ter_ms">
By continuing, you agree to Sellora <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
</div>
*/}
                              {/* <div class="another-way-to-registration">
                                                          <div class="registradion-top-text"> <span>Or</span>
                                                          </div>
                                                          <div class="login-with-brand">
                                                              <a href="#" class="single"> <img
                                                                      src="assets/images/form/google.svg"
                                                                      alt="login"> </a>
                                                              <a href="#" class="single faceboomk_button"> <i
                                                                      class="fa-brands fa-facebook-f"></i>
                                                                  Facebook </a>
                                                          </div>
                                                          <div class="new_customer">
                                                              Already have an account? <a href="login.html">Sign
                                                                  in</a></div>
                                                      </div> */}
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
      </div>
    </div>
  </div>
</div>

  )
}

export default page